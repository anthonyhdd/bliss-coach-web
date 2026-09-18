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
 * copy later (Meta CAPI / TikTok Events API). There is no server here today — a static site on
 * GitHub Pages has nowhere to hold an access token — but sending the id now costs nothing and is
 * the one thing that cannot be added retroactively to events already collected.
 */

type Params = Record<string, unknown>;

interface PixelWindow extends Window {
  gtag?: (...a: unknown[]) => void;
  fbq?: (...a: unknown[]) => void;
  ttq?: { track: (event: string, params?: Params, opts?: Params) => void };
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
  const w = window as PixelWindow;
  const id = eventId();

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

  if (w.ttq && typeof w.ttq.track === 'function') {
    w.ttq.track(
      mapped.tiktok,
      value ? { value: value.value, currency: value.currency, ...contents } : contents,
      { event_id: id },
    );
  }
}
