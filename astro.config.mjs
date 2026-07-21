import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// BASE_PATH is set to "/bliss-coach-web" in CI while the site lives on
// anthonyhdd.github.io/bliss-coach-web. Remove the env var at DNS cutover
// so everything is rooted at https://bliss-coach.com/.
const SITE = 'https://bliss-coach.com';
const BASE = process.env.BASE_PATH || '/';
const withBase = (p) => (BASE === '/' ? p : `${BASE.replace(/\/$/, '')}${p}`);

// pSEO URL segment per app — mirror of PSEO_SECTIONS[app].base in
// src/config/pseo.ts. Kept in sync so sitemap URLs match the built routes.
const PSEO_BASE = {
  alex: 'interviews',
  sofia: 'how-to-say',
  charm: 'what-to-text',
  mila: 'foods',
  amelie: 'how-to-say',
  astra: 'signs',
};

// Minimal frontmatter reader (dates + routing fields only) so the sitemap can
// stamp each content page's real freshness instead of the build timestamp.
function parseFrontmatter(raw) {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!block) return {};
  const get = (key) => {
    const m = new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(block[1]);
    return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : undefined;
  };
  return {
    app: get('app'),
    lang: get('lang') || 'en',
    draft: get('draft') === 'true',
    publishDate: get('publishDate'),
    updatedDate: get('updatedDate'),
  };
}

function walkMarkdown(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMarkdown(full));
    else if (e.name.endsWith('.md')) out.push(full);
  }
  return out;
}

// Build a map of page URL -> real last-modified date from content frontmatter.
// Falls back to publishDate when no updatedDate is set. Pages with no entry
// here (landings, hubs, legal) get NO lastmod, which is more honest than
// stamping every page with the build date on every deploy.
function buildLastmodMap() {
  const map = new Map();
  const add = (urlPath, dateStr) => {
    if (!dateStr) return;
    const d = new Date(dateStr);
    if (Number.isNaN(d.valueOf())) return;
    map.set(new URL(withBase(urlPath), SITE).href, d.toISOString());
  };

  for (const file of walkMarkdown('src/content/blog')) {
    const fm = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    if (fm.draft || !fm.app) continue;
    const rel = path.relative('src/content/blog', file).replace(/\.md$/, '');
    const parts = rel.split(path.sep); // <app>/<slug> (en) or <app>/<lang>/<slug>
    const slug = parts[parts.length - 1];
    const date = fm.updatedDate || fm.publishDate;
    if (fm.lang === 'en') add(`/${fm.app}/blog/${slug}/`, date);
    else add(`/${fm.lang}/${fm.app}/blog/${slug}/`, date);
  }

  for (const file of walkMarkdown('src/content/pseo')) {
    const fm = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    if (fm.draft || !fm.app) continue;
    const base = PSEO_BASE[fm.app];
    if (!base) continue;
    const slug = path.basename(file, '.md');
    add(`/${fm.app}/${base}/${slug}/`, fm.updatedDate || fm.publishDate);
  }

  return map;
}

const lastmodByUrl = buildLastmodMap();

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Per-page freshness from frontmatter (updatedDate ?? publishDate).
      // Non-content pages get no lastmod rather than the build date.
      serialize(item) {
        const lastmod = lastmodByUrl.get(item.url);
        if (lastmod) item.lastmod = lastmod;
        else delete item.lastmod;
        return item;
      },
      // Keep the private video gallery out of the sitemap. Its path comes from
      // the VIDEOS_SLUG build secret and is deliberately unguessable — listing
      // it here would hand it to every crawler. Deliberately NOT added to
      // robots.txt either: that file is public, so a Disallow rule would
      // publish the very path it is meant to hide.
      filter: (page) =>
        !process.env.VIDEOS_SLUG || !page.includes(`/${process.env.VIDEOS_SLUG}/`),
    }),
  ],
});
