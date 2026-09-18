// Web acquisition funnel — the paid-traffic path that sells BEFORE the App Store.
//
// WHY THIS EXISTS
// The in-app funnel is not the problem. RevenueCat initial conversion (new customer → trial or
// purchase within 7 days) ran 0% → 1.22% → 2.97% → 4.39% on Sofia from June to September 2026, and
// 25% of its trials converted to paid. What fails is BUYING traffic into it: 100 installs reach the
// paywall ~55 times, produce ~4 trials and ~1 paid subscription, minus Apple's 30%, attributed to
// nothing because the install lands in AppsFlyer's `restricted` bucket. And Sofia cannot run Meta
// app-install campaigns at all — a ghost iOS14+ campaign in a banned Business Manager holds App
// Store ID 6761907539 (#2446692). A web conversion campaign never touches that ID.
//
// THE FLOW IS THE APP'S OWN ONBOARDING
// v1 of this funnel (2026-09-16) copied Praktika's structure screen by screen — a question, then a
// pitch, then a question. The founder's verdict on 2026-09-17 was that it was weak: it sold a
// product the visitor had not met. The flow is now the Bliss guided onboarding, ported from the app
// (`src/config/bliss/onboarding.ts`, mirrored from APPSOFIA `blissGuidedOnboarding.ts`):
//
//   intro (the principle SHOWN — a tutor speaks, you repeat) → language → tutor → vocabulary probe
//   → goal + optional deadline → name → where did you hear about us → plan ready → paywall
//
// Why this is the right funnel and not merely a consistent one: the visitor PICKS A PERSON and
// MEASURES THEMSELVES before any price is shown. By the paywall they have a level, a goal, a
// deadline and a teacher with a name — the thing being sold already exists for them. Praktika's
// own engine is the same trick; the pitch screens were the part worth dropping.
//
// It also removes the seam. The answers are written to `web_funnel_profiles` under the exact keys
// the app's `guidedPrefilledAnswers()` produces, so a web buyer opens the app already knowing their
// level, their goal, their tutor and their name: the funnel IS the onboarding, run once.
//
// THE MONEY PATH, AND WHY IT CANNOT ORPHAN A PURCHASE
// The app's RevenueCat App User ID is the Supabase user id (`revenueCatService.configure(user.id)`
// in `src/hooks/useRevenueCat.ts`, APPSOFIA repo). So the web purchase must carry that same id — but
// putting a signup form in front of the payment is a wall at the most expensive screen of the funnel,
// and Praktika does not do it.
//
// The way out is Supabase anonymous sign-in. On the checkout tap we call `signInAnonymously()`: no
// form, no friction, and it returns a REAL, PERMANENT `user.id`. The purchase is made against that
// id. On the success page the buyer sets an email and password with `updateUser()`, which converts
// the anonymous account into a permanent one WITHOUT changing `user.id`. So:
//
//   checkout tap → anonymous user.id ──→ RevenueCat purchase
//                        │
//                        └──→ same user.id, now with email+password ──→ app sign-in → entitlement
//
// No RevenueCat aliasing to write, no reconciliation job, and nothing to orphan if the buyer closes
// the tab after paying: the purchase already sits on the final id. The one prerequisite is a project
// setting — Supabase → Authentication → "Allow anonymous sign-ins" must be ON, or `beginCheckout`
// fails loudly instead of sending an untracked buyer to Stripe.
//
// HOSTING CONSTRAINT
// This site is static Astro on GitHub Pages: no server, nowhere to hold a secret key, so creating a
// Stripe Checkout Session from here is impossible. Checkout is RevenueCat Web Billing's HOSTED page
// (Stripe underneath, RC grants the entitlement). Nothing secret ships.
//
// APPLE COMPLIANCE
// Acquiring on the web and signing in inside the app is standard and allowed. What is not allowed is
// steering EXISTING app users to web payment: the in-app IAP paywall stays exactly as it is, and no
// web price is ever shown inside the app.

export interface FunnelPlan {
  /**
   * The RevenueCat package this button buys, sent as `package_id`. RevenueCat's own standard
   * identifiers (`$rc_monthly`, `$rc_annual`, `$rc_three_month`), so the packages are picked from
   * the dashboard's dropdown instead of typed — one typo there and the pre-selection silently
   * falls back to the offering's first package.
   */
  packageId: string;
  name: string;
  /** the price actually charged, formatted — MUST equal what the hosted checkout charges */
  price: string;
  /**
   * The same number, unformatted, for the ad pixels: `value` on InitiateCheckout and Purchase.
   * ⚠️ It must equal `price`. Meta and TikTok bid on this figure, so a stale one here does not show
   * up as a wrong label on screen — it shows up as a bidder optimising towards the wrong buyer.
   */
  amount: number;
  /**
   * The undiscounted price, struck through.
   *
   * ⚠️ Under the EU Omnibus directive a struck-through price must be a price genuinely charged
   * before, for at least 30 days. Do not invent one to manufacture a discount.
   */
  listPrice: string;
  /** headline per-day figure, and the undiscounted per-day struck next to it */
  perDay: string;
  perDayList: string;
  savePercent: number;
  badge?: string;
  highlight?: boolean;
}

export interface FunnelDef {
  id: string;
  /** the app a buyer downloads after paying — a key of `APPS` */
  app: string;
  /** what the paywall sells, in one line */
  paywallTitle: string;
  paywallSub: string;
  /**
   * A funnel for a single-tutor app locks the two steps that would otherwise be a lie: Sofia's
   * buyer is not choosing between ten languages. Locked steps are skipped, and the tutor they
   * imply is pre-selected — the rest of the flow is identical.
   */
  lockedLanguage?: string;
  lockedPersona?: string;
  /** ISO 4217, for the pixels' `value`/`currency` pair. One per funnel: the hosted checkout charges one. */
  currency: string;
  plans: FunnelPlan[];
  /** paywall feature list */
  included: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  /**
   * Minutes the discount banner counts down from, or 0 for no countdown.
   *
   * Founder decision 2026-09-16, after watching Praktika run a 10-minute "50% discount is reserved
   * for" timer. It is manufactured urgency; it is also the category norm. It is a single number here
   * so it can be turned off without touching the page.
   */
  countdownMinutes: number;
}

/**
 * ⚠️ PLACEHOLDER PRICES on both funnels — they must equal what RevenueCat Web Billing actually
 * charges, and each `listPrice` must be a price genuinely charged before (EU Omnibus). The web price
 * does not have to match the App Store, which is half the point of selling here. Confirm every
 * number before sending a single euro of traffic. See FUNNEL.md §4.
 */
const PLANS: FunnelPlan[] = [
  {
    packageId: '$rc_monthly',
    name: '1 month',
    listPrice: '€14.99',
    price: '€9.99',
    amount: 9.99,
    perDayList: '€0.50',
    perDay: '€0.33',
    savePercent: 33,
  },
  {
    packageId: '$rc_annual',
    name: '1 year',
    listPrice: '€99.99',
    price: '€49.99',
    amount: 49.99,
    perDayList: '€0.27',
    perDay: '€0.14',
    savePercent: 50,
    badge: 'Most popular',
    highlight: true,
  },
  {
    packageId: '$rc_three_month',
    name: '3 months',
    listPrice: '€39.99',
    price: '€19.99',
    amount: 19.99,
    perDayList: '€0.44',
    perDay: '€0.22',
    savePercent: 50,
  },
];

const FAQ = [
  {
    q: 'Do I need to be able to speak already?',
    a: 'No. Your tutor explains in the language you already speak and hands you the phrase to say. People start from zero every day.',
  },
  {
    q: 'How is this different from Duolingo?',
    a: 'Duolingo is exercises. This is a conversation out loud, in real time, with corrections on what you actually said.',
  },
  {
    q: 'What happens after I subscribe?',
    a: 'You create your account, download the app, and sign in with it. Your subscription is already there — nothing to restore, and your plan is already built.',
  },
  {
    q: 'Can I cancel?',
    a: 'Any time, from your account settings. You keep access until the end of the period you paid for.',
  },
];

export const FUNNELS: Record<string, FunnelDef> = {
  /**
   * Bliss — every tutor, every language, one subscription. The flow above is its own onboarding.
   *
   * ⚠️ Bliss is NOT on the App Store yet. The page is `noindex` and no campaign points at it, so
   * nothing is broken today; but a buyer who paid here would have nothing to download. Do not send
   * traffic to `/start/` until Bliss ships — send it to `/start/?t=sofia`, which sells a live app.
   */
  bliss: {
    id: 'bliss',
    app: 'bliss',
    paywallTitle: 'Every tutor, every language',
    paywallSub: 'One subscription. Switch teacher or language whenever you want.',
    currency: 'EUR',
    countdownMinutes: 10,
    plans: PLANS,
    included: [
      { title: 'Unlimited conversations', body: 'Talk as long and as often as you want, with any tutor.' },
      { title: 'Corrected as you speak', body: 'The sentence you just said, fixed, with the reason in one line.' },
      { title: 'Ten languages, eight tutors', body: 'Spanish, English, Mandarin, French, Italian, German, Portuguese, Japanese, Korean, Arabic.' },
      { title: 'Taught in your own language', body: 'Your tutor explains in the language you already speak. A total beginner is never lost.' },
      { title: 'Starts where you are', body: 'The level you just measured and the goal you just picked — no generic lesson one.' },
    ],
    faq: FAQ,
  },

  /**
   * Emily — English, live on the App Store since 2026-09-17. The same machine as Bliss with the
   * language and the teacher locked, which is what a single-tutor funnel IS: the flow opens on the
   * vocabulary grid, Emily's green owns the screen, and the buyer downloads an app that exists.
   */
  emily: {
    id: 'emily',
    app: 'emily',
    paywallTitle: 'Get unlimited access to Emily',
    paywallSub: 'The quickest route to actually speaking English.',
    lockedLanguage: 'en',
    lockedPersona: 'emily',
    currency: 'EUR',
    countdownMinutes: 10,
    plans: PLANS,
    included: [
      { title: 'Unlimited conversations', body: 'Talk to Emily as long and as often as you want.' },
      { title: 'Corrected as you speak', body: 'The sentence you just said, fixed, with the reason in one line.' },
      { title: 'Rehearse the hard ones', body: 'Interviews, small talk, IELTS and TOEFL speaking — practised before they count.' },
      { title: 'Taught in your own language', body: 'Emily explains in the language you already speak. A total beginner is never lost.' },
      { title: 'Starts where you are', body: 'The level you just measured and the goal you just picked — no generic lesson one.' },
    ],
    faq: FAQ,
  },

  /**
   * Sofia — the same machine with the language and the tutor locked. Sofia is live, its conversion
   * is measured and rising, and it is the one app Meta cannot reach any other way (a ghost campaign
   * in a banned Business Manager holds App Store ID 6761907539). This is the funnel to buy traffic
   * into today.
   */
  sofia: {
    id: 'sofia',
    app: 'sofia',
    paywallTitle: 'Get unlimited access to Sofia',
    paywallSub: 'The quickest route to actually speaking Spanish.',
    lockedLanguage: 'es',
    lockedPersona: 'sofia',
    currency: 'EUR',
    countdownMinutes: 10,
    plans: PLANS,
    included: [
      { title: 'Unlimited conversations', body: 'Talk to Sofia as long and as often as you want.' },
      { title: 'Corrected as you speak', body: 'The sentence you just said, fixed, with the reason in one line.' },
      { title: 'Pronunciation checked', body: 'Your actual recording is scored sound by sound, not just the words.' },
      { title: 'Taught in your own language', body: 'Sofia explains in the language you already speak. A total beginner is never lost.' },
      { title: 'Starts where you are', body: 'The level you just measured and the goal you just picked — no generic lesson one.' },
    ],
    faq: FAQ,
  },
};

/** `/start/` sells Bliss; `/start/?t=sofia` sells Sofia. */
export const DEFAULT_FUNNEL = 'bliss';

/**
 * RevenueCat Web Billing — the hosted purchase page, created in the RevenueCat dashboard
 * (Project → Apps → New → Web Billing, then connect Stripe). Public URL, ships in client JS.
 *
 * Empty = checkout is NOT configured, and the paywall renders visibly disabled rather than sending a
 * buyer to a dead link. See `isCheckoutConfigured`.
 */
export const RC_WEB_BILLING_URL: string = import.meta.env.PUBLIC_RC_WEB_BILLING_URL ?? '';

/**
 * One hosted checkout PER FUNNEL, because one RevenueCat project cannot sell another's app.
 *
 * Sofia's Web Billing app lives in the Sofia project and grants `Sofia AI Pro`; Emily's lives in
 * hers and grants `Emily Pro`. Sending an Emily buyer to Sofia's checkout would take the money and
 * grant an entitlement her app does not look for — a silent, paid-for failure. So each funnel reads
 * its own secret, and `RC_WEB_BILLING_URL` stays as the fallback for a single-app setup.
 *
 * Empty for a funnel = that funnel's paywall renders visibly disabled. The others keep working.
 */
const CHECKOUT_URLS: Readonly<Record<string, string>> = {
  bliss: import.meta.env.PUBLIC_RC_WEB_BILLING_URL_BLISS ?? '',
  sofia: import.meta.env.PUBLIC_RC_WEB_BILLING_URL_SOFIA ?? '',
  emily: import.meta.env.PUBLIC_RC_WEB_BILLING_URL_EMILY ?? '',
};

export function checkoutUrlForFunnel(funnelId: string): string {
  return CHECKOUT_URLS[funnelId] || RC_WEB_BILLING_URL;
}

/**
 * Supabase — the SAME project as the app, because the user id is what ties the purchase to the app.
 *
 * All variants share one project (`app.json` → `extra.supabaseUrl`, verified 2026-09-16; the "one
 * Supabase project per variant" line in the APPSOFIA CLAUDE.md is stale). The key below is a
 * PUBLISHABLE key: designed to be public, already shipping inside every App Store binary, with
 * row-level security as the actual protection — exactly like GA_MEASUREMENT_ID in ./analytics.ts.
 * Never put a service-role key here; there is no server on this site to hold one.
 */
export const SUPABASE_URL: string =
  import.meta.env.PUBLIC_SUPABASE_URL ?? 'https://wbxuxcvxyzmbyshupycs.supabase.co';
export const SUPABASE_ANON_KEY: string =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_X9wDw87UCK50DrYK1-4QEA_5N5HELzq';

export function isCheckoutConfigured(funnelId?: string): boolean {
  const url = funnelId ? checkoutUrlForFunnel(funnelId) : RC_WEB_BILLING_URL;
  return url !== '' && SUPABASE_URL !== '' && SUPABASE_ANON_KEY !== '';
}

/**
 * Build the hosted checkout URL for a buyer who already has a Supabase user id.
 *
 * VERIFIED against RevenueCat's Web Purchase Links documentation on 2026-09-18. The first version of
 * this function was written blind (the build container could not reach revenuecat.com) and got
 * three things wrong, every one of them silent:
 *
 *   - the App User ID is a PATH SEGMENT — `https://pay.rev.cat/<token>/<appUserId>` — not an
 *     `?app_user_id=` query parameter. Sent as a query parameter it is ignored: the purchase goes
 *     through, the money arrives, and the entitlement lands on an anonymous RevenueCat customer the
 *     app will never look up. That is the one failure this whole design exists to prevent;
 *   - the package pre-selection is `package_id`, not `package`;
 *   - the post-purchase redirect is NOT a per-link parameter. It is set once per Web Purchase Link in
 *     the dashboard ("Redirect to a custom success page"), and RevenueCat appends `app_user_id` to
 *     it. So the success page learns the funnel from the redirect configured there
 *     (`/start/success/?t=<funnel>`), and everything else it needs from the context the page
 *     stashes before leaving (`CHECKOUT_CONTEXT_KEY`).
 *
 * `skip_purchase_success=true` skips RevenueCat's own "Purchase complete" screen: ours is the one
 * that turns the buyer into an app user, and a second success screen is a place to close the tab.
 *
 * Attribution is NOT carried on the URL (it is not a supported parameter): it is already written to
 * `web_funnel_profiles` against the same user id before the redirect.
 *
 * `RC_WEB_BILLING_URL_*` must be the link WITHOUT a user id — `https://pay.rev.cat/<token>`.
 */
export function checkoutUrl(params: { packageId: string; supabaseUserId: string; funnel: string }): string {
  const base = checkoutUrlForFunnel(params.funnel).replace(/\/+$/, '');
  const url = new URL(`${base}/${encodeURIComponent(params.supabaseUserId)}`);
  url.searchParams.set('package_id', params.packageId);
  url.searchParams.set('skip_purchase_success', 'true');
  return url.href;
}

/**
 * What the success page needs and the checkout cannot carry back: the redirect is configured once in
 * the RevenueCat dashboard, so the page stashes this in localStorage (same origin) just before it
 * leaves for the checkout.
 */
export const CHECKOUT_CONTEXT_KEY = 'bliss_checkout_ctx';
export type CheckoutContext = {
  funnel: string;
  packageId: string;
  userId: string;
  name?: string;
  persona?: string;
  at: number;
};
