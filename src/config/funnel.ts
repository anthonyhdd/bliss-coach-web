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
// THE SHAPE IS PRAKTIKA'S, THE SUBSTANCE IS OURS
// Structure taken from a screen-by-screen reading of start.praktika.ai (recorded 2026-09-16): the
// funnel never runs two questions back to back. Every question is followed by a PITCH screen, so the
// questions build commitment while the pitches do the selling. Their questions are projective, not
// demographic — the strongest one makes the visitor state the pain themselves ("I don't understand
// when someone speaks fluently" → true / partially true / not true) rather than being told it.
//
// What is deliberately NOT copied is their proof. Praktika leads with "30M+ people" and "4.7★";
// Sofia has between 1 and 4 App Store ratings (iTunes lookup, 2026-09-15). Inventing that number
// would be a lie a buyer can check in ten seconds, so every pitch screen here states a product fact
// instead — the same rule `src/config/tutorPitch.ts` already sets for the landings. Keep it that way.
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

export interface FunnelOption {
  id: string;
  label: string;
  hint?: string;
  glyph?: string;
}

/** A question. Never two in a row — see the pitch screens below. */
export interface QuestionScreen {
  kind: 'question';
  /** URL hash and analytics name — stable, never renamed without updating GA4 */
  id: string;
  question: string;
  sub?: string;
  options: FunnelOption[];
}

/** A free-text answer used later by name (Praktika asks the first name and uses it on the reveal). */
export interface InputScreen {
  kind: 'input';
  id: string;
  question: string;
  sub?: string;
  placeholder: string;
}

/**
 * A multi-select vocabulary check — Praktika's best question.
 *
 * It engages (tapping words is a game, not a form), it yields a real level signal, and above all it
 * makes the plan feel EARNED rather than generated. Worth keeping even though we do not yet grade it.
 */
export interface WordsScreen {
  kind: 'words';
  id: string;
  question: string;
  sub: string;
  words: string[];
}

/**
 * A belief screen between two questions. This is the part that sells.
 *
 * `proof` must be a fact a buyer can verify in the app. No rating counts, no user counts — see the
 * header of this file.
 */
export interface PitchScreen {
  kind: 'pitch';
  id: string;
  title: string;
  body?: string;
  /** big contrast line, e.g. a price comparison */
  punch?: { before: string; beforeLabel: string; after: string; afterLabel: string; line: string };
  proof?: { value: string; label: string }[];
}

export type FunnelScreen = QuestionScreen | InputScreen | WordsScreen | PitchScreen;

export interface FunnelPlan {
  /** RevenueCat Web Billing package identifier this button buys */
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
  /** the app a buyer downloads after paying */
  app: string;
  headline: string;
  sub: string;
  screens: FunnelScreen[];
  /** the four lines that tick over on the "building your plan" loader */
  buildSteps: string[];
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

export const FUNNELS: Record<string, FunnelDef> = {
  // Sofia first, not Bliss: Sofia is live, its conversion is measured and rising, and it is the one
  // app Meta cannot reach any other way. Bliss gets this same funnel by adding an entry here once it
  // ships — the machine is the page, not the app.
  sofia: {
    id: 'sofia',
    app: 'sofia',
    headline: 'Speak Spanish, from your very first sentence',
    sub: 'Answer 6 quick questions and Sofia builds your speaking plan.',
    countdownMinutes: 10,
    currency: 'EUR',
    screens: [
      {
        kind: 'question',
        id: 'why',
        question: 'Why do you want to speak Spanish?',
        sub: 'There is no wrong answer — this sets your first conversation.',
        options: [
          { id: 'travel', label: 'Travel', hint: 'Order, ask, get around', glyph: '✈️' },
          { id: 'people', label: 'Someone I want to talk to', hint: 'Family, partner, friends', glyph: '❤️' },
          { id: 'work', label: 'Work', hint: 'Colleagues, clients, meetings', glyph: '💼' },
          { id: 'living', label: 'Living abroad', hint: 'Moving, or already there', glyph: '🏡' },
          { id: 'always', label: 'I have always wanted to', glyph: '🌎' },
        ],
      },
      {
        kind: 'pitch',
        id: 'pitch_tutor',
        title: 'A tutor who talks back',
        body: 'Sofia is a real voice conversation, not a set of flashcards. You speak, she answers, and she corrects the sentence you just said.',
        proof: [
          { value: 'Voice', label: 'real conversations' },
          { value: 'Native', label: 'Mexican Spanish' },
          { value: '0', label: 'drills or flashcards' },
        ],
      },
      {
        kind: 'question',
        id: 'last_time',
        question: 'When did you last try to learn a language?',
        options: [
          { id: 'recently', label: 'Recently' },
          { id: 'year', label: 'About a year ago' },
          { id: 'long', label: 'More than a year ago' },
          { id: 'never', label: 'Never' },
        ],
      },
      {
        kind: 'pitch',
        id: 'pitch_price',
        title: 'You are nearly there!',
        punch: {
          before: '💰💰💰💰',
          beforeLabel: 'Private tutor',
          after: '💰',
          afterLabel: 'Sofia',
          line: 'A fraction of the price',
        },
        body: 'A private Spanish tutor runs €25–40 an hour. Sofia is unlimited, and she is awake whenever you are.',
      },
      {
        kind: 'question',
        id: 'pain',
        question: '“I freeze when I actually have to speak.”',
        sub: 'Is this true for you?',
        options: [
          { id: 'true', label: 'True', glyph: '👍' },
          { id: 'partly', label: 'Partially true', glyph: '🤷' },
          { id: 'false', label: 'That’s not true for me', glyph: '👎' },
        ],
      },
      {
        kind: 'pitch',
        id: 'pitch_safe',
        title: 'Nobody is listening but Sofia',
        body: 'That is the whole point of practising with her first. She never sighs, never rushes you, and never makes you feel stupid for repeating a sentence four times.',
      },
      {
        kind: 'words',
        id: 'vocab',
        question: 'Select all the words you know:',
        sub: 'A1–A2 Beginner Level',
        words: [
          'amigo', 'año', 'agua', 'árbol',
          'bueno', 'beber', 'hola', 'casa',
          'calor', 'buscar', 'perro', 'cocina',
          'mañana', 'escuela', 'todavía', 'fácil',
          'familia', 'hacer', 'hora', 'invierno',
          'libro', 'gente', 'caminar', 'noche',
          'trabajo', 'tiempo', 'ahora', 'gracias',
        ],
      },
      {
        kind: 'pitch',
        id: 'pitch_plan',
        title: 'Sofia is building a plan just for you',
        body: 'Your level, your goal and the time you actually have. A few more questions and it is ready.',
      },
      {
        kind: 'question',
        id: 'time',
        question: 'How long can you practise a day?',
        sub: 'Be honest — the plan is built to be kept, not to impress.',
        options: [
          { id: '5', label: '5 minutes', hint: 'One short conversation', glyph: '⚡' },
          { id: '10', label: '10 minutes', hint: 'The sweet spot', glyph: '🔥' },
          { id: '20', label: '20 minutes', hint: 'Fast progress', glyph: '🚀' },
          { id: '30', label: '30 minutes or more', hint: 'All in', glyph: '🏆' },
        ],
      },
      {
        kind: 'input',
        id: 'name',
        question: 'What should Sofia call you?',
        sub: 'She uses your name from the first conversation.',
        placeholder: 'Your name',
      },
    ],
    buildSteps: [
      'Reading your answers',
      'Choosing your first conversation',
      'Setting your daily rhythm',
      'Finishing your plan',
    ],
    included: [
      { title: 'Unlimited conversations', body: 'Talk to Sofia as long and as often as you want.' },
      { title: 'Corrected as you speak', body: 'The sentence you just said, fixed, with the reason in one line.' },
      { title: 'Pronunciation checked', body: 'Your actual recording is scored sound by sound, not just the words.' },
      { title: 'Taught in your own language', body: 'Sofia explains in the language you already speak. A total beginner is never lost.' },
      { title: 'Starts where you are', body: 'Your level and your goal from day one — no generic lesson one.' },
    ],
    faq: [
      {
        q: 'Do I need to be able to speak already?',
        a: 'No. Sofia explains in the language you already speak and hands you the Spanish phrase to say. People start from zero every day.',
      },
      {
        q: 'How is this different from Duolingo?',
        a: 'Duolingo is exercises. Sofia is a conversation out loud, in real time, with corrections on what you actually said.',
      },
      {
        q: 'What happens after I subscribe?',
        a: 'You create your account, download the app, and sign in with it. Your subscription is already there — nothing to restore.',
      },
      {
        q: 'Can I cancel?',
        a: 'Any time, from your account settings. You keep access until the end of the period you paid for.',
      },
    ],
    // ⚠️ PLACEHOLDER PRICES — they must equal what RevenueCat Web Billing actually charges, and each
    // `listPrice` must be a price genuinely charged before (EU Omnibus). The App Store yearly is
    // €49.99; the web price does not have to match it, which is half the point of selling here.
    // Confirm all six numbers before sending a single euro of traffic. See FUNNEL.md §3.
    plans: [
      {
        packageId: 'monthly',
        name: '1 month',
        listPrice: '€14.99',
        price: '€9.99',
        amount: 9.99,
        perDayList: '€0.50',
        perDay: '€0.33',
        savePercent: 33,
      },
      {
        packageId: 'annual',
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
        packageId: 'quarterly',
        name: '3 months',
        listPrice: '€39.99',
        price: '€19.99',
        amount: 19.99,
        perDayList: '€0.44',
        perDay: '€0.22',
        savePercent: 50,
      },
    ],
  },
};

export const DEFAULT_FUNNEL = 'sofia';

/**
 * RevenueCat Web Billing — the hosted purchase page, created in the RevenueCat dashboard
 * (Project → Apps → New → Web Billing, then connect Stripe). Public URL, ships in client JS.
 *
 * Empty = checkout is NOT configured, and the paywall renders visibly disabled rather than sending a
 * buyer to a dead link. See `isCheckoutConfigured`.
 */
export const RC_WEB_BILLING_URL: string = import.meta.env.PUBLIC_RC_WEB_BILLING_URL ?? '';

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

export function isCheckoutConfigured(): boolean {
  return RC_WEB_BILLING_URL !== '' && SUPABASE_URL !== '' && SUPABASE_ANON_KEY !== '';
}

/**
 * Build the hosted checkout URL for a buyer who already has a Supabase user id.
 *
 * ⚠️ THE PARAMETER NAMES BELOW ARE UNVERIFIED. They were written without access to RevenueCat's Web
 * Billing documentation (the build container's egress proxy blocks revenuecat.com), so `app_user_id`
 * and `package` are the conventional names, not names read from the spec. Check them when the hosted
 * checkout is created, and fix them here — this function is the single place they appear.
 *
 * Getting `app_user_id` wrong does not fail loudly: the purchase succeeds, the money arrives, and the
 * entitlement lands on a customer the app will never look up. One real test purchase must confirm a
 * Supabase id before any ad spend (FUNNEL.md §4).
 */
export function checkoutUrl(params: {
  packageId: string;
  supabaseUserId: string;
  funnel: string;
  returnTo: string;
  attribution?: Record<string, string>;
}): string {
  const url = new URL(RC_WEB_BILLING_URL);
  url.searchParams.set('app_user_id', params.supabaseUserId);
  url.searchParams.set('package', params.packageId);
  url.searchParams.set('funnel', params.funnel);
  url.searchParams.set('redirect_url', params.returnTo);
  for (const [k, v] of Object.entries(params.attribution ?? {})) {
    if (v) url.searchParams.set(k, v);
  }
  return url.href;
}
