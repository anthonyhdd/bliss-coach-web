/** Programmatic SEO sections — one dataset-driven vertical per app.
 *
 * BEFORE ADDING ITEMS TO A VERTICAL, read rule 0 of SEO_PLAYBOOK.md ("winnability first").
 *
 * The `how-to-say` verticals (sofia 40 pages, amelie 20) are the cautionary case: their slugs are
 * `thank-you`, `how-are-you`, `good-morning`, `cheers` — the most contested phrases in language
 * learning, and ones Google answers itself with a translate widget. Measured 2026-07-22 they
 * carried most of the site's 1,860 impressions at average position 65, for 1 click total. The
 * template is fine; the phrase list was the mistake.
 *
 * `alex/interviews` is the shape that works: one item per COMPANY, i.e. a query with a situation
 * attached and no SERP widget competing for the answer. New items in ANY vertical should carry a
 * situation, a region, or a register — not a bare dictionary lookup.
 *
 * Existing pages stay: the playbook's "never delete or merge content before 90 days" applies.
 */
export interface PseoSection {
  /** URL segment under /{app}/ */
  base: string;
  hubTitle: string;
  hubIntro: string;
  /** label used on cards/links, e.g. "guide" */
  itemLabel: string;
}

export const PSEO_SECTIONS: Record<string, PseoSection> = {
  alex: {
    base: 'interviews',
    hubTitle: 'Interview questions by company',
    hubIntro:
      'Company-specific interview guides: the process, the questions they actually ask, and how to prepare for each one.',
    itemLabel: 'interview guide',
  },
  sofia: {
    base: 'how-to-say',
    hubTitle: 'How to say it in Spanish',
    hubIntro:
      'Phrase-by-phrase guides: the natural translation, variations, pronunciation, and real example conversations.',
    itemLabel: 'phrase guide',
  },
  charm: {
    base: 'what-to-text',
    hubTitle: 'What to text, situation by situation',
    hubIntro:
      'Exact texting playbooks for the moments everyone gets stuck on — what works, what kills it, and copy-ready examples.',
    itemLabel: 'texting playbook',
  },
  mila: {
    base: 'foods',
    hubTitle: 'Food guides',
    hubIntro:
      'Straight answers about everyday foods: what they bring nutritionally, sensible portions, and easy ways to eat them.',
    itemLabel: 'food guide',
  },
  amelie: {
    base: 'how-to-say',
    hubTitle: 'How to say it in French',
    hubIntro:
      'Phrase-by-phrase guides: the natural translation, variations, pronunciation, and real example conversations.',
    itemLabel: 'phrase guide',
  },
  astra: {
    base: 'signs',
    hubTitle: 'Zodiac signs explained',
    hubIntro:
      'Every sign in depth: personality, strengths, love, career, and how each sign plays with the rest of the zodiac.',
    itemLabel: 'sign guide',
  },
};
