// Web acquisition funnel — the paid-traffic path that sells BEFORE the App Store.
//
// WHY THIS EXISTS
// The in-app funnel converts fine: RevenueCat initial conversion (new customer → trial or purchase
// within 7 days) ran 0% → 1.22% → 2.97% → 4.39% on Sofia from June to September 2026, and 25% of
// Sofia's trials converted to paid. What does not work is BUYING traffic into it:
//   - 100 installs → ~55 reach the paywall (in-app measurement, 2026-09-12) → ~4 trials → ~1 paid,
//     and Apple keeps 30% of it;
//   - the ad network optimises on a blind install that lands in AppsFlyer's `restricted` bucket
//     because the user never resolved ATT;
//   - Sofia specifically CANNOT run Meta app-install campaigns at all: a ghost iOS14+ campaign in a
//     banned Business Manager holds App Store ID 6761907539 (error #2446692), and the App Store IDs
//     are frozen there.
// Selling on the web fixes all four at once: 100% of visitors see the paywall (it IS the funnel),
// ~97% of the money is kept instead of 70%, the ad network optimises on a real purchase event, and a
// web conversion campaign never touches the frozen App Store ID.
//
// THE ONE THING THAT MAKES THIS SAFE
// The app's RevenueCat App User ID is the Supabase user id — `revenueCatService.configure(user.id)`
// in `src/hooks/useRevenueCat.ts` (APPSOFIA repo). So a web purchase made against that SAME id lands
// on the same RevenueCat customer, and the app reads the entitlement it already reads today. No app
// change, no custom entitlement sync, no "restore" flow to build. The corollary is the hard rule of
// this funnel: THE USER SIGNS IN BEFORE PAYING. A purchase made against an anonymous web id is a
// purchase the app will never see.
//
// HOSTING CONSTRAINT
// This site is static Astro on GitHub Pages — there is no server and no place to hold a secret key,
// so creating a Stripe Checkout Session from here is impossible. Checkout is therefore RevenueCat
// Web Billing's HOSTED page (Stripe underneath, RC grants the entitlement). Nothing secret ships.
//
// APPLE COMPLIANCE
// Acquiring on the web and signing in inside the app is fine and standard. What is not allowed is
// steering EXISTING app users to web payment: the in-app IAP paywall stays exactly as it is, and no
// web price is ever mentioned inside the app.

export interface FunnelOption {
  id: string;
  label: string;
  /** optional second line under the label */
  hint?: string;
  /** emoji or short glyph shown on the tile */
  glyph?: string;
}

export interface FunnelStep {
  /** URL hash and analytics name — stable, never renamed without updating GA4 */
  id: string;
  question: string;
  /** shown under the question, sets expectation or reduces anxiety */
  sub?: string;
  options: FunnelOption[];
}

export interface FunnelPlan {
  /** RevenueCat Web Billing package identifier this button buys */
  packageId: string;
  name: string;
  /** what the card is charged, formatted for display — MUST match what RC Web Billing charges */
  price: string;
  /** e.g. "per year" */
  cadence: string;
  /** small print under the price, e.g. "€0.96 / week" */
  equivalent?: string;
  badge?: string;
  highlight?: boolean;
}

export interface FunnelDef {
  /** route segment and analytics funnel name */
  id: string;
  /** the app a buyer is sent to download after paying */
  app: string;
  headline: string;
  sub: string;
  steps: FunnelStep[];
  plans: FunnelPlan[];
  /**
   * Trial length in days, or 0 for direct payment with no trial.
   *
   * Set to 3 on the founder's behalf (2026-09-16) and deliberately reversible. The reasoning is
   * about ad-network learning, not about revenue: Meta needs roughly 50 conversions per ad set per
   * week to leave the learning phase, and a card-required trial produces several times more
   * conversion events per euro than direct pay. At a 10-20 €/day budget that difference decides
   * whether the campaign can optimise at all. Flip to 0 to sell outright.
   */
  trialDays: number;
  /** what the user gets, shown on the plan screen */
  included: string[];
}

/** Steps shared by every language funnel. Kept here so a second funnel cannot drift from the first. */
const LEVEL_STEP: FunnelStep = {
  id: 'level',
  question: 'How much {language} do you have already?',
  sub: 'Your first conversation is built on this answer.',
  options: [
    { id: 'none', label: 'None at all', hint: 'Starting from zero', glyph: '🌱' },
    { id: 'some', label: 'A few words', hint: 'Greetings, numbers, not much else', glyph: '🌿' },
    { id: 'rusty', label: 'I used to know some', hint: 'School, or a while ago', glyph: '🍂' },
    { id: 'conversational', label: 'I can hold a conversation', hint: 'I want to get fluent', glyph: '🌳' },
  ],
};

const GOAL_STEP: FunnelStep = {
  id: 'goal',
  question: 'What do you want it for?',
  sub: 'Your tutor picks what to teach you first from this.',
  options: [
    { id: 'travel', label: 'Travel', hint: 'Order, ask, get around', glyph: '✈️' },
    { id: 'work', label: 'Work', hint: 'Meetings, colleagues, clients', glyph: '💼' },
    { id: 'family', label: 'Family or partner', hint: 'People I want to talk to', glyph: '❤️' },
    { id: 'culture', label: 'Films, music, books', hint: 'Understand without subtitles', glyph: '🎬' },
    { id: 'exam', label: 'An exam or a move', hint: 'I have a deadline', glyph: '🎯' },
  ],
};

const TIME_STEP: FunnelStep = {
  id: 'time',
  question: 'How long can you practise a day?',
  sub: 'Be honest — the plan is built to be kept, not to impress.',
  options: [
    { id: '5', label: '5 minutes', hint: 'One short conversation', glyph: '⚡' },
    { id: '10', label: '10 minutes', hint: 'The sweet spot', glyph: '🔥' },
    { id: '20', label: '20 minutes', hint: 'Fast progress', glyph: '🚀' },
    { id: '30', label: '30 minutes or more', hint: 'All in', glyph: '🏆' },
  ],
};

const BLOCKER_STEP: FunnelStep = {
  id: 'blocker',
  question: 'What has stopped you before?',
  sub: 'Everyone has one. Naming it is how your tutor works around it.',
  options: [
    { id: 'speaking', label: 'I freeze when I have to speak', glyph: '😬' },
    { id: 'boring', label: 'Apps got boring and I quit', glyph: '😴' },
    { id: 'time', label: 'I never found the time', glyph: '⏳' },
    { id: 'nobody', label: 'Nobody to practise with', glyph: '🫥' },
    { id: 'new', label: 'This is my first try', glyph: '✨' },
  ],
};

export const FUNNELS: Record<string, FunnelDef> = {
  // Sofia is the first funnel on purpose, not Bliss. Sofia is live, its conversion is measured and
  // rising (4.39% in September), and it is the one app that CANNOT be advertised on Meta any other
  // way. Bliss gets the same funnel by adding an entry here once it ships — the machine is the page,
  // not the app.
  sofia: {
    id: 'sofia',
    app: 'sofia',
    headline: 'Speak Spanish in 3 minutes a day',
    sub: 'Answer 5 questions and we will build your speaking plan. No credit card to see it.',
    trialDays: 3,
    steps: [
      {
        id: 'why',
        question: 'Why Spanish?',
        sub: 'There is no wrong answer — this just sets your first conversation.',
        options: [
          { id: 'travel', label: 'A trip coming up', glyph: '✈️' },
          { id: 'people', label: 'Someone I want to talk to', glyph: '❤️' },
          { id: 'work', label: 'Work', glyph: '💼' },
          { id: 'always', label: 'I have always wanted to', glyph: '🌎' },
        ],
      },
      { ...LEVEL_STEP, question: 'How much Spanish do you have already?' },
      GOAL_STEP,
      TIME_STEP,
      BLOCKER_STEP,
    ],
    included: [
      'Unlimited voice conversations with Sofia',
      'Corrections on the sentence you just said, with the one-line why',
      'Sounding-out tips on the words you actually use',
      'A plan that adapts to your level every day',
      'Cancel any time, in two taps',
    ],
    // ⚠️ PRICES ARE PLACEHOLDERS UNTIL THE FOUNDER CONFIRMS THEM IN REVENUECAT WEB BILLING.
    // They do NOT have to match the App Store prices — that is the point of selling on the web — but
    // whatever is written here MUST equal what the hosted checkout actually charges, or the buyer
    // sees one number and is charged another. `npm run check:funnel` fails while this is unverified.
    plans: [
      {
        packageId: 'annual',
        name: 'Yearly',
        price: '€49.99',
        cadence: 'per year',
        equivalent: 'Less than €1 a week',
        badge: 'Best value',
        highlight: true,
      },
      {
        packageId: 'weekly',
        name: 'Weekly',
        price: '€6.99',
        cadence: 'per week',
      },
    ],
  },
};

export const DEFAULT_FUNNEL = 'sofia';

/**
 * RevenueCat Web Billing.
 *
 * `PUBLIC_RC_WEB_BILLING_URL` is the hosted purchase page of the Web Billing app, created in the
 * RevenueCat dashboard (Project → Apps → New → Web Billing, then connect Stripe). It is a public URL
 * and ships in client JS — there is no secret here and there must never be one.
 *
 * Empty string = checkout is NOT configured. The paywall then renders in a visibly disabled state
 * instead of sending a buyer to a dead link; see `isCheckoutConfigured`.
 */
export const RC_WEB_BILLING_URL: string = import.meta.env.PUBLIC_RC_WEB_BILLING_URL ?? '';

/**
 * Supabase — the SAME project as the app, because the user id is what ties the purchase to the app.
 *
 * All variants share one project (`app.json` → `extra.supabaseUrl`, verified 2026-09-16; the
 * "one Supabase project per variant" line in the APPSOFIA CLAUDE.md is stale). The key below is a
 * PUBLISHABLE key: it is designed to be public, it already ships inside every App Store binary, and
 * row-level security is what protects the data — exactly like GA_MEASUREMENT_ID in ./analytics.ts.
 * Never put a service-role key here; there is no server on this site to hold one.
 */
export const SUPABASE_URL: string =
  import.meta.env.PUBLIC_SUPABASE_URL ?? 'https://wbxuxcvxyzmbyshupycs.supabase.co';
export const SUPABASE_ANON_KEY: string =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_X9wDw87UCK50DrYK1-4QEA_5N5HELzq';

export function isCheckoutConfigured(): boolean {
  return RC_WEB_BILLING_URL !== '' && SUPABASE_URL !== '' && SUPABASE_ANON_KEY !== '';
}

/**
 * Build the hosted checkout URL for a signed-in buyer.
 *
 * `app_user_id` is the whole point: it must be the Supabase user id, because that is what the app
 * passes to `Purchases.configure()`. Everything else is carried so the purchase can be attributed
 * back to the ad that produced it.
 *
 * ⚠️ THE PARAMETER NAMES BELOW ARE UNVERIFIED. They were written without access to RevenueCat's Web
 * Billing documentation (the container's egress proxy blocks revenuecat.com), so `app_user_id` and
 * `package` are the conventional names, not names read from the spec. Check them against the Web
 * Billing docs when the hosted checkout is created, and fix them here — this function is the single
 * place they appear. Getting `app_user_id` wrong does not fail loudly: the purchase succeeds, the
 * money arrives, and the entitlement lands on a customer the app will never look up. Verify with one
 * real test purchase before spending anything on ads (see FUNNEL.md §4).
 */
export function checkoutUrl(params: {
  packageId: string;
  supabaseUserId: string;
  email?: string;
  funnel: string;
  attribution?: Record<string, string>;
}): string {
  const url = new URL(RC_WEB_BILLING_URL);
  url.searchParams.set('app_user_id', params.supabaseUserId);
  url.searchParams.set('package', params.packageId);
  if (params.email) url.searchParams.set('email', params.email);
  url.searchParams.set('funnel', params.funnel);
  for (const [k, v] of Object.entries(params.attribution ?? {})) {
    if (v) url.searchParams.set(k, v);
  }
  return url.href;
}
