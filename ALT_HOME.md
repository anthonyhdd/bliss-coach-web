# `/alt/` — the live home, adapted to Bliss only

`src/pages/alt/index.astro` is a copy of `src/pages/index.astro`: same design, same sections, same
scripts. Only the content changes, so the two can be compared on a phone. `noindex`, out of the
sitemap, unlinked.

What changes: the hero sells a language teacher instead of the studio. The dock and carousel show
the Bliss teachers, whose cards open `/start/` instead of the single-teacher apps. The manifesto,
the pillars and the final call are rewritten for languages ("Craft" becomes "Choice"). Only the
real language reviews remain. The store buttons use `BLISS_STORE`, which is the developer page until
Bliss is on sale.

## Keep the app landing pages? Yes. Demoted to the footer, never redirected.

1. The App Store points at them: `marketingUrl` and `privacyPolicyUrl` on every live app, in every
   locale, are `bliss-coach.com/<app>/` and `/<app>/privacy/` (`store.config.<variant>.json`).
2. The organic traffic lives under them (`/<app>/blog/…`, `/<app>/<section>/…`), not on the home.
3. They are the per-app paid entry points (`/start/?t=sofia`).

They leave the hero and the carousel, and stay linked from every page through the footer column
"Also by Bliss Coach". Remove one only if the app is off sale, its store listing no longer links
to it, and 90 days have passed. Then 301 it to the matching Bliss page, never to `/`.

## The day it becomes the home

- Studio home → `/apps/` (not `/studio/`, which is the founder's private gallery).
- `alt/index.astro` → `index.astro`: restore the canonical, drop `noindex`, new `og.png`.
- `BLISS_STORE` → Bliss's App Store URL.
- Reviews → Bliss's own, once there are any.
