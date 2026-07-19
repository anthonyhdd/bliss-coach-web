# Bliss Coach — SEO & Content Operating System

North star: **organic installs**. Every page exists to move a searcher along
`article → app chip / related / CTA → landing page → App Store`.
Truth source for results: Google Search Console (property `https://bliss-coach.com/`).

## Cadence (the compounding loop)

- **Weekly batch: 8–12 new articles**, written by parallel Claude agents (4 articles/agent — proven ratio).
- App priority: **Alex > Mila > Sofia > Charm > Astra** (Amélie maintained, deprioritized).
  Alex = best willingness-to-pay; Mila = biggest search volume pool (nutrition).
- Every batch: build → PR → merge → deploy → spot-check 2 URLs live.
- Article dates: real publish date. Never backdate.

## Keyword pipeline

1. Seed from Google autocomplete + People Also Ask on the app's head terms (free, reflects real queries).
2. Pick **question/how-to intent** queries where a definitive answer fits in ~1,500 words.
3. One primary query per article. Title ≤70 chars, keyword-first. Description ≤165 chars states the payoff.
4. Answer the query in the first two sentences — featured-snippet position.
5. Avoid overlap: list existing slugs in `src/content/blog/<app>/` before assigning topics.

## On-page (templated — don't hand-tune per article)

Already automatic via the templates: Article + Breadcrumb JSON-LD, canonical, OG/Twitter,
Apple Smart Banner, brand strip + app chip + related-articles block + gradient CTA box,
sitemap, `llms.txt` (AI-crawler content map, auto-regenerated from the collection).

## Measurement loop (weekly, ~15 min)

1. GSC → Pages: indexed count vs total (54+). Investigate "Crawled, not indexed" > 30 days.
2. GSC → Performance: queries ranking **positions 5–20** = the money list.
   For each: expand/refresh that article (add sections matching the query), request re-indexing.
3. Track: indexed pages, clicks/week, LP sessions from articles, App Store taps (add UTM later).
4. Never delete or merge content before 90 days of data.

## Phase 2 — the real 10x (in order)

1. **Programmatic SEO for Alex**: `/{company}-interview-questions/` template × top-50 companies
   (dataset-driven Astro pages; distinct intros, real question banks — no thin duplicates).
2. **Localized content**: Sofia articles in ES-adjacent EN is fine, but Amélie/Sofia FR+ES
   article variants unlock non-EN SERPs where competition is far weaker.
3. **Backlinks / digital PR**: domain rating is the ceiling on everything above.
   Cheapest first moves: App Store → site links, directory/tool listicles pitches,
   HARO-style expert quotes for the coaches' domains.
4. **Lead magnets** per app (interview question PDF, meal-prep template) to earn links + emails.

## Ops notes

- Repo: `anthonyhdd/bliss-coach-web`. Articles: `src/content/blog/<app>/<slug>.md`.
- Frontmatter schema (`src/content.config.ts`): title ≤70, description ≤165,
  `app` ∈ {sofia, alex, charm, amelie, mila, astra}, publishDate, keywords[], draft.
- GH Pages deploys can hang in queue: ONE run at a time, retry with
  `gh workflow run deploy.yml`, never dispatch while a push-run is deploying.
- GSC manual indexing quota ≈ **7 URLs/day** (measured 2026-07-19: the 8th request
  returned "Quota dépassé"). Spend it on new LPs and updated money pages.
