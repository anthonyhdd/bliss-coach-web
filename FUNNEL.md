# `/start/` — the paid-traffic funnel

Sell the subscription on the web, **before** the App Store. Quiz → plan → paywall → checkout →
account → download. Code: `src/config/funnel.ts`, `src/pages/start/index.astro`,
`src/pages/start/success.astro`.

---

## 1. Why this exists

The in-app funnel is **not** the problem. RevenueCat initial conversion (new customer → trial or
purchase within 7 days), cohorted by first-seen date:

| Month | Sofia | Amélie |
|---|---|---|
| June 2026 | 126 → 0 · 0 % | 109 → 3 · 2.75 % |
| July | 246 → 3 · 1.22 % | 214 → 8 · 3.74 % |
| August | 202 → 6 · 2.97 % | 197 → 6 · 3.05 % |
| September (partial) | 114 → 5 · **4.39 %** | 176 → 2 · 1.14 %\* |

\* *September cohorts have not had their 7 days yet — not a drop.*

Sofia tripled between June and September, and 25 % of its trials convert to paid. What does not work
is **buying traffic into them**:

- 100 installs → ~55 reach the paywall (in-app measurement, 2026-09-12) → ~4 trials → ~1 paid, and
  Apple keeps 30 % of that one.
- The ad network optimises on a blind install that lands in AppsFlyer's `restricted` bucket.
- **Sofia cannot run Meta app-install campaigns at all** — a ghost iOS14+ campaign in a banned
  Business Manager holds App Store ID `6761907539` (#2446692).

Selling on the web fixes all four: 100 % of visitors see the paywall because the paywall *is* the
funnel, ~97 % of the money is kept, the ad network optimises on a real purchase, and a web conversion
campaign never touches the frozen App Store ID.

---

## 2. The structure: the app's own onboarding

v1 of this funnel (2026-09-16) was Praktika's shape, read screen by screen off `start.praktika.ai`:
a question, a pitch screen, a question. The founder's verdict the next day was that it was weak — it
sold a product the visitor had not met. **The flow is now the Bliss guided onboarding**, ported from
the app (APPSOFIA `src/config/blissGuidedOnboarding.ts` → `src/config/bliss/onboarding.ts` here):

```
intro (the principle SHOWN) → language → tutor → vocabulary probe (adaptive, up to 2 grids)
      → goal + optional deadline → name → where did you hear about us → plan ready → paywall
```

Why this sells better than a quiz of pitches: **the visitor picks a person and measures themselves
before any price appears.** By the paywall they have a level they earned, a word count, a goal, a
deadline and a teacher with a name and a face. The thing being sold already exists for them.

What each screen is doing:

- **intro** — not argued, *shown*. A teacher card, a caption typed in the language she teaches, then
  a "your turn" card whose words colour in one by one. The row rotates through the eight teachers
  every ten seconds, each on a different language.
- **language / tutor** — ten languages, eight teachers each (the app's phase 3: every face, every
  language). The native of the language comes first and is the recommended one; the rest are the
  bilingual friends. From the tap on a teacher, **her colour owns the screen** — CTA, progress bar,
  paywall — exactly as in the app.
- **vocabulary** — « tap the words you understand ». The level is never *asked* (`ASKS_LEVEL = false`
  in the app since 2026-09-17): the grids measure it, starting easy and stepping up or down once.
  Ticking nothing is an answer. It yields a CEFR, a word count to show, and the words themselves.
- **goal + deadline** — the goal values are the app's own (`onboardingAnswers['8']`), and the
  deadline is an optional block under the goal, not a screen.
- **name** — collected before the reveal and used on it, the one device worth keeping from Praktika.
- **where did you hear about us** — the same tiles the five in-app onboardings share.
- **plan ready** — the level, the ~word count, the days to the deadline, and three plan rows.

`/start/` runs the Bliss funnel; **`/start/?t=sofia` and `/start/?t=emily` run the same machine with
the language and the teacher locked** (`lockedLanguage` / `lockedPersona`), which is exactly what a single-tutor app's
funnel is. Sofia's intro then says "Speak Spanish for real" and the flow opens on the grid.

**The seam is gone.** `beginCheckout` writes the answers to `web_funnel_profiles` under the exact
keys the app's `guidedPrefilledAnswers()` produces — `'2'`/`spanish_level`, `'8'`, `'3'`,
`bliss_cefr_level`, `bliss_cefr_measured`, `bliss_vocab_size`, `bliss_known_words`, `bliss_deadline`
— so a web buyer opens the app already knowing their level, goal, tutor and name. The onboarding is
run once, on the web, and paid for at the end of it.

**The look is the app's, down to the numbers.** The screens here were rebuilt against
`BlissGuidedOnboarding.tsx`, `GuidedIntroDemo.tsx` and `TutorPickCarousel.tsx`, not approximated from
the tokens: plain white page (not the site's grey-blue), Inter 800 titles with the Instrument Serif
accent, a glass back circle and the small Bliss mark over every title, the intro stage with her card
on the left and the glass bubble grazing its right edge, the answer in a gradient frame with a mic
badge that becomes a check, coloured language tiles, word chips that FILL with her colour and carry
a check, two-column goal tiles and a glass deadline panel. The teacher card is this site's own
`.ccard` — which is what the app copied in the first place, so the round trip closes.

The cards carry the app's own lights: ten particles in the teacher's `glow` colour drifting up the
coloured band and twinkling (`GlowParticles`, count 10), a sheen sweeping across every seven seconds
(`SheenSweep`, 18°), and a sheen on the language tiles too. The coloured band is HER GRADIENT rising
through a mask, as in `TutorHeroFrame`'s "site" appearance — not the navy scrim the home page uses.
All of it stops under `prefers-reduced-motion`.

**The paywall is the app's paywall** (`screens/paywall/bliss/BlissPaywall.tsx`) in its reading order:
the row of teachers with hers in the middle, the Bliss+ badge, the title with its serif second line,
**the pills of the plan they just built** (deadline, measured level, goal — only what the funnel
actually produced), the plans, the button, what it unlocks, the FAQ, the button again.

Three things the app cannot show and the web keeps, all founder decisions: the **countdown**, the
**struck price**, and the **per-day price point**. App Review forbids the first two (2.3.7 / 3.1.2);
a web checkout does not. The page is also deliberately **long**, with the **plans shown twice** —
that is the web funnel's own grammar, not an oversight.

One thing is deliberately not copied: in the app the rail selects the teacher by SWIPING her to the
centre; here a tap selects, with scroll-snap doing the rest. A swipe-to-select carousel on the web
costs a pointer-event rig for no conversion.

⚠️ **The config modules are MIRRORED, not shared.** There is no package between the two repos:
`src/config/bliss/*` was copied on 2026-09-17. Nothing fails loudly when the app's version moves —
the web simply grades a learner on a slightly different test, or offers one teacher fewer.

## 3. How a web purchase reaches the app — and why it cannot orphan

The app's RevenueCat App User ID is the Supabase user id (`revenueCatService.configure(user.id)` in
`src/hooks/useRevenueCat.ts`, APPSOFIA repo). But a signup form in front of the payment is a wall at
the most expensive screen of the funnel, and Praktika does not have one.

The way out is **Supabase anonymous sign-in**:

```
checkout tap → signInAnonymously() → real, permanent user.id ──→ RevenueCat purchase
                                            │
  /start/success/: updateUser({email,password}) — SAME user.id ──→ app sign-in → entitlement
```

No RevenueCat aliasing to write, no reconciliation job, and nothing to orphan if the buyer closes the
tab after paying — the purchase already sits on the final id.

Two prerequisites, both project settings:

1. **Supabase → Authentication → "Allow anonymous sign-ins" must be ON.** If it is off, `beginCheckout`
   fails visibly instead of sending an untracked buyer to Stripe.
2. **Decide "Confirm email".** If it is ON, attaching an email on the success page sends a
   confirmation link and the buyer cannot sign in until they click it — one more step between paying
   and speaking. The purchase is safe either way; the copy adapts.

---

## 4. Setup (~20 min of dashboard)

1. **RevenueCat → project Sofia AI (`e85dcf03`) → Apps → New → Web Billing.** Connect Stripe. The
   project currently has only `app_store` + `test_store`.
2. Create packages matching `PLANS` in `src/config/funnel.ts` (`monthly`, `annual`, `quarterly`) and
   attach them to the existing **`Sofia AI Pro`** entitlement. Bliss will need its own Web Billing
   app and its own entitlement when it ships — the package ids are the same, the project is not.
3. Copy the hosted checkout URL into that funnel's repo secret — **`PUBLIC_RC_WEB_BILLING_URL_SOFIA`**,
   **`_EMILY`** or **`_BLISS`** (the unsuffixed `PUBLIC_RC_WEB_BILLING_URL` is the fallback). Supabase
   values already default correctly, so this is the only secret required per funnel.

   ⚠️ **One checkout per funnel, and never a shared one.** A RevenueCat project sells its own app:
   Sofia's Web Billing app grants `Sofia AI Pro`, Emily's grants `Emily Pro`. Pointing Emily's buyers
   at Sofia's checkout takes the money and writes an entitlement Emily's app never looks for — paid
   for, and silently broken. Each funnel whose secret is missing renders its paywall disabled; the
   others keep selling.
4. **Confirm all six prices.** They are placeholders. The web price need not match the App Store —
   that is half the point — but the page and the charge must agree, and under the **EU Omnibus
   directive each struck-through `listPrice` must be a price genuinely charged before**, for at least
   30 days. Do not invent one to manufacture a discount.

---

## 5. Verify before spending a cent

The checkout URL format was **verified against RevenueCat's Web Purchase Links documentation on
2026-09-18** — and the first, blind version had it wrong in three silent ways (`checkoutUrl()` in
`src/config/funnel.ts` says which). The shape now:

```
https://pay.rev.cat/<token>/<supabase user id>?package_id=$rc_annual&skip_purchase_success=true
```

- The **secret is the link without a user id**: `https://pay.rev.cat/<token>`.
- The **redirect is set in the dashboard**, once per Web Purchase Link: "Redirect to a custom success
  page" → `https://bliss-coach.com/start/success/?t=<funnel>`. RevenueCat appends `app_user_id`.
  Everything else the success page needs is stashed by the paywall in `localStorage` before it leaves.
- Packages use RevenueCat's own identifiers — `$rc_monthly`, `$rc_annual`, `$rc_three_month` —
  picked from the dropdown, never typed.

Still do one test purchase before any ad spend — documentation is not a purchase:

1. Point the funnel at the link's **Sandbox** URL, walk `/start/?t=<funnel>` and buy with a Stripe
   test card.
2. In RevenueCat → **Customers**, the purchase's App User ID **must** be a Supabase UUID, not
   `$RCAnonymous…`.
3. Finish on `/start/success/`, install the app, sign in with that email, confirm Pro is active
   **without restoring**. Then switch the secret to the **Production** URL.

## 6. Decisions already made (and how to reverse them)

| Decision | Where | Why |
|---|---|---|
| **Direct pay with a discount, no trial** | `plans` | Founder decision 2026-09-16 after reading Praktika's paywall, which sells outright at −50 % with a countdown. Revenue lands immediately instead of three days later. The cost is fewer conversion events per euro for Meta's learning phase. |
| **10-minute countdown** | `countdownMinutes` | Founder decision, same day. It is manufactured urgency and it is the category norm; set to `0` to remove it without touching the page. It floors at 0:00 rather than expiring — killing the offer a visitor is reading would cost the sale the timer exists to win. |
| **Account after payment** | `success.astro` | Praktika's order, made safe by anonymous sign-in (§3). |
| **The app's onboarding, not a quiz** | `src/config/bliss/*` | Founder, 2026-09-17: the Praktika-shaped v1 was weak. Picking a teacher and measuring yourself sells the product by using it. Reverting means restoring the deleted `screens` array — the machine is now the page. |
| **Bliss is the default, Sofia is `?t=`** | `DEFAULT_FUNNEL` | Bliss is what the flow is FOR (ten languages, eight teachers). Sofia is the same flow locked to one pair — and the one to buy traffic into until Bliss ships. |
| **`noindex` + out of the sitemap** | `index.astro`, `astro.config.mjs` | The funnel would rank as a thin duplicate of `/sofia/` and split its organic signal. |
| **Hosted checkout, not raw Stripe** | `RC_WEB_BILLING_URL` | Static site on GitHub Pages: no server, nowhere to hold a secret key. Raw Stripe would need an edge function *and* a hand-written entitlement sync RevenueCat already provides. |

---

## 7. Pixels — what each network is told

GA4 keeps the funnel's own vocabulary and fires at every step (`funnel_started`, `funnel_step_view`,
`funnel_answer`, `funnel_plan_view`, `funnel_plan_selected`, `funnel_checkout_started`,
`funnel_checkout_redirect`, `funnel_checkout_failed`, `funnel_purchase`, `funnel_account_claimed`,
`funnel_claim_no_session`). `utm_*` / `fbclid` / `ttclid` / `gclid` are captured on arrival and
carried into the checkout URL.

The **ad pixels get four events only** — a pixel fed thirty custom events optimises on none of them.
`src/lib/funnelTrack.ts` is the single fan-out:

| Funnel event | Meta | TikTok | Value |
|---|---|---|---|
| `funnel_started` | `ViewContent` | `ViewContent` | — |
| `funnel_plan_view` | `AddToCart` | `AddToCart` | — |
| `funnel_checkout_started` | `InitiateCheckout` | `InitiateCheckout` | plan price |
| `funnel_purchase` | `Purchase` | `CompletePayment` | plan price |

- **The value is `FunnelPlan.amount`**, a number kept beside the displayed `price`. The networks bid
  on that figure, so a stale one does not show up as a wrong label — it shows up as a bidder
  optimising towards the wrong buyer. Change the two together.
- **Funnel pages only.** `Base` takes a `pixels` prop; the landings and the articles never load a
  tracker. Organic readers are not the campaign's audience, and every tracker on them is consent
  we would owe for nothing.
- **Nothing loads without an id.** `PUBLIC_META_PIXEL_ID` / `PUBLIC_TIKTOK_PIXEL_ID` are repo
  secrets passed at build time (`deploy.yml`); unset — the default today — emits no script and makes
  no request. Meta's id must come from a **clean Business Manager**, never the banned Sofia BM.
- **Every event carries an `event_id`** (`eventID` for Meta, `event_id` for TikTok) so a server-side
  copy can be deduplicated against it later. There is no server here — a static site on GitHub Pages
  has nowhere to hold an access token — but the id cannot be added retroactively to events already
  collected, so it is sent now.
- **The purchase is guarded against a reload**: `/start/success/` is a redirect target, and a
  bookmark or a refresh would fire `Purchase` again. One report per package per browser
  (`localStorage`), which is the most this page can honestly claim.

### ⚠️ Consent

Both pixels set first-party cookies and this site has **no consent banner**, so EU traffic is not
covered. That is a decision to make before spending, not a detail: either a banner goes in front of
the funnel, or the risk is accepted deliberately. Nothing in the code assumes one exists.

### Still missing

- **CAPI / Events API.** Browser-side only today. Meta's server copy is what recovers the ~20-30 %
  of events a browser loses to ad blockers and ITP, and it needs a server (an edge function, or a
  purchase webhook from RevenueCat). The `event_id` groundwork is done.

## 8. What this does not do yet

- **The vocabulary check is not graded.** It is collected (`words_known` on `funnel_plan_view`) and
  shown back on the reveal, but it does not yet change the plan or pre-set the level in the app.
- **⚠️ Bliss is not on the App Store yet.** `/start/` sells it, `/start/success/` has no download
  link to give (it says so honestly instead of pointing at nothing), and the page is `noindex` with
  no campaign behind it. **Send paid traffic to `/start/?t=sofia` until Bliss ships.**
- **The probe's words are not handed to the first conversation yet** — `bliss_known_words` is
  written, the app reads it in `learnerIntake`, but nothing here checks that it arrived.
- **The recording stopped at Praktika's paywall**, so their checkout, account creation and app
  hand-off were never seen. Those three screens here are our design, not theirs.
