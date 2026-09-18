# `/alt/` — the home if bliss-coach.com becomes Bliss's site

`src/pages/alt/index.astro`. Not linked from anywhere, `noindex`, left out of the sitemap. It is there
to be compared with `/` on a phone before anything is decided. The live studio home is untouched.

## What changes versus `/`

| | `/` today (studio) | `/alt/` (Bliss only) |
|---|---|---|
| Above the fold | "Your coach, for every corner of life", with 6 apps | "Pick a language. Pick who teaches you." for one app |
| Dock under the horizon | 6 App Store apps, each leaving the page | the 8 teachers, scrolling down to the picker |
| Core section | 6 chapters, one per app | **the picker**: 10 languages, and the 8 faces re-order under each one (native first) |
| Primary CTA | "Meet your coaches" (anchor) | `/start/` (web checkout, ~97 % kept), with the App Store as the second door |
| The single-teacher apps | the whole page | a "Rather have just one?" band above the footer |

Teachers and languages come from `src/config/bliss/tutors.ts`, the same mirror `/start/` reads, so
the page cannot offer a teacher the funnel doesn't have.

## Keep the app landing pages? Yes. Accessible, demoted, never redirected.

1. **The App Store points at them.** `marketingUrl` and `privacyPolicyUrl` on every live app,
   in every locale, are `bliss-coach.com/<app>/` and `/<app>/privacy/` (`store.config.<variant>.json`
   in APPSOFIA). A redirect or a 404 there breaks a link on 7 live product pages, and the privacy one
   is an App Review requirement.
2. **All the organic traffic lives under them.** The 543 built pages are almost all `/<app>/blog/…`
   and `/<app>/<section>/…`. The few clicks the site gets land on those pages (Charm's `what-to-text`),
   not on the home. Demoting the LPs in the home's navigation costs next to nothing. Deleting them
   would cost everything.
3. **They are the paid entry points per app.** `/start/?t=sofia` / `?t=emily` sell a single-teacher
   funnel. An ad for Sofia should land on Sofia, not on a picker of 8 faces.
4. **SEO_PLAYBOOK rule:** never delete or merge content before 90 days.

What does change: the LPs leave the hero. They remain one click from every page (the band plus the
footer), which keeps the internal links the blog and pSEO pages depend on.

**When to remove one:** only if the app is pulled from sale AND its store listing no longer links to
it AND 90 days have passed. Then 301 it to the matching Bliss language page, never to `/`.

## The day it becomes the real home (checklist)

- [ ] Move `src/pages/index.astro` (studio) to `/apps/`. **Not `/studio/`**: that is the founder's
      private video gallery.
- [ ] `alt/index.astro` → `index.astro`: drop `noindex`, add the canonical, switch the JSON-LD from
      `Organization` to `MobileApplication` (Bliss) + `Organization`, new `og.png`.
- [ ] Remove `/alt/` from the sitemap filter once it no longer exists.
- [ ] "Download on the App Store" → Bliss's own App Store URL (currently the developer page, because
      Bliss isn't live yet).
- [ ] Reviews: replace the two borrowed Sofia lines with Bliss reviews once there are any. Never
      write invented ones.
- [ ] Add `/learn-<language>/` pages (10). That is where Bliss can earn organic traffic ("learn
      japanese with a tutor"…), which no single-teacher LP can do for it.
- [ ] `llms.txt`: Bliss first, the single-teacher apps after it.
