/**
 * The funnel's interface language. English is the source (`onboarding.ts`, `funnel.ts`); French is
 * the one translation, because the paid traffic is French (Emily's Meta campaigns target France,
 * 2026-09-18 — the founder: « les ads visent la France » while every screen answered in English).
 *
 * WHICH LANGUAGE
 *   `?lang=fr|en` wins (an ad can force it), else the browser's first language. Anything that is not
 *   French stays English, which is what the page has always been.
 *
 * WHAT IS NOT TRANSLATED
 *   - the taught language itself: the demo line, the vocabulary grids (they ARE the test);
 *   - the stored VALUES (goal `value`, deadline `id`, source `id`): the app reads them back in English.
 *     Only labels change here.
 *
 * Tutoiement, like the app's French copy and the French ads.
 */

import { COPY, RESULT_COPY, TIER_LABEL, HEARD_ABOUT_US } from './onboarding';

export type UiLang = 'en' | 'fr';

export function detectUiLang(search: string, languages: readonly string[]): UiLang {
  const forced = new URLSearchParams(search).get('lang');
  if (forced === 'fr' || forced === 'en') return forced;
  const first = (languages[0] ?? '').toLowerCase();
  return first.startsWith('fr') ? 'fr' : 'en';
}

type Copy = { -readonly [K in keyof typeof COPY]: string } & { introTitleLocked: string };
type ResultCopy = { -readonly [K in keyof typeof RESULT_COPY]: string };

const COPY_FR: Copy = {
  introTitle: 'Parle une langue *pour de vrai*',
  introTitleLocked: 'Parle {language} *pour de vrai*',
  introPromise: 'Une prof qui t’écoute, te répond et te corrige. À voix haute, dès la première minute.',
  demoLive: 'En appel',
  demoYourTurn: 'À toi · répète',
  languageTitle: 'Quelle langue veux-tu *parler* ?',
  tutorTitle: 'Choisis *ton prof*',
  tutorSubtitle: 'Fais défiler pour les rencontrer. Tu pourras changer quand tu veux.',
  vocabularyTitle: 'Touche les mots que tu *comprends*',
  vocabularyMore: 'Et *ceux-là* ?',
  vocabularyNone: 'Aucun de ceux-là',
  goalTitle: 'C’est *pour quoi* ?',
  goalDeadline: 'Une date en tête ?',
  optional: 'Facultatif',
  nameTitle: 'Comment {name} va *t’appeler* ?',
  namePlaceholder: 'Ton prénom',
  readyTitle: '{first}, ton plan est *prêt*',
  readyTitleAnon: 'Ton plan est *prêt*',
  readySubtitle: '{name} attend ton premier appel.',
  continue: 'Continuer',
  skipHint: 'Touche pour passer',
};

const RESULT_FR: ResultCopy = {
  level: 'niveau estimé',
  words: 'mots reconnus',
  daysLeft: 'jours avant le jour J',
  beatsGuess: 'Tu te sous-estimais',
  rowDefault: 'Tu veux parler, pas réviser',
  rowTutor: '{name} te fait parler dès la première minute',
  rowDeadline: '15 min par jour jusqu’au jour J',
  rowRhythm: '15 min par jour, à ton rythme',
};

/** Keyed by the stored English value, which never changes. */
const GOAL_LABEL_FR: Record<string, string> = {
  Work: 'Le travail',
  'Living abroad': 'Vivre à l’étranger',
  Traveling: 'Voyager',
  'Developing my skills': 'Progresser',
  'Speaking with friends': 'Parler avec des amis',
  Studying: 'Les études',
  'Family or heritage': 'Famille ou origines',
};

const DEADLINE_LABEL_FR: Record<string, string> = {
  interview: 'Un entretien d’embauche',
  trip: 'Un voyage',
  move: 'Un départ à l’étranger',
  exam: 'Un examen',
  reunion: 'Revoir quelqu’un',
};
/** The deadline pill on the paywall drops the article: « 12 jours · entretien d’embauche ». */
const DEADLINE_SHORT_FR: Record<string, string> = {
  interview: 'entretien d’embauche',
  trip: 'voyage',
  move: 'départ à l’étranger',
  exam: 'examen',
  reunion: 'retrouvailles',
};

const SOURCE_LABEL_FR: Record<string, string> = {
  google: 'Recherche Google',
  ai_assistant: 'ChatGPT / IA',
  friend: 'Un ami',
  other: 'Autre',
};

const LANGUAGE_NAME_FR: Record<string, string> = {
  es: 'espagnol', en: 'anglais', zh: 'mandarin', fr: 'français', it: 'italien',
  de: 'allemand', pt: 'portugais', ja: 'japonais', ko: 'coréen', ar: 'arabe',
};

/** Per tutor, because French adjectives agree: Alex is a man, every other tutor (Charm included) a woman. */
const TRAITS_FR: Record<string, [string, string, string]> = {
  sofia: ['Chaleureuse', 'Directe', 'Drôle'],
  amelie: ['Pétillante', 'Taquine', 'Élégante'],
  emily: ['Solaire', 'Directe', 'Encourageante'],
  meilin: ['Patiente', 'Précise', 'Douce'],
  alex: ['Calme', 'Méthodique', 'Patient'],
  mila: ['Pétillante', 'Curieuse', 'Franche'],
  astra: ['Calme', 'Douce', 'Encourageante'],
  charm: ['Franche', 'Chaleureuse', 'Taquine'],
};

const PLAN_NAME_FR: Record<string, string> = {
  $rc_monthly: '1 mois',
  $rc_annual: '1 an',
  $rc_three_month: '3 mois',
};

type Item = { title: string; body: string };
type Faq = { q: string; a: string };

const INCLUDED_COMMON_FR: Item[] = [
  { title: 'Corrigé pendant que tu parles', body: 'La phrase que tu viens de dire, corrigée, avec la raison en une ligne.' },
];
const INCLUDED_FR: Record<string, Item[]> = {
  bliss: [
    { title: 'Conversations illimitées', body: 'Parle aussi longtemps et aussi souvent que tu veux, avec n’importe quel prof.' },
    ...INCLUDED_COMMON_FR,
    { title: 'Dix langues, huit profs', body: 'Espagnol, anglais, mandarin, français, italien, allemand, portugais, japonais, coréen, arabe.' },
    { title: 'Expliqué en français', body: 'Ton prof explique dans ta langue. Un vrai débutant n’est jamais perdu.' },
    { title: 'Part de ton niveau', body: 'Le niveau que tu viens de mesurer et l’objectif que tu viens de choisir — pas de leçon 1 générique.' },
  ],
  emily: [
    { title: 'Conversations illimitées', body: 'Parle avec Emily aussi longtemps et aussi souvent que tu veux.' },
    ...INCLUDED_COMMON_FR,
    { title: 'Répète les moments qui comptent', body: 'Entretiens, small talk, oral de l’IELTS et du TOEFL — entraîné avant le jour J.' },
    { title: 'Expliqué en français', body: 'Emily explique en français. Un vrai débutant n’est jamais perdu.' },
    { title: 'Part de ton niveau', body: 'Le niveau que tu viens de mesurer et l’objectif que tu viens de choisir — pas de leçon 1 générique.' },
  ],
  sofia: [
    { title: 'Conversations illimitées', body: 'Parle avec Sofia aussi longtemps et aussi souvent que tu veux.' },
    ...INCLUDED_COMMON_FR,
    { title: 'Prononciation vérifiée', body: 'Ton enregistrement est noté son par son, pas seulement les mots.' },
    { title: 'Expliqué en français', body: 'Sofia explique en français. Un vrai débutant n’est jamais perdu.' },
    { title: 'Part de ton niveau', body: 'Le niveau que tu viens de mesurer et l’objectif que tu viens de choisir — pas de leçon 1 générique.' },
  ],
};

const FAQ_FR: Faq[] = [
  {
    q: 'Faut-il déjà savoir parler ?',
    a: 'Non. Ton prof explique en français et te donne la phrase à dire. Des gens partent de zéro tous les jours.',
  },
  {
    q: 'Quelle différence avec Duolingo ?',
    a: 'Duolingo, ce sont des exercices. Ici, c’est une conversation à voix haute, en temps réel, corrigée sur ce que tu as vraiment dit.',
  },
  {
    q: 'Que se passe-t-il après l’abonnement ?',
    a: 'Tu crées ton compte, tu télécharges l’app et tu t’y connectes. Ton abonnement est déjà là — rien à restaurer, et ton plan est déjà prêt.',
  },
  {
    q: 'Je peux résilier ?',
    a: 'Quand tu veux, depuis les réglages de ton compte. Tu gardes l’accès jusqu’à la fin de la période payée.',
  },
];

/** « €9.99 » → « 9,99 € ». The amount is the same; only its French spelling changes. */
export function frenchPrice(price: string): string {
  const m = price.match(/^€\s?([\d.]+)$/);
  return m ? `${m[1].replace('.', ',')} €` : price;
}

export type Strings = {
  lang: UiLang;
  copy: Copy;
  result: ResultCopy;
  tier: Record<string, string>;
  heard: { title: string; subtitle: string; thanks: string; skip: string };
  goalLabel: (value: string, fallback: string) => string;
  deadlineLabel: (id: string, fallback: string) => string;
  deadlineShort: (id: string, fallback: string) => string;
  sourceLabel: (id: string, fallback: string) => string;
  languageName: (code: string, fallback: string) => string;
  traits: (persona: string, fallback: readonly string[]) => readonly string[];
  tutorTag: (native: boolean, persona: string) => string;
  recommended: string;
  price: (price: string) => string;
  planName: (packageId: string, fallback: string) => string;
  mostPopular: string;
  saveVsMonthly: (pct: number) => string;
  perDay: string;
  included: (funnelId: string) => Item[] | null;
  faq: Faq[] | null;
  pwTitle: (first: string) => string;
  pwWith: (name: string) => string;
  pwSub: (name: string) => string;
  unlockTitle: (what: string) => string;
  secondCta: (name: string) => string;
  daysToGo: (days: number, what: string) => string;
  levelPill: (level: string) => string;
  renewal: (price: string) => string;
  android: (app: string) => string;
  oneMoment: string;
  checkoutError: string;
  demoAlt: (name: string, language: string) => string;
  /** Static text of the page, keyed by `data-i18n`. `null` = keep the English in the markup. */
  static: Record<string, string> | null;
};

const EN: Strings = {
  lang: 'en',
  copy: { ...COPY, introTitleLocked: 'Speak {language} *for real*' },
  result: { ...RESULT_COPY },
  tier: { ...TIER_LABEL },
  heard: { title: HEARD_ABOUT_US.title, subtitle: HEARD_ABOUT_US.subtitle, thanks: HEARD_ABOUT_US.thanks, skip: HEARD_ABOUT_US.skip },
  goalLabel: (_v, f) => f,
  deadlineLabel: (_id, f) => f,
  deadlineShort: (_id, f) => f.replace(/^An? /, ''),
  sourceLabel: (_id, f) => f,
  languageName: (_c, f) => f,
  traits: (_p, f) => f,
  tutorTag: (native, _persona) => (native ? 'Native teacher' : 'Bilingual friend'),
  recommended: 'Recommended',
  price: (p) => p,
  planName: (_id, f) => f,
  mostPopular: 'Best value',
  saveVsMonthly: (pct) => `−${pct}% vs monthly`,
  perDay: 'per day',
  included: () => null,
  faq: null,
  pwTitle: (first) => (first ? `Your plan is ready, ${first}` : 'Your plan is ready'),
  pwWith: (name) => `with ${name}`,
  pwSub: (name) => `Pick your plan to keep going with ${name}.`,
  unlockTitle: (what) => `What ${what} unlocks`,
  secondCta: (name) => `Start speaking with ${name}`,
  daysToGo: (days, what) => `${days} days to go · ${what}`,
  levelPill: (level) => `Level ${level}`,
  renewal: (price) => `Your subscription renews at ${price} until you cancel. Cancel any time from your account settings.`,
  android: (app) => `${app} is on iPhone only for now — Android is coming soon. Nothing will be charged on this device.`,
  oneMoment: 'One moment…',
  checkoutError: 'We could not start checkout. Please try again in a moment.',
  demoAlt: (name, language) => `${name}, AI ${language} tutor`,
  static: null,
};

const MALE_TUTORS = new Set(['alex', 'charm']);

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const FR: Strings = {
  lang: 'fr',
  copy: COPY_FR,
  result: RESULT_FR,
  tier: { basic: '{language} · niveau A1', mid: '{language} · niveau B1', high: '{language} · niveau C1' },
  heard: {
    title: 'Comment nous as-tu connus ?',
    subtitle: 'Un tap — ça nous aide à faire plus de ce qui t’a amené ici.',
    thanks: 'Merci ! 💛',
    skip: 'Passer',
  },
  goalLabel: (v, f) => GOAL_LABEL_FR[v] ?? f,
  deadlineLabel: (id, f) => DEADLINE_LABEL_FR[id] ?? f,
  deadlineShort: (id, f) => DEADLINE_SHORT_FR[id] ?? f,
  sourceLabel: (id, f) => SOURCE_LABEL_FR[id] ?? f,
  languageName: (c, f) => LANGUAGE_NAME_FR[c] ?? f,
  traits: (p, f) => TRAITS_FR[p] ?? f,
  tutorTag: (native, persona) =>
    native ? 'Prof native' : MALE_TUTORS.has(persona) ? 'Ami bilingue' : 'Amie bilingue',
  recommended: 'Notre choix',
  price: frenchPrice,
  planName: (id, f) => PLAN_NAME_FR[id] ?? f,
  mostPopular: 'Meilleur prix',
  saveVsMonthly: (pct) => `−${pct} % vs mensuel`,
  perDay: 'par jour',
  included: (id) => INCLUDED_FR[id] ?? null,
  faq: FAQ_FR,
  pwTitle: (first) => (first ? `Ton plan est prêt, ${first}` : 'Ton plan est prêt'),
  pwWith: (name) => `avec ${name}`,
  pwSub: (name) => `Choisis ta formule pour continuer avec ${name}.`,
  unlockTitle: (what) => `Ce ${/^[aeiouyéèêàâîïôœh]/i.test(what) ? 'qu’' : 'que '}${what} débloque`,
  secondCta: (name) => `Commence à parler avec ${name}`,
  daysToGo: (days, what) => `J-${days} · ${what}`,
  levelPill: (level) => `Niveau ${level}`,
  renewal: (price) =>
    `Ton abonnement se renouvelle à ${price} jusqu’à ce que tu résilies. Résiliable à tout moment depuis les réglages de ton compte.`,
  android: (app) =>
    `${app} n’existe que sur iPhone pour l’instant — Android arrive bientôt. Rien ne sera débité sur cet appareil.`,
  oneMoment: 'Un instant…',
  checkoutError: 'Impossible d’ouvrir le paiement. Réessaie dans un instant.',
  demoAlt: (name, language) => `${name}, prof d’${language} IA`,
  static: {
    back: 'Retour',
    legalIntro:
      'En continuant, tu acceptes nos <a href="/terms/">Conditions</a> et notre <a href="/privacy/">Politique de confidentialité</a>. · <a href="#cookies" data-consent-open>Cookies</a>',
    when: 'Quand ?',
    countdown: 'Ta réduction est réservée pendant',
    pickPlan: 'Choisis ta formule',
    continue: 'Continuer',
    payAria: 'Moyens de paiement acceptés',
    secure: 'Paiement sécurisé · Fonctionne sur iPhone',
    faq: 'Questions fréquentes',
    footerLegal:
      '<a href="/privacy/">Confidentialité</a> · <a href="/terms/">Conditions</a> · <a href="#cookies" data-consent-open>Cookies</a>',
  },
};

export function stringsFor(lang: UiLang): Strings {
  return lang === 'fr' ? FR : EN;
}

export { capitalise };
