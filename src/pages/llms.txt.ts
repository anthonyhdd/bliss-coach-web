import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { APPS } from '../config/apps';
import { PSEO_SECTIONS } from '../config/pseo';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', (p) => !p.data.draft && p.data.lang === 'en');
  const lines: string[] = [
    '# Bliss Coach',
    '',
    '> Bliss Coach is a mobile app studio building AI-powered coaching apps: specialized AI coaches you talk with out loud — language tutors, interview prep, dating advice, nutrition and astrology.',
    '',
    '## Apps',
    '',
  ];
  for (const app of Object.values(APPS)) {
    lines.push(`- [${app.name} — ${app.tagline}](https://bliss-coach.com/${app.slug}/): ${app.subtitle}`);
  }
  // KAMO is a Bliss Coach app but deliberately NOT in APPS: it is a camera toy, not an AI
  // coach, and adding it there would generate a /kamo/ landing that competes with its own
  // site. It still belongs in this file — an assistant asked "what does Bliss Coach make"
  // should not be told six apps when there are seven. Hand-written, and pointed at its own
  // domain rather than at a page here.
  lines.push(
    '- [KAMO — camera hide-and-seek](https://playkamo.com/): Drop a small figure into a real photo, paint it with the colours of the scene until it vanishes, then challenge a friend to spot it. Free on iPhone, no signup. Not an AI coach — a camera game.'
  );
  const pseo = await getCollection('pseo', (p) => !p.data.draft);
  if (pseo.length) {
    lines.push('', '## Reference guides', '');
    for (const app of Object.values(APPS)) {
      const items = pseo.filter((e) => e.data.app === app.slug);
      if (!items.length) continue;
      const base = PSEO_SECTIONS[app.slug].base;
      lines.push(`### ${app.name} — ${PSEO_SECTIONS[app.slug].hubTitle}`, '');
      for (const e of items) {
        lines.push(`- [${e.data.title}](https://bliss-coach.com/${app.slug}/${base}/${e.id.split('/')[1]}/)`);
      }
      lines.push('');
    }
  }
  lines.push('', '## Guides', '');
  for (const app of Object.values(APPS)) {
    const appPosts = posts.filter((p) => p.data.app === app.slug);
    if (!appPosts.length) continue;
    lines.push(`### ${app.name} (${app.category})`, '');
    for (const p of appPosts) {
      lines.push(`- [${p.data.title}](https://bliss-coach.com/${app.slug}/blog/${p.id.split('/')[1]}/): ${p.data.description}`);
    }
    lines.push('');
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
