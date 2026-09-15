// Conversion content for the LANGUAGE-TUTOR landings (Sofia, Amélie, Emily, Meilin) and for the
// /bliss/ page that puts all four in one app.
//
// The page skeleton follows the category leader's landing (praktika.ai, 2026-09): proof right under
// the headline, a correction shown inside the product, "private tutor vs app", then an FAQ. What we do
// NOT copy is its proof: Praktika leads with 1.2M ratings, and our apps have a handful each (iTunes
// lookup 2026-09-15: 1 to 4 ratings per app). So the proof row states product facts a reader can check
// in the app, never a number we cannot substantiate. Keep it that way when editing.
//
// Every correction below is a real, common learner mistake, and the explanation is the one-line "why"
// the tutors give in the chat. No pronunciation SCORING is claimed anywhere: acoustic assessment only
// exists on a narrow path (Meilin's repeat card), so the copy talks about tips, not grades.

import type { AppDef } from './apps';

export interface Correction {
  said: string;
  better: string;
  /** romanisation printed under a line the reader cannot sound out (Mandarin) */
  saidPhonetic?: string;
  betterPhonetic?: string;
  why: string;
  /** set when `why` is deliberately NOT in English, to show "explained in your language" */
  whyLangLabel?: string;
}

export interface TutorPitch {
  /** the language taught, in English */
  language: string;
  /** the variety / accent, as the FAQ and proof row name it */
  variety: string;
  proof: { value: string; label: string }[];
  correction: Correction;
  /** one tutor-specific FAQ entry on top of the shared ones */
  extraFaq: { q: string; a: string };
  /** a first line in the tutor's language, for the /bliss/ roster */
  hello: { line: string; phonetic?: string; gloss?: string };
  /** one-sentence roster blurb */
  blurb: string;
}

export const TUTOR_PITCH: Record<string, TutorPitch> = {
  sofia: {
    language: 'Spanish',
    variety: 'everyday Mexican Spanish',
    proof: [
      { value: 'Native', label: 'Mexican Spanish' },
      { value: 'Voice', label: 'real conversations' },
      { value: '0', label: 'drills or flashcards' },
    ],
    correction: {
      said: 'Yo soy cansado.',
      better: 'Estoy cansado.',
      why: 'Tired is how you feel right now, so Spanish uses estar, not ser.',
    },
    extraFaq: {
      q: 'Does Sofia teach Spain Spanish or Latin American Spanish?',
      a: 'Sofia is from Mexico and teaches the Spanish people speak across Latin America — everyday phrases and expressions, with notes when Spain says it differently.',
    },
    hello: { line: '¡Hola! ¿Practicamos un poco?', gloss: 'Hi! Shall we practise a little?' },
    blurb: 'Real conversations and instant corrections, from your very first sentence.',
  },
  amelie: {
    language: 'French',
    variety: 'casual Parisian French',
    proof: [
      { value: 'Native', label: 'Parisian French' },
      { value: 'Voice', label: 'real conversations' },
      { value: 'Daily', label: 'lesson built on the last' },
    ],
    correction: {
      said: 'J’ai allé au cinéma hier.',
      better: 'Je suis allé au cinéma hier.',
      why: 'Aller is one of the verbs that takes être in the past, not avoir.',
    },
    extraFaq: {
      q: 'Will Amélie teach me formal or casual French?',
      a: 'Casual, current French — the way people actually talk in Paris — and she tells you when a situation calls for the more formal version.',
    },
    hello: { line: 'Salut ! On commence par un café ?', gloss: 'Hi! Shall we start with a coffee?' },
    blurb: 'Casual French the way Paris actually talks, corrected as you go.',
  },
  emily: {
    language: 'English',
    variety: 'natural American English',
    proof: [
      { value: 'Native', label: 'American English' },
      { value: 'Voice', label: 'real conversations' },
      { value: 'No', label: 'judgment, ever' },
    ],
    correction: {
      said: 'I am agree with you.',
      better: 'I agree with you.',
      why: 'En anglais, « agree » est déjà un verbe : pas besoin de « am ».',
      whyLangLabel: 'Explained in French — or in your language',
    },
    extraFaq: {
      q: 'Can Emily help with IELTS, TOEFL or job interviews in English?',
      a: 'Yes. You can rehearse the speaking situations you are nervous about — exam speaking parts, interviews, small talk — and get corrected on what you actually said.',
    },
    hello: { line: 'Hey! What did you get up to this weekend?' },
    blurb: 'Speak English without freezing up — gentle corrections, zero sighing.',
  },
  meilin: {
    language: 'Mandarin Chinese',
    variety: 'standard Mandarin, with pinyin on every line',
    proof: [
      { value: 'Native', label: 'Mandarin speaker' },
      { value: 'Pinyin', label: 'on every line' },
      { value: 'Tones', label: 'tips on your own words' },
    ],
    correction: {
      said: '我是很好。',
      saidPhonetic: 'wǒ shì hěn hǎo',
      better: '我很好。',
      betterPhonetic: 'wǒ hěn hǎo',
      why: 'Mandarin drops 是 before an adjective — 很 does the linking.',
    },
    extraFaq: {
      q: 'Do I need to read Chinese characters to start?',
      a: 'No. Every Mandarin phrase comes with its pinyin and what it means, so you can say it out loud long before you can read the characters.',
    },
    hello: { line: '你好！我们开始吧。', phonetic: 'nǐ hǎo! wǒmen kāishǐ ba.', gloss: 'Hi! Let’s get started.' },
    blurb: 'She explains in your language and hands you the Mandarin — characters, pinyin, tones.',
  },
};

/** Roster order everywhere a tutor list is shown. */
export const LANGUAGE_TUTOR_SLUGS = ['sofia', 'amelie', 'emily', 'meilin'] as const;

/** FAQ for one tutor landing. Visible on the page AND emitted as FAQPage JSON-LD from the same
 *  array — Google requires the markup to mirror on-page content. */
export function tutorFaq(app: AppDef, pitch: TutorPitch): { q: string; a: string }[] {
  return [
    {
      q: `Is ${app.name} good for complete beginners?`,
      a: `Yes. ${app.name} explains in your language and hands you the ${pitch.language} phrase to say, so you can start speaking in your very first conversation — even from zero.`,
    },
    {
      q: `How does ${app.name} correct my mistakes?`,
      a: `Inside the conversation. ${app.name} shows what to change in the sentence you just said, gives you the reason in one line, and keeps talking with you — no score at the end, no red pen.`,
    },
    pitch.extraFaq,
    {
      q: 'Do I have to speak out loud?',
      a: 'Speaking is the point, and you will do a lot of it — but you can type instead at any moment.',
    },
    {
      q: `Is ${app.name} free?`,
      a: app.comingSoon
        ? `${app.name} is coming soon to the App Store. It will be free to download, and any subscription plans and prices are shown in the app before you pay anything.`
        : `${app.name} is free to download, with no credit card to start. A subscription unlocks the full experience; plans and prices are shown in the app before you pay anything.`,
    },
    {
      q: `Is ${app.name} available on Android?`,
      a: `Not yet — ${app.name} is an iPhone app.`,
    },
  ];
}

/** "Private tutor vs the app" rows. `extra` rows are appended for pages that need them. */
export function compareRows(extra: [string, string, string][] = []): [string, string, string][] {
  return [
    ['When you can practise', 'When a slot is free, booked ahead', 'Any time — even for five minutes'],
    ['Making the same mistake again', 'Awkward the third time', 'Say it twenty times. No judgment'],
    ['Explanations', 'In whatever language the tutor speaks', 'Always in the language you speak'],
    ...extra,
    ['Cost', 'Paid by the hour', 'Free to start, one subscription'],
  ];
}
