/**
 * The Bliss onboarding, on the web — the same flow the app runs, minus the microphone.
 *
 * ⚠️ MIRRORED, NOT SHARED. Ported from the APPSOFIA repo on 2026-09-17:
 *   `src/config/blissGuidedOnboarding.ts` — the steps, the titles, the intro demo, the CEFR map
 *   `src/context/LanguageContext.tsx`     — the English copy of every `bliss.onb.*` key
 *   `src/config/onboardingAnswerOptions.ts` — the goal values (kept EXACTLY: they are what the app
 *                                             writes into `onboardingAnswers['8']`)
 *   `src/config/heardAboutUs.ts`          — the attribution tiles
 *
 * THE FLOW
 *   intro (the principle, SHOWN) → language → tutor → vocabulary (up to two grids, adaptive)
 *   → goal + optional deadline → name → where did you hear about us → plan ready → paywall
 *
 * WHAT CHANGED FOR THE WEB, AND WHY
 *   - The app ends on the microphone step and the first call. Here the terminal step is the
 *     paywall: the call happens in the app, after the download. Everything before it is identical.
 *   - « How's your {language}, really? » is not asked, exactly as in the app (`ASKS_LEVEL = false`,
 *     founder 2026-09-17). The grids MEASURE the level instead, starting on the easiest one.
 *   - The answers are kept and written to `web_funnel_profiles` under the same keys the app's
 *     `guidedPrefilledAnswers` produces, so a web buyer lands in the app already knowing their
 *     level, their goal, their tutor and their name — the funnel is the onboarding, not a copy of it.
 *
 * WHY THE VALUES ARE NOT RE-INVENTED
 * The app's chat prompt, plan screen and analytics read the goal from `answers['8']` with the
 * historical English values, and the level from `answers['2']` / `spanish_level`. The web shows new
 * wording but hands over exactly those keys — same rule as the app's own guided screens.
 */

import { CEFR_LEVELS, type CefrLevel } from './vocabularyProbe';

export { CEFR_LEVELS };
export type { CefrLevel };

// ─── Steps ──────────────────────────────────────────────────────────────────────

/**
 * `GUIDED_STEPS` minus `level` (never asked) and `call` (the app's microphone step), plus the two
 * screens the web needs to take money: the plan reveal is `ready`, the paywall is its own step.
 */
export const STEPS = [
  'intro',
  'language',
  'tutor',
  'vocabulary',
  'goal',
  'name',
  'heardAboutUs',
  'ready',
  'plan',
] as const;
export type Step = (typeof STEPS)[number];

/**
 * `onboarding_step_viewed.step_name` in the app. Kept IDENTICAL so the web funnel and the in-app
 * onboarding can be read as one funnel, per step name — never per step number.
 */
export const STEP_ANALYTICS_NAME: Readonly<Record<Step, string>> = {
  intro: 'bliss_intro',
  language: 'bliss_language',
  tutor: 'bliss_tutor',
  vocabulary: 'bliss_vocabulary',
  goal: 'main_goal',
  name: 'name',
  heardAboutUs: 'heard_about_us',
  ready: 'bliss_ready',
  plan: 'bliss_paywall',
};

// ─── Copy (English — `bliss.onb.*`) ────────────────────────────────────────────

/** Words between *asterisks* are the accent: Instrument Serif italic, like the site's `<em>`. */
export const COPY = {
  introTitle: "Speak a language *for\u00A0real*",
  introPromise: 'A tutor who listens, answers and corrects you. Out loud, from the very first minute.',
  demoLive: 'On a call',
  demoYourTurn: 'Your turn · repeat',
  languageTitle: 'Which language do you want to *speak*?',
  tutorTitle: 'Pick *your\u00A0tutor*',
  tutorSubtitle: 'Swipe to meet them. You can switch anytime.',
  vocabularyTitle: 'Tap the words you *understand*',
  vocabularyMore: 'And *these*?',
  vocabularyNone: 'None of these',
  goalTitle: "What's it *for*?",
  goalDeadline: 'A date in mind?',
  optional: 'Optional',
  nameTitle: 'What should {name} *call\u00A0you*?',
  namePlaceholder: 'Your first name',
  readyTitle: '{first}, your plan is *ready*',
  readyTitleAnon: 'Your plan is *ready*',
  readySubtitle: '{name} is waiting for your first call.',
  continue: 'Continue',
  skipHint: 'Tap to skip',
} as const;

/** `bliss.guided.vocabulary.tier_*` — the band a grid samples, shown under its title. */
export const TIER_LABEL: Readonly<Record<string, string>> = {
  basic: '{language} · level A1',
  mid: '{language} · level B1',
  high: '{language} · level C1',
};

/** `bliss.guided.result.*` — the plan reveal. */
export const RESULT_COPY = {
  level: 'estimated level',
  words: 'words recognised',
  daysLeft: 'days until the big day',
  beatsGuess: 'You were underselling yourself',
  rowDefault: 'You want to speak, not revise',
  rowTutor: '{name} gets you talking in the first minute',
  rowDeadline: '15 min a day until the big day',
  rowRhythm: '15 min a day, at your pace',
} as const;

// ─── Titles: accent + reading time ──────────────────────────────────────────────

export type TitleSegment = { text: string; accent: boolean };

/**
 * Splits « Parle une langue *pour de vrai* » into plain and accent runs. An unbalanced asterisk
 * leaves the whole line plain rather than swallowing its end (a translator's typo must not hide
 * words); empty runs are dropped.
 */
export function splitAccentTitle(raw: string): TitleSegment[] {
  if (!raw) return [];
  const parts = raw.split('*');
  if (parts.length % 2 === 0) return [{ text: raw, accent: false }];
  return parts.map((text, i) => ({ text, accent: i % 2 === 1 })).filter((segment) => segment.text.length > 0);
}

/** The title without its markers — accessibility label, length for the reading time. */
export function plainTitle(raw: string): string {
  return splitAccentTitle(raw)
    .map((s) => s.text)
    .join('');
}

/** Delay between two words of a title as it appears. */
export const TITLE_WORD_STAGGER_MS = 60;
/** Fade of one word. */
export const TITLE_WORD_FADE_MS = 420;
/** Typed caption (the intro's demo bubble): at least 45 ms per character (founder: « trop vite »). */
export const CAPTION_CHAR_MS = 45;
/** Pause after a sentence before anything else moves. */
export const SENTENCE_PAUSE_MS = 700;

/**
 * When the answers (and the CTA) may appear: shortly after the title starts landing, never later than
 * `TITLE_SETTLE_MAX_MS`. A tap skips all of it.
 */
export function titleSettleMs(text: string): number {
  const plain = plainTitle(text).trim();
  if (!plain) return 0;
  // Fondateur 17-09 : « les réponses mettent trop de temps à apparaître ». Les réponses arrivent
  // pendant que le titre finit de se poser, plus de temps de lecture imposé : ≤ 1 s dans tous les cas.
  const words = plain.split(/\s+/).length;
  return Math.min(TITLE_SETTLE_MAX_MS, (words - 1) * TITLE_WORD_STAGGER_MS + TITLE_SETTLE_LEAD_MS);
}

/** Délai minimal avant les réponses, et plafond (ms). */
export const TITLE_SETTLE_LEAD_MS = 300;
export const TITLE_SETTLE_MAX_MS = 1000;

/** How long a typed caption takes, the pause after it included. */
export function captionTypingMs(text: string): number {
  return Array.from(text).length * CAPTION_CHAR_MS + SENTENCE_PAUSE_MS;
}

// ─── Title lines: the accent never breaks, and starts its own line ─────────────

/** Non-breaking space: the words of an accent stay together. */
export const NBSP = ' ';

/** One unbreakable word of a title — a plain word, or the whole accent with its punctuation. */
export type TitleWordGroup = {
  runs: TitleSegment[];
  /** Forced line break before this word (the accent, when a real word comes before it). */
  breakBefore: boolean;
};

/** Words needed before a multi-word accent for it to start its own line (« Speak a language » / « *for real* »). */
export const ACCENT_BREAK_MIN_WORDS = 3;

const PUNCTUATION_ONLY = /^[\s¿¡?!.,:;…«»"“”'’()\-–—]+$/;
const BREAKING_SPACE = /[ \t\r\n]+/;

/**
 * The words of a title as the renderer lays them out (founder, 2026-09-17: « for » at the end of the
 * first line, « real » alone on the second). Rules, in every interface language:
 *   - the accent is ONE word: its inner spaces become non-breaking, it is never cut;
 *   - punctuation touching the accent (« ¿ », « ? », the French « ? » after a space) travels with it;
 *   - a multi-word accent starts its own line only when at least THREE words come before it
 *     (« Speak a language » / « *for real* »); with fewer it stays on the same line (« Pick *your tutor* »,
 *     founder 17-09: « Pick » alone on a line looked broken). A single accented word always stays inline.
 * Only regular whitespace splits words: a non-breaking space in the copy is kept.
 */
export function titleWordGroups(raw: string): TitleWordGroup[] {
  type Piece = { text: string; accent: boolean; spaceBefore: boolean };
  const pieces: Piece[] = [];
  let pendingSpace = false;
  for (const segment of splitAccentTitle(raw)) {
    if (segment.accent) {
      const text = segment.text.trim().replace(/[ \t\r\n ]+/g, NBSP);
      if (text)
        pieces.push({
          text,
          accent: true,
          spaceBefore: pendingSpace || /^[ \t\r\n]/.test(segment.text),
        });
      pendingSpace = /[ \t\r\n]$/.test(segment.text);
      continue;
    }
    for (const part of segment.text.split(new RegExp(`(${BREAKING_SPACE.source})`))) {
      if (!part) continue;
      if (new RegExp(`^${BREAKING_SPACE.source}$`).test(part)) {
        pendingSpace = true;
        continue;
      }
      pieces.push({ text: part, accent: false, spaceBefore: pendingSpace });
      pendingSpace = false;
    }
  }

  const hasAccent = (w: TitleWordGroup) => w.runs.some((r) => r.accent);
  const isPunct = (w: TitleWordGroup) => w.runs.every((r) => !r.accent && PUNCTUATION_ONLY.test(r.text));
  const groups: TitleWordGroup[] = [];
  for (const piece of pieces) {
    const last = groups[groups.length - 1];
    const pieceIsPunct = !piece.accent && PUNCTUATION_ONLY.test(piece.text);
    if (last && (!piece.spaceBefore || (pieceIsPunct && hasAccent(last)))) {
      last.runs.push({
        text: (piece.spaceBefore ? NBSP : '') + piece.text,
        accent: piece.accent,
      });
      continue;
    }
    groups.push({
      runs: [{ text: piece.text, accent: piece.accent }],
      breakBefore: false,
    });
  }
  // Only a multi-word accent (« for real ») gets its own line; a single accented word (« speak? »)
  // stays in the sentence and simply never breaks (fondateur 17-09 : « pourquoi un retour à la ligne
  // pour speak ? »).
  const multiWordAccent = (w: TitleWordGroup) => w.runs.some((r) => r.accent && r.text.includes(NBSP));
  let wordsBefore = 0;
  for (const group of groups) {
    if (hasAccent(group) && multiWordAccent(group) && wordsBefore >= ACCENT_BREAK_MIN_WORDS) group.breakBefore = true;
    if (!isPunct(group)) wordsBefore += 1;
  }
  return groups;
}


// ─── Intro demo ─────────────────────────────────────────────────────────────────


export type IntroLesson = {
  /** What the teacher says, typed into the caption bubble, in the taught language. */
  line: string;
  /** Romanization under the line (non-Latin scripts: pinyin, rōmaji, romanization, transliteration). */
  lineRomanization?: string;
  /** What the learner is asked to repeat — the words colour in one by one. */
  replyWords: readonly string[];
  replyRomanization?: string;
  /** Between two words of the answer: a space, nothing in Chinese. */
  wordJoiner: string;
};

const spaced = (s: string): IntroLesson['replyWords'] => s.split(' ');

/**
 * The scene of each taught language: a real question about the weekend and a real, correct answer to
 * repeat — neutral in gender (« J’ai pris », « Ho mangiato », « Ich war »), so no learner reads a
 * form that is not theirs. The non-Latin languages carry their romanization: pinyin with tones,
 * Hepburn rōmaji, Revised Romanization, a simple Arabic transliteration. Arabic reads right to left
 * (`rtlTextStyle`). ⚠️ ja / ko / ar (2026-09-17) are to be re-read by a native speaker.
 */
export const INTRO_LESSONS: Readonly<Record<string, IntroLesson>> = {
  es: {
    line: '¿Qué hiciste el fin de semana?',
    replyWords: spaced('Fui a la playa con mis amigos'),
    wordJoiner: ' ',
  },
  en: {
    line: 'What did you do this weekend?',
    replyWords: spaced('I went to the beach with friends'),
    wordJoiner: ' ',
  },
  zh: {
    line: '你周末做了什么？',
    lineRomanization: 'Nǐ zhōumò zuò le shénme?',
    replyWords: ['我', '和', '朋友', '去了', '海边'],
    replyRomanization: 'Wǒ hé péngyou qù le hǎibiān',
    wordJoiner: '',
  },
  fr: {
    line: 'Qu’est-ce que tu as fait ce week-end ?',
    replyWords: spaced('J’ai pris un café avec des amis'),
    wordJoiner: ' ',
  },
  it: {
    line: 'Cosa hai fatto nel fine settimana?',
    replyWords: spaced('Ho mangiato una pizza con gli amici'),
    wordJoiner: ' ',
  },
  de: {
    line: 'Was hast du am Wochenende gemacht?',
    replyWords: spaced('Ich war mit Freunden am Strand'),
    wordJoiner: ' ',
  },
  pt: {
    line: 'O que você fez no fim de semana?',
    replyWords: spaced('Fui à praia com meus amigos'),
    wordJoiner: ' ',
  },
  ja: {
    line: '週末は何をしましたか？',
    lineRomanization: 'Shūmatsu wa nani o shimashita ka?',
    replyWords: ['友達と', '海に', '行きました'],
    replyRomanization: 'Tomodachi to umi ni ikimashita',
    wordJoiner: '',
  },
  ko: {
    line: '주말에 뭐 했어요?',
    lineRomanization: 'Jumare mwo haesseoyo?',
    replyWords: spaced('친구들이랑 바다에 갔어요'),
    replyRomanization: 'Chingudeurirang badae gasseoyo',
    wordJoiner: ' ',
  },
  // Arabic addresses « you » by gender, so the question asks HOW the weekend was (no « you » form),
  // and the answer is in the first person.
  ar: {
    line: 'كيف كانت عطلة نهاية الأسبوع؟',
    lineRomanization: "Kayfa kanat 'utlat nihayat al-usbu'?",
    replyWords: spaced('ذهبتُ إلى البحر مع أصدقائي'),
    replyRomanization: "Dhahabtu ila al-bahr ma'a asdiqa'i",
    wordJoiner: ' ',
  },
};


/** One scene lasts about this long, from its start to the next teacher. */
export const INTRO_SCENE_MS = 10_000;
/** Before the first letter. */
const SCENE_LEAD_MS = 400;
/** Between the « your turn » card and its first coloured word. */
const REPLY_LEAD_MS = 500;
/** One word of the answer takes the colour every… */
const REPLY_WORD_MS = 420;
/** The finished scene rests at least this long. */
const SCENE_REST_MIN_MS = 1800;
/** Fade-out of the bubbles at the end of a scene. */
export const SCENE_FADE_MS = 450;

export type IntroSceneTimings = {
  charAt: (c: number) => number;
  replyAt: number;
  wordAt: (w: number) => number;
  fadeAt: number;
  endAt: number;
};

/** When each beat of one scene happens, in ms from its start — padded to about {@link INTRO_SCENE_MS}. */
export function introSceneTimings(chars: number, words: number): IntroSceneTimings {
  const replyAt = SCENE_LEAD_MS + chars * CAPTION_CHAR_MS + SENTENCE_PAUSE_MS;
  const coloured = replyAt + REPLY_LEAD_MS + words * REPLY_WORD_MS;
  const fadeAt = Math.max(coloured + SCENE_REST_MIN_MS, INTRO_SCENE_MS - SCENE_FADE_MS);
  return {
    charAt: (c) => SCENE_LEAD_MS + c * CAPTION_CHAR_MS,
    replyAt,
    wordAt: (w) => replyAt + REPLY_LEAD_MS + w * REPLY_WORD_MS,
    fadeAt,
    endAt: fadeAt + SCENE_FADE_MS,
  };
}


// ─── Level ────────────────────────────────────────────────────────────────────

/**
 * CEFR card → the existing level value. The existing four read « never spoke a word » (A0),
 * « a few words and expressions » (A1), « I get by but it's hard » (A2), « I speak well and want to
 * progress » (B1 and up) — so B1 and B2 both land on `Advanced`. The CEFR itself is kept alongside
 * (`bliss_cefr_level`) for analytics.
 */
/** The four values the app stores in `answers['2']` / `spanish_level`. */
export type LevelValue = 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';

export const CEFR_TO_LEVEL_VALUE: Readonly<Record<CefrLevel, LevelValue>> = {
  A0: 'Beginner',
  A1: 'Elementary',
  A2: 'Intermediate',
  B1: 'Advanced',
  B2: 'Advanced',
};

export function isCefrLevel(value: unknown): value is CefrLevel {
  return typeof value === 'string' && (CEFR_LEVELS as readonly string[]).includes(value);
}


// ─── Goal ─────────────────────────────────────────────────────────────────────

export type GoalOption = { value: string; label: string; glyph: string };

/**
 * ⚠️ `value` is what the app stores in `onboardingAnswers['8']` and what its prompt reads back.
 * The label is free to change; the value is not.
 */
const GOALS: readonly GoalOption[] = [
  { value: 'Work', label: 'Work', glyph: '💼' },
  { value: 'Living abroad', label: 'Living abroad', glyph: '🌍' },
  { value: 'Traveling', label: 'Traveling', glyph: '✈️' },
  { value: 'Developing my skills', label: 'Developing my skills', glyph: '📈' },
  { value: 'Speaking with friends', label: 'Speaking with friends', glyph: '👥' },
  { value: 'Studying', label: 'Studying', glyph: '📖' },
];

/** Mandarin swaps « Living abroad » for « Family or heritage » — same as the app. */
const HERITAGE_GOALS: readonly GoalOption[] = GOALS.map((g) =>
  g.value === 'Living abroad'
    ? { value: 'Family or heritage', label: 'Family or heritage', glyph: '👵' }
    : g,
);

export function goalOptions(taughtLanguage: string | null): readonly GoalOption[] {
  return taughtLanguage === 'zh' ? HERITAGE_GOALS : GOALS;
}

// ─── Deadline ─────────────────────────────────────────────────────────────────

/** `bliss.guided.event.*` — optional, under the goal. « Nothing planned » is an answer. */
export const DEADLINE_EVENTS: readonly { id: string; label: string; glyph: string }[] = [
  { id: 'interview', label: 'A job interview', glyph: '💼' },
  { id: 'trip', label: 'A trip', glyph: '✈️' },
  { id: 'move', label: 'Moving abroad', glyph: '📦' },
  { id: 'exam', label: 'An exam', glyph: '🎓' },
  { id: 'reunion', label: 'Seeing someone', glyph: '❤️' },
];

// ─── Where did you hear about us ──────────────────────────────────────────────

/**
 * `src/config/heardAboutUs.ts`. Self-reported attribution: on the web the click ids already say
 * where a PAID visitor came from, and this is what says where the others did.
 */
export const HEARD_ABOUT_US = {
  title: 'Where did you hear about us?',
  subtitle: 'One tap — it helps us make more of what brought you here.',
  thanks: 'Thank you! 💛',
  skip: 'Skip',
  sources: [
    { id: 'tiktok', label: 'TikTok', color: '#010101' },
    { id: 'instagram', label: 'Instagram', color: '#DD2A7B' },
    { id: 'youtube', label: 'YouTube', color: '#FF0033' },
    { id: 'facebook', label: 'Facebook', color: '#1877F2' },
    { id: 'reddit', label: 'Reddit', color: '#FF4500' },
    { id: 'app_store', label: 'App Store', color: '#0A84FF' },
    { id: 'google', label: 'Google search', color: '#4285F4' },
    { id: 'ai_assistant', label: 'ChatGPT / AI', color: '#8B5CF6' },
    { id: 'friend', label: 'A friend', color: '#22C55E' },
    { id: 'other', label: 'Other', color: '#8E8E93' },
  ],
} as const;
