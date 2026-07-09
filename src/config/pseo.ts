/** Programmatic SEO sections — one dataset-driven vertical per app. */
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
