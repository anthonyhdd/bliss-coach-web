export interface AppDef {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  subtitle: string;
  appStoreId: string;
  appStoreUrl: string;
  gradient: [string, string, string];
  accent: string;
  /** text color that stays readable on the gradient */
  onGradient: string;
  features: { title: string; body: string }[];
  blogTitle: string;
  blogDescription: string;
  /** app not yet released on the App Store — render a coming-soon pill instead of a store link */
  comingSoon?: boolean;
}

export const APPS: Record<string, AppDef> = {
  sofia: {
    slug: 'sofia',
    name: 'Sofia',
    category: 'Learn Spanish',
    tagline: 'Learn Spanish by actually speaking it',
    subtitle:
      'Sofia is your AI Spanish teacher from Mexico. Real conversations, instant corrections, zero judgment — practice speaking Spanish out loud from day one.',
    appStoreId: '6761907539',
    appStoreUrl: 'https://apps.apple.com/app/id6761907539',
    gradient: ['#FF2D2D', '#FF8C42', '#FF4D9E'],
    accent: '#FF6B35',
    onGradient: '#ffffff',
    features: [
      {
        title: 'Speak from day one',
        body: 'Have real voice conversations with Sofia — she listens, replies, and gently corrects you like a real teacher.',
      },
      {
        title: 'Mexican Spanish, real life',
        body: 'Learn the Spanish people actually speak: everyday phrases, slang, and culture — not textbook drills.',
      },
      {
        title: 'Adapts to your level',
        body: 'Total beginner or rusty intermediate, Sofia meets you where you are and pushes you just enough.',
      },
    ],
    blogTitle: 'Learn Spanish — Guides & Tips',
    blogDescription:
      'Practical guides to learning Spanish faster: phrases, grammar made simple, pronunciation, and study strategies from the Sofia team.',
  },
  amelie: {
    slug: 'amelie',
    name: 'Amélie',
    category: 'Learn French',
    tagline: 'Learn French with a Parisian, not a textbook',
    subtitle:
      'Amélie is your witty AI French teacher from Paris. Speak real, casual French in live conversations and get corrected as you go.',
    appStoreId: '6761261214',
    appStoreUrl: 'https://apps.apple.com/app/id6761261214',
    gradient: ['#6D28D9', '#DB2777', '#2563EB'],
    accent: '#7C3AED',
    onGradient: '#ffffff',
    features: [
      {
        title: 'Real Parisian French',
        body: 'Casual, current French — the way people actually talk in Paris, with the charm included.',
      },
      {
        title: 'Conversation-first',
        body: 'Speak out loud from your first session. Amélie keeps the conversation going at your pace.',
      },
      {
        title: 'Corrections that stick',
        body: 'Instant, friendly corrections in context — so mistakes become memory hooks instead of embarrassments.',
      },
    ],
    blogTitle: 'Learn French — Guides & Tips',
    blogDescription:
      'Guides to learning French that actually work: everyday phrases, pronunciation, grammar shortcuts, and study plans from the Amélie team.',
  },
  charm: {
    slug: 'charm',
    name: 'Charm',
    category: 'Dating Coach',
    tagline: 'Your AI dating coach for texts, dates & confidence',
    subtitle:
      'Charm helps you figure out what to say — from the first opener to the awkward "what now" moments. Screenshot a conversation and get sharp, honest coaching.',
    appStoreId: '6761726979',
    appStoreUrl: 'https://apps.apple.com/app/id6761726979',
    gradient: ['#0A0A0A', '#2D2D2D', '#6B5A1E'],
    accent: '#C9A14A',
    onGradient: '#ffffff',
    features: [
      {
        title: 'Screenshot coaching',
        body: 'Upload a conversation screenshot and Charm reads the subtext, then tells you exactly what to send.',
      },
      {
        title: 'Openers that get replies',
        body: 'Stop sending "hey". Charm crafts openers matched to their profile and your vibe.',
      },
      {
        title: 'Honest, not generic',
        body: 'A coach that tells you the truth — what worked, what killed the vibe, and how to recover.',
      },
    ],
    blogTitle: 'Dating & Texting — Guides',
    blogDescription:
      'What to text, when to text, and how to build real chemistry — practical dating advice from the Charm team.',
  },
  alex: {
    slug: 'alex',
    name: 'Alex',
    category: 'Interview Prep',
    tagline: 'Ace your next job interview',
    subtitle:
      'Alex is your AI interview coach. Run realistic mock interviews, sharpen your STAR stories, and walk in prepared for the exact company and role.',
    appStoreId: '6761726840',
    appStoreUrl: 'https://apps.apple.com/app/id6761726840',
    gradient: ['#93C5FD', '#F9A8D4', '#C4B5FD'],
    accent: '#C084FC',
    onGradient: '#1e1b2e',
    features: [
      {
        title: 'Realistic mock interviews',
        body: 'Alex plays the recruiter — behavioral, technical screen, or final round — and grades your answers.',
      },
      {
        title: 'STAR stories that land',
        body: 'Turn your experience into tight, memorable STAR answers for any behavioral question.',
      },
      {
        title: 'Prep for the exact job',
        body: 'Paste the job posting or your CV and Alex tailors every question to that company and role.',
      },
    ],
    blogTitle: 'Interview Prep — Guides',
    blogDescription:
      'Interview questions with model answers, the STAR method, salary talk, and company-specific prep — from the Alex team.',
  },
  mila: {
    slug: 'mila',
    name: 'Mila',
    category: 'Nutrition Coach',
    tagline: 'Eat better without the guilt trips',
    subtitle:
      'Mila is your AI dietician. Talk through your meals, cravings and goals in real conversations — and get practical, judgment-free guidance that fits your real life.',
    appStoreId: '6779667418',
    appStoreUrl: 'https://apps.apple.com/app/id6779667418',
    gradient: ['#16A34A', '#84CC16', '#14B8A6'],
    accent: '#22C55E',
    onGradient: '#ffffff',
    features: [
      {
        title: 'Say it out loud',
        body: 'Voice conversations with a dietician who listens first — no forms, no calorie shame, just real answers.',
      },
      {
        title: 'Advice for your real life',
        body: 'Restaurant menus, late-night cravings, busy weeks — Mila works with how you actually eat.',
      },
      {
        title: 'Snap a meal',
        body: 'Photo in, answers out — calories, macros and what to pair it with, in seconds. No logging, no counting.',
      },
    ],
    blogTitle: 'Nutrition — Guides & Tips',
    blogDescription:
      'Practical, health-positive guides to eating better: everyday nutrition, habits, and mindset from the Mila team.',
  },
  astra: {
    slug: 'astra',
    name: 'Astra',
    category: 'Astrology',
    tagline: 'Your personal AI astrologer',
    subtitle:
      'Astra reads your natal chart and talks you through it — live voice conversations about your sign, your day, and what the stars actually say about you.',
    appStoreId: '6779667872',
    appStoreUrl: 'https://apps.apple.com/app/id6779667872',
    gradient: ['#0B0B12', '#312E81', '#C9A14A'],
    accent: '#C9A14A',
    onGradient: '#ffffff',
    comingSoon: true,
    features: [
      {
        title: 'Your chart, decoded',
        body: 'A full natal chart reading in plain language — sun, moon, rising and what they mean together.',
      },
      {
        title: 'Daily horoscopes that feel personal',
        body: 'Not recycled one-liners: daily guidance computed from your own chart and the sky right now.',
      },
      {
        title: 'Ask the stars anything',
        body: 'Love, work, timing — talk it through with Astra in a real conversation, voice or text.',
      },
    ],
    blogTitle: 'Astrology — Guides',
    blogDescription:
      'Natal charts, signs, houses and transits explained simply — astrology guides from the Astra team.',
  },
};

export const APP_SLUGS = Object.keys(APPS);

/** Endonyms for the locales we publish translated articles in. Used by the
 *  language links that connect EN articles to their translated twins — those
 *  pages are otherwise reachable only via sitemap + hreflang, which pass no
 *  meaningful internal link weight. */
export const LANG_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

/** Prefix a root-relative path with the configured base (GH Pages preview vs prod). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** Named reviewers with a consistent portrait — used on the home marquee and coach quotes.
 *  Feature-label "quotes" (e.g. "Snap a meal") have no entry and keep the initial avatar. */
const REVIEW_AVATARS: Record<string, string> = {
  jane: '/avatars/jane.jpg',
  marcus: '/avatars/marcus.jpg',
  emily: '/avatars/emily.jpg',
  tom: '/avatars/tom.jpg',
  jake: '/avatars/jake.jpg',
  rayan: '/avatars/rayan.jpg',
};

/** Portrait path for a reviewer name, or null for non-person labels. */
export function avatarFor(name: string): string | null {
  return REVIEW_AVATARS[name.trim().toLowerCase()] ?? null;
}
