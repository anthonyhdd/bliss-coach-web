# `/start/` — the paid-traffic funnel

Sell the subscription on the web, **before** the App Store. Quiz → plan → paywall → checkout →
download. This file is the setup and the reasoning; the code is `src/config/funnel.ts` and
`src/pages/start/index.astro`.

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

Sofia tripled between June and September, and 25 % of its trials convert to paid. Those are normal,
healthy numbers. What does not work is **buying traffic into them**:

- 100 installs → ~55 reach the paywall (in-app measurement, 2026-09-12) → ~4 trials → ~1 paid, and
  Apple keeps 30 % of that one.
- The ad network optimises on a blind install that lands in AppsFlyer's `restricted` bucket, because
  the user never resolved ATT.
- **Sofia cannot run Meta app-install campaigns at all.** A ghost iOS14+ campaign inside a banned
  Business Manager holds App Store ID `6761907539` (error #2446692) and the IDs are frozen there.

Selling on the web fixes all four at once: 100 % of visitors see the paywall because the paywall *is*
the funnel, ~97 % of the money is kept, the ad network optimises on a real purchase event, and a web
conversion campaign never touches the frozen App Store ID.

---

## 2. How a web purchase reaches the app

The app's RevenueCat **App User ID is the Supabase user id** —
`revenueCatService.configure(user.id)` in `src/hooks/useRevenueCat.ts` (APPSOFIA repo). So:

```
web: Supabase sign-in → user.id ─┐
                                 ├─→ same RevenueCat customer → same entitlement
app: Supabase sign-in → user.id ─┘
```

**No app change is required.** No custom entitlement sync, no restore flow. All variants share one
Supabase project (`wbxuxcvxyzmbyshupycs`).

The hard rule that follows: **the buyer signs in before paying.** A purchase made against an
anonymous web id is a purchase the app will never see. That is why the auth screen sits between the
paywall and checkout, and why it offers Apple + email/password and *not* a magic link — an inbox
round-trip on the last screen of a paid funnel is pure lost volume.

---

## 3. Setup (dashboard work, ~20 min)

1. **RevenueCat → project Sofia AI (`e85dcf03`) → Apps → New → Web Billing.** Connect Stripe when
   prompted. The project currently has only `app_store` + `test_store`.
2. Create the packages to match `FUNNELS.sofia.plans` in `src/config/funnel.ts` (`annual`,
   `weekly`), attach them to the existing **`Sofia AI Pro`** entitlement, and set the trial to 3 days
   (or change `trialDays` to `0` to sell outright — see §5).
3. Copy the hosted checkout URL into a repo secret named **`PUBLIC_RC_WEB_BILLING_URL`**
   (Settings → Secrets and variables → Actions). Supabase values already default correctly in
   `src/config/funnel.ts`, so this is the only secret required.
4. **Confirm the prices** in `FUNNELS.sofia.plans` equal what the hosted checkout actually charges.
   They are placeholders (`€49.99` / `€6.99`). Web prices do not have to match the App Store — that is
   half the point — but the page and the charge must agree.

Until `PUBLIC_RC_WEB_BILLING_URL` is set, the paywall renders in a visibly disabled state with a
warning rather than sending a buyer to a dead link (`isCheckoutConfigured()`).

---

## 4. Verify before spending a cent

⚠️ **The checkout URL parameter names are unverified.** They were written without access to
RevenueCat's Web Billing docs (the build container's egress proxy blocks `revenuecat.com`), so
`app_user_id` and `package` are conventional names, not names read from the spec. They live in one
place — `checkoutUrl()` in `src/config/funnel.ts`.

This fails **silently and expensively**: the purchase succeeds, the money arrives, and the entitlement
lands on a customer the app never looks up. So:

1. Walk `/start/` on a phone, sign up with a throwaway email, and buy.
2. In RevenueCat, open **Customers** and find the purchase. Its App User ID **must** be the Supabase
   `user.id`, not a RevenueCat-generated `$RCAnonymous…` id.
3. Install the app, sign in with that same email, and confirm Pro is active without restoring.

If step 2 shows an anonymous id, fix the parameter name and repeat. Do not start a campaign before
step 3 passes.

---

## 5. Decisions already made (and how to reverse them)

| Decision | Where | Why |
|---|---|---|
| **3-day trial, card required** | `trialDays` | Meta needs ~50 conversions/ad set/week to leave the learning phase. A card-required trial produces several times more conversion events per euro than direct pay, which at a 10-20 €/day budget decides whether the campaign can optimise at all. Set to `0` to sell outright. |
| **Sofia first, not Bliss** | `FUNNELS` | Sofia is live, measured, rising, and the only app Meta cannot reach any other way. Bliss had no shipped build and no conversion data when this was written. Adding Bliss = one entry in `FUNNELS`. |
| **`noindex` + out of the sitemap** | `index.astro`, `astro.config.mjs` | The funnel would rank as a thin duplicate of `/sofia/` and split the organic signal that page already earns. |
| **No magic link** | auth screen | See §2. |
| **Hosted checkout, not raw Stripe** | `RC_WEB_BILLING_URL` | This site is static on GitHub Pages: there is no server and nowhere to hold a secret key. Raw Stripe would need a Supabase edge function *and* a hand-written entitlement sync that RevenueCat already provides. |

---

## 6. What this does not do yet

- **No `/start/bliss/`.** One entry in `FUNNELS` when Bliss ships.
- **No Meta/TikTok pixel or CAPI.** GA4 events fire at every step
  (`funnel_started`, `funnel_step_view`, `funnel_answer`, `funnel_plan_view`, `funnel_plan_selected`,
  `funnel_checkout_started`, `funnel_signed_in`, `funnel_checkout_redirect`) and `utm_*` / `fbclid` /
  `ttclid` / `gclid` are captured on arrival and carried into the checkout URL. The pixel that lets
  Meta *optimise* on purchase is the next piece.
- **No post-purchase page.** After checkout the buyer should land on a "download the app and sign in
  with the same account" screen. Today they land on RevenueCat's own confirmation.
- **Copy is a first draft.** It was not calibrated against Praktika's live funnel
  (`start.praktika.ai`, Stripe — confirmed via their help centre, but unreachable from the build
  container). Walking their funnel and screenshotting it would improve this materially.
