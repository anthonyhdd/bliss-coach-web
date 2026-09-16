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

## 2. The structure, and where it comes from

Read screen by screen off `start.praktika.ai` (recording, 2026-09-16). The rule that makes it work:
**a question is never followed by another question.** Questions build commitment; the pitch screens
between them do the selling.

```
intro → why → [pitch: a tutor who talks back] → last_time → [pitch: 50× cheaper]
      → pain → [pitch: nobody is listening] → vocab → [pitch: building your plan]
      → time → name → building → plan reveal → paywall
```

Three of Praktika's devices are worth naming because they are the non-obvious part:

- **The pain question is projective.** "*I freeze when I actually have to speak* — is this true for
  you?" makes the visitor **state** the problem instead of being told it.
- **The vocabulary check is a game, not a form.** Tapping the Spanish words you know yields a real
  level signal and, more importantly, makes the plan feel *earned* rather than generated.
- **The name is collected three screens before the reveal**, then used on it: "*Tony, your plan is
  ready!*".

**What is deliberately NOT copied is their proof.** Praktika leads with "30M+ people" and "4.7★";
Sofia has between 1 and 4 App Store ratings (iTunes lookup, 2026-09-15). Every pitch screen here
states a product fact a buyer can verify in the app instead — the same rule `src/config/tutorPitch.ts`
already sets for the landings. Keep it that way.

---

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
2. Create packages matching `FUNNELS.sofia.plans` (`monthly`, `annual`, `quarterly`) and attach them
   to the existing **`Sofia AI Pro`** entitlement.
3. Copy the hosted checkout URL into the repo secret **`PUBLIC_RC_WEB_BILLING_URL`**. Supabase values
   already default correctly, so this is the only secret required.
4. **Confirm all six prices.** They are placeholders. The web price need not match the App Store —
   that is half the point — but the page and the charge must agree, and under the **EU Omnibus
   directive each struck-through `listPrice` must be a price genuinely charged before**, for at least
   30 days. Do not invent one to manufacture a discount.

---

## 5. Verify before spending a cent

⚠️ **The checkout URL parameter names are unverified.** Written without access to RevenueCat's Web
Billing docs (the build container's egress proxy blocks `revenuecat.com`), so `app_user_id`,
`package` and `redirect_url` are conventional names, not names read from the spec. They live in one
place — `checkoutUrl()` in `src/config/funnel.ts`.

This fails **silently and expensively**: the purchase succeeds, the money arrives, the entitlement
lands on a customer the app never looks up. So:

1. Walk `/start/` on a phone and buy.
2. In RevenueCat → **Customers**, find the purchase. Its App User ID **must** be a Supabase UUID, not
   `$RCAnonymous…`.
3. Finish on `/start/success/`, install the app, sign in with that email, and confirm Pro is active
   **without restoring**.

Do not start a campaign before step 3 passes.

---

## 6. Decisions already made (and how to reverse them)

| Decision | Where | Why |
|---|---|---|
| **Direct pay with a discount, no trial** | `plans` | Founder decision 2026-09-16 after reading Praktika's paywall, which sells outright at −50 % with a countdown. Revenue lands immediately instead of three days later. The cost is fewer conversion events per euro for Meta's learning phase. |
| **10-minute countdown** | `countdownMinutes` | Founder decision, same day. It is manufactured urgency and it is the category norm; set to `0` to remove it without touching the page. It floors at 0:00 rather than expiring — killing the offer a visitor is reading would cost the sale the timer exists to win. |
| **Account after payment** | `success.astro` | Praktika's order, made safe by anonymous sign-in (§3). |
| **Sofia first, not Bliss** | `FUNNELS` | Sofia is live, measured, rising, and the only app Meta cannot reach otherwise. Adding Bliss = one entry in `FUNNELS`. |
| **`noindex` + out of the sitemap** | `index.astro`, `astro.config.mjs` | The funnel would rank as a thin duplicate of `/sofia/` and split its organic signal. |
| **Hosted checkout, not raw Stripe** | `RC_WEB_BILLING_URL` | Static site on GitHub Pages: no server, nowhere to hold a secret key. Raw Stripe would need an edge function *and* a hand-written entitlement sync RevenueCat already provides. |

---

## 7. What this does not do yet

- **No Meta/TikTok pixel or CAPI.** GA4 fires at every step (`funnel_started`, `funnel_step_view`,
  `funnel_answer`, `funnel_plan_view`, `funnel_plan_selected`, `funnel_checkout_started`,
  `funnel_checkout_redirect`, `funnel_checkout_failed`, `funnel_purchase`, `funnel_account_claimed`,
  `funnel_claim_no_session`) and `utm_*` / `fbclid` / `ttclid` / `gclid` are captured on arrival and
  carried into the checkout URL. The pixel that lets Meta *optimise* on purchase is the next piece.
- **The vocabulary check is not graded.** It is collected (`words_known` on `funnel_plan_view`) and
  shown back on the reveal, but it does not yet change the plan or pre-set the level in the app.
- **`/start/bliss/`** — one entry in `FUNNELS` when Bliss ships.
- **The recording stopped at the paywall**, so Praktika's own checkout, account creation and app
  hand-off were never seen. Those three screens here are our design, not theirs.
