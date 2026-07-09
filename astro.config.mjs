import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH is set to "/bliss-coach-web" in CI while the site lives on
// anthonyhdd.github.io/bliss-coach-web. Remove the env var at DNS cutover
// so everything is rooted at https://bliss-coach.com/.
export default defineConfig({
  site: 'https://bliss-coach.com',
  base: process.env.BASE_PATH || '/',
  integrations: [
    sitemap({
      // Freshness hints for crawlers post Framer->Astro migration.
      // lastmod is stamped at build time so every deploy signals recency.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
