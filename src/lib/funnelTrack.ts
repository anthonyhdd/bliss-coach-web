/**
 * One funnel event → GA4, Meta and TikTok.
 *
 * The pages call `track('funnel_plan_view', {...})` and this decides what each destination hears.
 * GA4 keeps the funnel's own vocabulary (every step, every answer) because that is where the funnel
 * is READ. The pixels only ever get the four events a network can bid on — a pixel fed thirty
 * custom events optimises on none of them.
 *
 *   funnel_started          → ViewContent      / ViewContent
 *   funnel_plan_view        → AddToCart        / AddToCart        (the paywall was reached)
 *   funnel_checkout_started → InitiateCheckout / InitiateCheckout
 *   funnel_purchase         → Purchase         / CompletePayment  (with value + currency)
 *   funnel_trial_started    → StartTrial       / Subscribe        (value 0 + predicted_ltv)
 *
 * `eventId` is sent to both networks so the same event can be deduplicated against a server-side
 * copy. Meta's server-side copy is live (2026-09-19): `__blissCapi` (Pixels.astro) relays each event to
 * the `meta-capi` Supabase edge function, which holds the Conversions API token. TikTok Events API
 * is not wired yet.
 */

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/funnel';

type Params = Record<string, unknown>;

interface PixelWindow extends Window {
  gtag?: (...a: unknown[]) => void;
  fbq?: (...a: unknown[]) => void;
  /** Conversions API relay, defined by Pixels.astro; no-op until the visitor accepted the pixel. */
  __blissCapi?: (event: string, id: string, data: Params) => void;
  ttq?: { track: (event: string, params?: Params, opts?: Params) => void };
  __blissFlushPixels?: (c: { analytics?: boolean; ads?: boolean }) => void;
  __blissHit?: (event: string, step?: string) => void;
  __blissHitStarted?: boolean;
}

/**
 * Events fired BEFORE the visitor answered the cookie banner.
 *
 * Every tracker waits for consent (ConsentBanner), and until 2026-09-19 an event fired before the
 * answer was simply dropped: a visitor who tapped the checkout button and only then accepted
 * cookies sent Meta no InitiateCheckout — the one event the Sales campaign bids on. Nothing leaves
 * the page before consent: the events wait here, in memory, and are sent only once the visitor
 * agrees, and only to the destinations they agreed to. A refusal drops them. A reload loses them.
 */
type Pending = { event: string; params: Params; value?: TrackValue; id: string };
const pending: Pending[] = [];
const PENDING_MAX = 30;

/** What the banner stored — the same key and shape as ConsentBanner's `read()`. */
function storedConsent(): { analytics: boolean; ads: boolean } | null {
  try {
    const c = JSON.parse(localStorage.getItem('bliss_consent_v1') || 'null');
    if (c && c.v === 1 && typeof c.at === 'number' && Date.now() - c.at < 182 * 24 * 60 * 60 * 1000) {
      return { analytics: !!c.analytics, ads: !!c.ads };
    }
  } catch {
    /* private mode */
  }
  return null;
}

function consentLabel(): string {
  const c = storedConsent();
  if (!c) return 'unknown';
  if (c.analytics && c.ads) return 'accepted';
  if (!c.analytics && !c.ads) return 'refused';
  return 'partial';
}

/**
 * First-party audience count — the only measurement that does not wait for the banner.
 *
 * Without it the funnel was blind: GA4 and the pixels all sit behind consent, so "73 ad clicks, 5
 * landing-page views" could not tell a page that loses people from visitors who never answered the
 * banner. This is the CNIL's exempted audience measurement (lignes directrices cookies 2020, art. 5):
 * first-party only (our own Supabase), strictly counting steps, no cookie and no storage (the id
 * lives in memory for one page load), no IP stored, never sent to a third party, never joined to an
 * account. Fire-and-forget: a failure is silent and never touches the funnel.
 */
const tabId = `t${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
const utm = (() => {
  try {
    const q = new URLSearchParams(location.search);
    const g = (k: string) => (q.get(k) || '').slice(0, 120) || null;
    return { utm_source: g('utm_source'), utm_campaign: g('utm_campaign'), utm_content: g('utm_content') };
  } catch {
    return { utm_source: null, utm_campaign: null, utm_content: null };
  }
})();
const os = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  ? 'ios'
  : /Android/i.test(navigator.userAgent)
    ? 'android'
    : 'other';

export function hit(event: string, step?: string): void {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  try {
    const q = new URLSearchParams(location.search);
    void fetch(`${SUPABASE_URL}/rest/v1/web_funnel_hits`, {
      method: 'POST',
      keepalive: true,
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        tab_id: tabId,
        funnel: (q.get('t') || '').slice(0, 40) || null,
        event: event.slice(0, 40),
        step: step ? step.slice(0, 60) : null,
        consent: consentLabel(),
        ...utm,
        lang: (navigator.language || '').slice(0, 12) || null,
        os,
      }),
    }).catch(() => {});
  } catch {
    /* never let counting break the funnel */
  }
}

/** Standard-event names, per network. `null` = GA4 only. */
const PIXEL_EVENTS: Readonly<Record<string, { meta: string; tiktok: string }>> = {
  funnel_started: { meta: 'ViewContent', tiktok: 'ViewContent' },
  funnel_plan_view: { meta: 'AddToCart', tiktok: 'AddToCart' },
  funnel_checkout_started: { meta: 'InitiateCheckout', tiktok: 'InitiateCheckout' },
  funnel_purchase: { meta: 'Purchase', tiktok: 'CompletePayment' },
  funnel_trial_started: { meta: 'StartTrial', tiktok: 'Subscribe' },
};

/**
 * The money on an event. Sent on the two events where a real amount exists — the checkout tap (the
 * plan they chose) and the purchase. Never on a step view: a value invented to make an event look
 * rich teaches the bidder a lie it will then optimise towards.
 */
export type TrackValue = {
  value: number;
  currency: string;
  contentId?: string;
  /** what the subscription is expected to bring — Meta's `predicted_ltv`, sent on StartTrial */
  predictedLtv?: number;
};

function eventId(): string {
  const c = globalThis.crypto;
  if (c && 'randomUUID' in c) return c.randomUUID();
  return `e${Date.now()}${Math.random().toString(16).slice(2, 10)}`;
}

export function track(event: string, params: Params = {}, value?: TrackValue): void {
  const id = eventId();
  hit(event, typeof params.step === 'string' ? params.step : typeof params.package === 'string' ? params.package : undefined);
  // No answer from the banner yet: keep it for later instead of losing it.
  if (!storedConsent()) {
    if (pending.length < PENDING_MAX) pending.push({ event, params, value, id });
    return;
  }
  send(event, params, value, id);
}

function send(event: string, params: Params, value: TrackValue | undefined, id: string): void {
  const w = window as PixelWindow;

  if (typeof w.gtag === 'function') {
    w.gtag('event', event, value ? { ...params, event_id: id, ...value } : { ...params, event_id: id });
  }

  const mapped = PIXEL_EVENTS[event];
  if (!mapped) return;

  const contents = {
    ...(value?.contentId ? { content_id: value.contentId, content_type: 'product' } : {}),
    ...(value?.predictedLtv != null ? { predicted_ltv: value.predictedLtv } : {}),
  };

  if (typeof w.fbq === 'function') {
    w.fbq(
      'track',
      mapped.meta,
      value ? { value: value.value, currency: value.currency, ...contents } : contents,
      { eventID: id },
    );
  }

  if (typeof w.__blissCapi === 'function') {
    w.__blissCapi(mapped.meta, id, {
      ...(value ? { value: value.value, currency: value.currency } : {}),
      ...(value?.contentId ? { content_id: value.contentId } : {}),
      ...(value?.predictedLtv != null ? { predicted_ltv: value.predictedLtv } : {}),
    });
  }

  if (w.ttq && typeof w.ttq.track === 'function') {
    w.ttq.track(
      mapped.tiktok,
      value ? { value: value.value, currency: value.currency, ...contents } : contents,
      { event_id: id },
    );
  }
}

// Called by ConsentBanner right after it loads the trackers the visitor agreed to. The loaders
// install `gtag` / `fbq` / `ttq` stubs synchronously, so the replay is queued behind the init.
// `send` only reaches the destinations that exist — i.e. the ones consented to.
if (typeof window !== 'undefined') {
  const w = window as PixelWindow;
  w.__blissFlushPixels = (c) => {
    const items = pending.splice(0, pending.length);
    if (!c.analytics && !c.ads) return;
    for (const p of items) send(p.event, p.params, p.value, p.id);
  };
  w.__blissHit = hit;
  if (!w.__blissHitStarted) {
    w.__blissHitStarted = true;
    hit('page_view', location.pathname);
  }
}
