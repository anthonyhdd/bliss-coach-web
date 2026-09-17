/**
 * The Bliss teachers and the languages they teach — the web's copy of the app's hub.
 *
 * ⚠️ MIRRORED, NOT SHARED. The source of truth is the APPSOFIA repo:
 *   `src/config/activeTutor.ts`      — who teaches what (phase 3: every face, every language)
 *   `src/config/tutorPersonality.ts` — the three words of character under each name
 *   `src/config/tutorTheme.ts`       — `PERSONA_SEEDS`, the colour of each face
 * There is no package between the two repos, so this file is a copy taken on 2026-09-17. When a
 * teacher is added there, add them here — nothing will fail loudly if you forget, the web funnel
 * will simply offer one teacher fewer than the app it sells.
 */

export type Persona = 'sofia' | 'amelie' | 'emily' | 'meilin' | 'alex' | 'mila' | 'astra' | 'charm';

export type Tutor = {
  persona: Persona;
  name: string;
  /** The language this teacher is a native of, `null` for the bilingual friends. */
  native: string | null;
  /** Three words of character, from the teacher's own prompt persona. Order matters. */
  traits: [string, string, string];
  /** Portrait in `public/home/`. */
  photo: string;
  /** `PERSONA_SEEDS[persona]` — the face's own colour. */
  gradient: [string, string, string];
  accent: string;
  soft: string;
  wash: string;
  veil: string;
  /** `PERSONA_SEEDS[x].glow` — the colour of the light particles drifting up her card. */
  glow: string;
};

/** The four natives first, then the bilingual friends — the app's display order. */
export const TUTORS: readonly Tutor[] = [
  {
    persona: 'sofia',
    name: 'Sofia',
    native: 'es',
    traits: ['Warm', 'Direct', 'Funny'],
    photo: 'sofia.png',
    gradient: ['#F04A2A', '#F2621C', '#F57A10'],
    accent: '#C2410C',
    soft: '#FFEDE3',
    wash: '#FFF1E8',
    veil: '#9A3412',
    glow: '#FFD27A',
  },
  {
    persona: 'amelie',
    name: 'Amélie',
    native: 'fr',
    traits: ['Lively', 'Teasing', 'Elegant'],
    photo: 'amelie.webp',
    gradient: ['#3587FF', '#5873FF', '#7D62F4'],
    accent: '#2F5BE0',
    soft: '#EAF0FF',
    wash: '#EEF3FF',
    veil: '#1E2A8A',
    glow: '#B8D8FF',
  },
  {
    persona: 'emily',
    name: 'Emily',
    native: 'en',
    traits: ['Sunny', 'Encouraging', 'Direct'],
    photo: 'emily.jpg',
    gradient: ['#00A95C', '#02A676', '#06A391'],
    accent: '#047A5C',
    soft: '#E0F7EE',
    wash: '#EAF8F2',
    veil: '#064E3B',
    glow: '#B8F7E6',
  },
  {
    persona: 'meilin',
    name: 'Meilin',
    native: 'zh',
    traits: ['Patient', 'Precise', 'Gentle'],
    photo: 'meilin.jpg',
    gradient: ['#FF4541', '#F03A6A', '#DE3E95'],
    accent: '#BE185D',
    soft: '#FFE8F1',
    wash: '#FFF0F5',
    veil: '#831843',
    glow: '#FFD3E6',
  },
  {
    persona: 'alex',
    name: 'Alex',
    native: null,
    traits: ['Calm', 'Methodical', 'Patient'],
    photo: 'alex.png',
    gradient: ['#08A3B0', '#0A98C9', '#1F8BE6'],
    accent: '#0369A1',
    soft: '#E2F4FC',
    wash: '#EBF7FD',
    veil: '#0B3D66',
    glow: '#B5ECFF',
  },
  {
    persona: 'mila',
    name: 'Mila',
    native: null,
    traits: ['Lively', 'Curious', 'Frank'],
    photo: 'mila.jpg',
    gradient: ['#FFD400', '#E6D21A', '#B5D033'],
    accent: '#8A5A00',
    soft: '#FBF6D2',
    wash: '#FBF9E6',
    veil: '#735000',
    glow: '#FFF6C2',
  },
  {
    persona: 'astra',
    name: 'Astra',
    native: null,
    traits: ['Calm', 'Gentle', 'Encouraging'],
    photo: 'astra.jpg',
    gradient: ['#8F55FA', '#A34AEE', '#BA43DC'],
    accent: '#7E22CE',
    soft: '#F4EAFF',
    wash: '#F7F1FF',
    veil: '#4A1680',
    glow: '#EBD9FF',
  },
  {
    persona: 'charm',
    name: 'Charm',
    native: null,
    traits: ['Frank', 'Warm', 'Teasing'],
    photo: 'coach.png',
    gradient: ['#D643DB', '#DA3EC0', '#E73CA5'],
    accent: '#AD1FAD',
    soft: '#FCE8F9',
    wash: '#FDF2FB',
    veil: '#741A74',
    glow: '#FFCCF6',
  },
];

export const TUTOR_BY_PERSONA: Readonly<Record<string, Tutor>> = Object.fromEntries(
  TUTORS.map((t) => [t.persona, t]),
);

export type TaughtLanguage = {
  code: string;
  /** English name, as the funnel is English. */
  name: string;
  /** The two-letter badge on the language tile — `GUIDED_LANGUAGE_BADGE` in the app. */
  badge: string;
  /** The language's own name, small above the tile's title — the app's `LanguageTileGrid` top row. */
  native: string;
};

/** `TAUGHT_LANGUAGE_CODES` order: ES / EN / 中 / FR, then IT / DE / PT, then 日 / 한 / ع. */
export const TAUGHT_LANGUAGES: readonly TaughtLanguage[] = [
  { code: 'es', name: 'Spanish', badge: 'ES', native: 'español' },
  { code: 'en', name: 'English', badge: 'EN', native: 'English' },
  { code: 'zh', name: 'Mandarin', badge: '中', native: '中文' },
  { code: 'fr', name: 'French', badge: 'FR', native: 'français' },
  { code: 'it', name: 'Italian', badge: 'IT', native: 'italiano' },
  { code: 'de', name: 'German', badge: 'DE', native: 'Deutsch' },
  { code: 'pt', name: 'Portuguese', badge: 'PT', native: 'português' },
  { code: 'ja', name: 'Japanese', badge: '日', native: '日本語' },
  { code: 'ko', name: 'Korean', badge: '한', native: '한국어' },
  { code: 'ar', name: 'Arabic', badge: 'ع', native: 'العربية' },
];

export const LANGUAGE_BY_CODE: Readonly<Record<string, TaughtLanguage>> = Object.fromEntries(
  TAUGHT_LANGUAGES.map((l) => [l.code, l]),
);

/**
 * The teachers offered for a language: its native first — she is the recommended one — then the
 * bilingual friends, then the other natives. Every face teaches every language (app phase 3,
 * 2026-09-17), so no language is ever offered with a shorter rail than another.
 */
export function tutorsForLanguage(code: string): Tutor[] {
  const native = TUTORS.filter((t) => t.native === code);
  const bilingual = TUTORS.filter((t) => t.native === null);
  const others = TUTORS.filter((t) => t.native !== null && t.native !== code);
  return [...native, ...bilingual, ...others];
}

/** The teacher pre-selected when a language is picked: its native, else the first bilingual friend. */
export function recommendedTutor(code: string): Tutor {
  return tutorsForLanguage(code)[0];
}

/**
 * The hue step (degrees) a teacher's colour takes per language — `LANGUAGE_HUE_STEPS` in the app.
 * A native's own language stays at 0. Without it every language whose recommended teacher is the
 * same bilingual friend (it, de, pt, ja, ko, ar → Alex) would wear the identical teal, and the
 * language grid would read as one colour repeated six times.
 */
export const LANGUAGE_HUE_STEPS: Readonly<Record<string, Readonly<Record<string, number>>>> = {
  sofia: { es: 0, en: -3, zh: -6, fr: -9, it: -12, de: -15, pt: -18, ja: -1, ko: -7, ar: -13 },
  amelie: { es: -4, en: 4, zh: -8, fr: 0, it: 8, de: 12, pt: 16, ja: -6, ko: -2, ar: 2 },
  emily: { es: -4, en: 0, zh: 4, fr: -8, it: 8, de: -12, pt: -16, ja: -24, ko: -20, ar: 12 },
  meilin: { es: -3, en: 2, zh: 0, fr: -6, it: 4, de: -9, pt: -12, ja: -2, ko: -1, ar: 1 },
  alex: { es: 0, en: 4, zh: 10, fr: -4, it: 12, de: -8, pt: 8, ja: -6, ko: -2, ar: 2 },
  mila: { es: 0, en: -4, zh: 4, fr: -8, it: 8, de: 12, pt: 16, ja: -12, ko: 20, ar: 24 },
  astra: { es: 0, en: 4, zh: -4, fr: -8, it: 8, de: 12, pt: 16, ja: -6, ko: -2, ar: 2 },
  charm: { es: 0, en: 3, zh: -3, fr: 6, it: -6, de: 9, pt: -9, ja: -2, ko: -1, ar: 1 },
};

export function hueStep(persona: string, code: string): number {
  return LANGUAGE_HUE_STEPS[persona]?.[code] ?? 0;
}

/** « Native teacher » / « Bilingual friend » — the tag under the name on a card. */
export function tutorTag(tutor: Tutor, code: string): string {
  return tutor.native === code ? 'Native teacher' : 'Bilingual friend';
}
