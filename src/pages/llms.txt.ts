import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { APPS } from '../config/apps';
import { PSEO_SECTIONS } from '../config/pseo';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', (p) => !p.data.draft);
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
