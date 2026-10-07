/**
 * `/bliss/vs/<competitor>/` — "Bliss vs X" comparison pages.
 *
 * WHY THESE PAGES EXIST
 * "[competitor] vs …" and "[competitor] alternative" are the winnable query class for this site
 * (PR #77 pivot): real commercial intent, a searcher close to installing, and page-1 results that are
 * thin listicles. Until now only the single-tutor apps (Sofia's praktika/babbel articles) had them;
 * Bliss — the multi-tutor app — had none.
 *
 * CONTENT RULES
 * - Positioned for Bliss (founder, 2026-10-07: « place nous mieux que les concurrents »): the verdict
 *   recommends Bliss for most learners, Bliss gets a ✓ on the rows it wins, and the competitor's
 *   case shrinks to a narrow "might still suit you if…". But never a false claim about them: a page
 *   that lies about a competitor is a legal and credibility risk, and Google demotes pure attack pages.
 * - No prices, no ratings, no user counts — for either side. They rot and they are claims we
 *   cannot keep current. Competitor facts are limited to what their own store pages state
 *   (languages offered, product format), written "at the time of writing".
 * - Distinct per competitor: its own verdict, its own table rows where they matter, its own FAQ.
 * - Bliss claims only what the app repo backs (see learnPages.ts header): eight tutors, ten
 *   languages, explains in your language, corrects the sentence you just said, romanization for
 *   non-Latin scripts, iPhone only.
 */

/** `win` = Bliss gets the ✓ on this row. */
export type VsRow = { label: string; bliss: string; them: string; win?: boolean };

export type VsPage = {
  /** URL segment: /bliss/vs/<slug>/ */
  slug: string;
  name: string;
  /** ≤ 70 chars. */
  title: string;
  /** ≤ 165 chars. */
  description: string;
  h1: string;
  intro: string;
  /** One-paragraph bottom line. */
  verdict: string;
  chooseBliss: string[];
  chooseThem: string[];
  rows: VsRow[];
  /** Where the competitor is genuinely stronger. */
  theirStrengths: { title: string; body: string }[];
  /** Where Bliss is different, specific to this matchup. */
  blissDifference: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  related?: { href: string; label: string }[];
};

/** Rows that are the same on every page — Bliss's side never changes, only theirs does. */
const BLISS_LANGS = '10: Spanish, French, English, Mandarin, Italian, German, Portuguese, Japanese, Korean, Arabic';
const BLISS_PLATFORM = 'iPhone (App Store)';
const BLISS_FREE = 'Free download with a first tutor; Pro unlocks every tutor';

export const VS_PAGES: readonly VsPage[] = [
  {
    slug: 'praktika',
    name: 'Praktika',
    title: 'Bliss vs Praktika: Which AI Avatar Language Tutor Is Right for You?',
    description:
      'Bliss vs Praktika: two AI avatar tutor apps compared on tutors, languages and how each one corrects you — and why beginners pick Bliss.',
    h1: 'Bliss vs Praktika: two AI avatar tutors, two different ideas of a lesson',
    intro:
      'Praktika and Bliss look alike at first glance: you talk out loud to an AI tutor with a face, and the tutor talks back. The difference is in what happens around the conversation — how much the tutor explains, in which language, and how you pick who teaches you.',
    verdict:
      'For most learners, Bliss is the stronger pick: your tutor explains in the language you already speak, fixes the exact sentence you just said and has you say it again, and you choose — and switch — between eight tutors in one app. Praktika mainly makes sense if you only want open-ended English conversation, need Russian, or are on Android.',
    chooseBliss: [
      'You are a beginner and need the explanation in your own language, not only in the one you are learning',
      'You want the tutor to fix the exact sentence you just said, then have you say it again',
      'You want to pick your tutor (and change tutors) without changing apps',
      'You learn Japanese, Korean, Mandarin or Arabic and want romanization under every line',
    ],
    chooseThem: [
      'English-only, open-ended conversation is all you want',
      'You need Russian or Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor you choose', them: 'Voice conversation with AI avatar tutors' },
      { label: 'Languages', bliss: BLISS_LANGS, them: 'About 12, including English, Spanish, French, German, Japanese, Korean, Chinese, Arabic and Russian (per its store page)' },
      { label: 'Explanations', bliss: 'In the language you already speak, phrase to say in the one you learn', them: 'Mostly in the target language, adapted to your level', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Feedback on grammar and vocabulary during and after the chat', win: true },
      { label: 'Choosing a tutor', bliss: 'Eight tutors, pick any one for any language, switch any time', them: 'Assigned avatar, others available', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone and Android' },
      { label: 'Free option', bliss: BLISS_FREE, them: 'Free download with a paid subscription for full access' },
    ],
    theirStrengths: [
      { title: 'A long head start in English', body: 'Praktika built its product around English learners and it shows: lots of scenarios, accents and topics for someone who already speaks some English and wants fluency.' },
      { title: 'Android and iPhone', body: 'If you switch between devices or use Android, Praktika is available where Bliss is not yet.' },
      { title: 'Conversation-first for intermediate learners', body: 'If you can already keep a chat going, an open conversation with fewer interruptions can feel more natural than guided correction.' },
    ],
    blissDifference: [
      { title: 'Built for the first hundred sentences', body: 'Bliss tutors explain in the language you already speak and hand you the exact phrase to say. Total beginners are never left staring at a sentence they cannot parse.' },
      { title: 'One app, eight tutors', body: 'Sofia, Amélie, Emily, Meilin and four more — each with their own personality. Every tutor teaches every language, so you can keep a tutor you like when you add a second language.' },
      { title: 'Correction you say out loud', body: 'When you get something wrong, your tutor gives you the corrected sentence and asks you to say it again. The fix happens in your mouth, not only on the screen.' },
    ],
    faq: [
      { q: 'Is Bliss a Praktika alternative?', a: 'Yes. Both are AI tutors you talk to out loud. Bliss leans more toward beginners — explanations in your own language and corrected sentences you repeat — while Praktika leans toward open conversation, especially in English.' },
      { q: 'Which is better for complete beginners?', a: 'Bliss is designed for that case: your tutor explains in the language you already speak and gives you the phrase to say. Conversation-first apps work better once you can already produce simple sentences.' },
      { q: 'Does Bliss teach English like Praktika?', a: 'Yes. English is one of Bliss’s ten languages, taught by Emily as the native tutor — or by any of the other tutors if you prefer.' },
      { q: 'Can I try Bliss for free?', a: 'Yes. Bliss is free to download with a first tutor. Plans and prices are shown in the app before you pay anything.' },
    ],
    related: [{ href: '/sofia/blog/praktika-alternative/', label: 'Praktika alternative for learning Spanish (Sofia)' }],
  },
  {
    slug: 'speak',
    name: 'Speak',
    title: 'Bliss vs Speak: AI Tutor Apps for Speaking a Language, Compared',
    description:
      'Bliss vs Speak: how two speaking-first language apps compare on languages, lessons, tutors and corrections — and an honest take on who should pick which.',
    h1: 'Bliss vs Speak: structured speaking drills or a tutor you talk with?',
    intro:
      'Speak and Bliss agree on the big idea — you learn a language by saying it out loud, a lot. They disagree on the shape: Speak is built around a structured course of speaking lessons, Bliss around a conversation with a tutor you pick.',
    verdict:
      'Bliss wins for most people who want to actually hold a conversation: a tutor who reacts to what you said, explains in your language and corrects you live — in ten languages, including German, Portuguese and Arabic, which Speak does not list. Speak is mainly worth it if you specifically want a lesson-by-lesson drill course or need Android.',
    chooseBliss: [
      'You want a conversation with a character, not a sequence of drills',
      'You learn German, Portuguese or Arabic',
      'You want the explanation in your own language at every step',
      'You like the idea of choosing — and switching — your tutor',
    ],
    chooseThem: [
      'You want a fixed drill course more than a conversation',
      'You need Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation with an AI tutor', them: 'Structured speaking lessons plus AI conversation practice' },
      { label: 'Languages', bliss: BLISS_LANGS, them: 'Spanish, French, Korean, Japanese, Italian, Mandarin and English (at the time of writing)', win: true },
      { label: 'Explanations', bliss: 'In the language you already speak', them: 'Lesson explanations in your language', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Speech recognition feedback on lesson lines and in AI chats', win: true },
      { label: 'Tutors', bliss: 'Eight characters with their own voice and personality', them: 'Course-driven; the AI tutor is a feature, not a persona you pick', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone, Android and web' },
      { label: 'Free option', bliss: BLISS_FREE, them: 'Free lessons with a paid subscription for full access' },
    ],
    theirStrengths: [
      { title: 'A real course structure', body: 'Speak’s lessons follow a designed sequence. If you like knowing exactly what comes next, that structure is a genuine advantage.' },
      { title: 'High-volume repetition', body: 'Saying many short lines in a row builds automatic responses. Speak does this well.' },
      { title: 'More platforms', body: 'Android and web access make it easier to practise on whatever device is at hand.' },
    ],
    blissDifference: [
      { title: 'A tutor, not a syllabus', body: 'In Bliss you talk with Sofia, Amélie, Emily, Meilin or another tutor who reacts to what you said, not to what a lesson planned for you to say.' },
      { title: 'Ten languages, same tutors', body: 'German, Portuguese and Arabic are included, and you can keep the same tutor when you add a language.' },
      { title: 'Scripts made readable', body: 'For Japanese, Korean, Mandarin and Arabic, every line comes with its romanization so you can say it before you can read it.' },
    ],
    faq: [
      { q: 'Is Bliss like Speak?', a: 'Both are speaking-first. Speak is organised as a structured course of speaking lessons; Bliss is a conversation with an AI tutor you choose, who explains in your language and corrects you as you go.' },
      { q: 'Which app has more languages, Bliss or Speak?', a: 'At the time of writing Bliss teaches ten languages, including German, Portuguese and Arabic, which Speak does not list. Speak covers seven.' },
      { q: 'Is Bliss good for Korean or Japanese?', a: 'Yes. Both are among Bliss’s ten languages, and every Korean or Japanese line comes with its romanization so beginners can say it right away.' },
      { q: 'Can I use Bliss on Android?', a: 'Not yet. Bliss is available on iPhone through the App Store.' },
    ],
  },
  {
    slug: 'learna',
    name: 'Learna',
    title: 'Bliss vs Learna: AI Speaking Tutor Apps Compared Honestly',
    description:
      'Bliss vs Learna: Learna is an AI English tutor, Bliss teaches ten languages with eight tutors. A fair comparison of format, corrections and who each app suits.',
    h1: 'Bliss vs Learna: an English coach, or a tutor for any of ten languages?',
    intro:
      'Learna is an AI English tutor: you chat with a virtual character and work through grammar, vocabulary, reading and pronunciation exercises. Bliss is a tutor you talk with in any of ten languages. If you are learning English, both are on the table. If you are not, only one is.',
    verdict:
      'Bliss is the better choice for almost everyone: ten languages instead of English only, eight tutors to choose from, and every session spent speaking rather than tapping through exercise screens. Learna only makes sense if English is your sole goal and you want grammar and spelling drills alongside the chat.',
    chooseBliss: [
      'You are learning Spanish, French, Mandarin, Japanese or any language other than English',
      'You want to spend your time speaking, not doing exercise screens',
      'You want explanations in your own language for every correction',
      'You want to choose your tutor among eight characters',
    ],
    chooseThem: [
      'English is your only goal and you want grammar and spelling drills',
      'You need Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'Chat with an AI character plus grammar, reading, vocabulary and pronunciation exercises', win: true },
      { label: 'Languages', bliss: BLISS_LANGS, them: 'English', win: true },
      { label: 'Explanations', bliss: 'In the language you already speak', them: 'English-focused, with exercises by skill', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Real-time feedback during practice', win: true },
      { label: 'Tutors', bliss: 'Eight characters, pick any one', them: 'A virtual chat character', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Free option', bliss: BLISS_FREE, them: 'Free download with in-app purchases' },
    ],
    theirStrengths: [
      { title: 'Everything English in one place', body: 'Grammar, spelling, reading and vocabulary modules sit next to the conversation, which suits learners who want a broad English workout.' },
      { title: 'Text and voice', body: 'If you are not always somewhere you can speak out loud, typed practice keeps you going.' },
    ],
    blissDifference: [
      { title: 'Ten languages', body: 'Spanish, French, English, Mandarin, Italian, German, Portuguese, Japanese, Korean and Arabic — with the same tutors.' },
      { title: 'Speaking is the lesson', body: 'Bliss does not split learning into exercise screens. You talk, your tutor corrects the sentence you said, you say it again.' },
      { title: 'A native tutor for English', body: 'Emily, Bliss’s Californian tutor, teaches English — explaining in your language when you need it.' },
    ],
    faq: [
      { q: 'Does Learna teach languages other than English?', a: 'At the time of writing Learna presents itself as an English tutor. Bliss teaches ten languages, including English.' },
      { q: 'Which is better for speaking practice?', a: 'Bliss is built only around speaking: every session is a conversation with your tutor. Learna mixes conversation with grammar, reading and vocabulary exercises.' },
      { q: 'Can Bliss help me learn English?', a: 'Yes. Emily is the native English tutor, and she explains in the language you already speak.' },
      { q: 'Is Bliss free?', a: 'Bliss is free to download with a first tutor. Plans and prices are shown in the app before you pay.' },
    ],
  },
  {
    slug: 'duolingo',
    name: 'Duolingo',
    title: 'Bliss vs Duolingo: Talking to a Tutor vs a Gamified Course',
    description:
      'Bliss vs Duolingo: a gamified course with streaks, or an AI tutor you talk to out loud? An honest look at what each is best at — and why many learners use both.',
    h1: 'Bliss vs Duolingo: streaks and lessons, or a tutor you talk to?',
    intro:
      'Duolingo is the app most people start with: short gamified lessons, streaks, leagues and an enormous language list. Its weak spot, by learners’ own account, is speaking — you can finish months of lessons and still freeze in a real conversation. Bliss is built for exactly that gap.',
    verdict:
      'If your goal is to speak, Bliss is the better app: from your first session you say full sentences out loud, and your tutor corrects the sentence you actually produced and explains why in your language. Duolingo is great for a daily vocabulary habit — but it is not where you learn to hold a conversation. Keep it for streaks if you like; use Bliss to speak.',
    chooseBliss: [
      'You have done lessons but still freeze when you have to speak',
      'You want corrections on sentences you produced yourself, not on multiple-choice answers',
      'You want a tutor with a voice and personality rather than a game',
      'Your language is one of Bliss’s ten',
    ],
    chooseThem: [
      'You mainly want streaks and leagues to build a daily habit',
      'Your language is outside Bliss’s ten',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'Gamified bite-size lessons; AI conversation features on some paid plans', win: true },
      { label: 'Languages', bliss: BLISS_LANGS, them: 'Dozens of courses' },
      { label: 'Speaking practice', bliss: 'The whole session is speaking', them: 'Speaking exercises inside lessons; open conversation limited to some plans and languages', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Right/wrong feedback on exercises', win: true },
      { label: 'Motivation', bliss: 'A tutor who knows you', them: 'Streaks, XP, leagues' },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone, Android and web' },
      { label: 'Free option', bliss: BLISS_FREE, them: 'Free with ads; paid tiers remove ads and add features' },
    ],
    theirStrengths: [
      { title: 'Habit building', body: 'Few apps are as good at getting you to open them every day. Streaks and leagues work for a lot of people.' },
      { title: 'Breadth', body: 'Dozens of languages, plus reading, listening and vocabulary drills across all of them.' },
      { title: 'Free core course', body: 'You can go a long way without paying.' },
    ],
    blissDifference: [
      { title: 'Speaking first, not speaking eventually', body: 'From your first session you are saying full sentences out loud to a tutor who answers back.' },
      { title: 'Your mistakes, fixed', body: 'Bliss corrects the sentence you actually said — your word order, your verb — and has you say the corrected version.' },
      { title: 'Explained like a person would', body: 'When something is wrong, your tutor tells you why, in the language you already speak.' },
    ],
    faq: [
      { q: 'Can Bliss replace Duolingo?', a: 'For speaking, yes — that is what Bliss is for. Many learners keep Duolingo for vocabulary and reading and use a speaking tutor like Bliss for conversation.' },
      { q: 'Why can’t I speak after months of Duolingo?', a: 'Recognising the right answer and producing a sentence yourself are different skills. Speaking improves fastest when you build sentences out loud and get them corrected, which is what a tutor session does.' },
      { q: 'Is Bliss gamified?', a: 'Not in the Duolingo sense. There are no leagues; the motivation is a tutor who talks with you and remembers what you worked on.' },
      { q: 'Which languages does Bliss teach?', a: 'Spanish, French, English, Mandarin, Italian, German, Portuguese, Japanese, Korean and Arabic.' },
    ],
  },
  {
    slug: 'babbel',
    name: 'Babbel',
    title: 'Bliss vs Babbel: AI Tutor Conversation vs Structured Lessons',
    description:
      'Bliss vs Babbel compared: structured grammar lessons and live classes, or an AI tutor you talk to out loud? Who each app suits, honestly.',
    h1: 'Bliss vs Babbel: a structured course, or a conversation?',
    intro:
      'Babbel teaches with carefully designed lessons that build grammar and vocabulary step by step, written for speakers of your language. Bliss puts the conversation first: you talk with a tutor, and grammar is explained the moment it comes up in something you said.',
    verdict:
      'If you want to speak, Bliss gets you there faster: you talk from day one and grammar is explained the moment it shows up in your own sentence, by a tutor who corrects you live. Babbel suits learners who prefer to study grammar on screen before saying anything, or who want paid live classes with humans.',
    chooseBliss: [
      'You want to start speaking immediately, not after a unit of lessons',
      'You learn Mandarin, Japanese, Korean or Arabic and want romanization under every line',
      'You want a tutor with a personality you can choose',
      'You get bored with exercise screens',
    ],
    chooseThem: [
      'You prefer grammar lessons on screen before speaking',
      'You want paid live classes with human teachers',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'Structured lessons, reviews and podcasts; optional live classes' },
      { label: 'Languages', bliss: BLISS_LANGS, them: 'Mostly European languages plus a few others (varies by your own language)', win: true },
      { label: 'Grammar', bliss: 'Explained when it shows up in your sentence', them: 'Taught explicitly, lesson by lesson', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Exercise feedback and speech recognition on lesson lines', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone, Android and web' },
      { label: 'Free option', bliss: BLISS_FREE, them: 'Free first lesson; subscription for the course' },
    ],
    theirStrengths: [
      { title: 'Grammar done properly', body: 'Babbel’s lessons explain the rules clearly and in order. If you like to understand before you speak, that is valuable.' },
      { title: 'Human teachers available', body: 'Live classes give you a real teacher when you want one.' },
    ],
    blissDifference: [
      { title: 'Talk on day one', body: 'Your first Bliss session is a conversation. You say real sentences from the start.' },
      { title: 'Asian languages and Arabic', body: 'Mandarin, Japanese, Korean and Arabic are taught with romanization so you can speak before you can read the script.' },
      { title: 'Pick your teacher', body: 'Eight tutors, each with their own voice and style — swap any time.' },
    ],
    faq: [
      { q: 'Is Bliss better than Babbel?', a: 'They do different jobs. Babbel is a structured course; Bliss is a tutor you talk with. If speaking is what you are missing, Bliss is the better fit.' },
      { q: 'Can I use Bliss and Babbel together?', a: 'Yes, and it works well: Babbel for the structure, Bliss to practise saying it out loud and get corrected.' },
      { q: 'Does Bliss explain grammar?', a: 'Yes, when it comes up. If you make a mistake, your tutor explains why in the language you already speak, then has you say the sentence again.' },
    ],
    related: [{ href: '/sofia/blog/babbel-alternative/', label: 'Babbel alternative for learning Spanish (Sofia)' }],
  },
  {
    slug: 'talkpal',
    name: 'TalkPal',
    title: 'Bliss vs TalkPal: Which AI Language Conversation App to Pick?',
    description:
      'Bliss vs TalkPal: 80+ languages in text and voice, or ten languages taught by eight tutors you talk to? An honest comparison of both AI language apps.',
    h1: 'Bliss vs TalkPal: breadth of languages, or depth of a tutor?',
    intro:
      'TalkPal is an AI conversation partner for a very long list of languages, in text or voice, with role-plays and pronunciation scores. Bliss teaches ten languages, voice-first, with eight tutors who explain in your own language.',
    verdict:
      'For any of the ten languages Bliss teaches, Bliss is the better teacher: guided sessions, explanations in your own language, corrected sentences you say back, and eight tutors with real personalities instead of a generic chatbot. TalkPal mainly wins if your language is outside Bliss’s ten.',
    chooseBliss: [
      'You are a beginner and need guidance, not just a conversation partner',
      'You want explanations in the language you already speak',
      'You want a tutor with a face, a voice and a personality',
      'You learn one of the ten languages Bliss teaches',
    ],
    chooseThem: [
      'Your language is not among Bliss’s ten',
      'You prefer typing to speaking',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'Text and voice chats, role-plays, debates' },
      { label: 'Languages', bliss: BLISS_LANGS, them: '80+ (per TalkPal)' },
      { label: 'Explanations', bliss: 'In the language you already speak', them: 'Configurable; mostly in the target language', win: true },
      { label: 'Corrections', bliss: 'Fixes the sentence you just said and has you repeat it', them: 'Grammar corrections and pronunciation scores', win: true },
      { label: 'Tutors', bliss: 'Eight characters you pick from', them: 'AI characters per scenario', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone, Android and web' },
    ],
    theirStrengths: [
      { title: 'Huge language list', body: 'If you are learning something like Swahili or Finnish, TalkPal likely covers it and Bliss does not.' },
      { title: 'Many practice modes', body: 'Role-plays, debates, character chats and typed practice give lots of variety.' },
    ],
    blissDifference: [
      { title: 'A teacher, not just a partner', body: 'Bliss tutors lead: they explain, give you the phrase, correct it, and have you say it again. That matters most in the first months.' },
      { title: 'Characters you get to know', body: 'Sofia, Amélie, Emily, Meilin and four more keep the same personality across sessions and languages.' },
    ],
    faq: [
      { q: 'Is Bliss a TalkPal alternative?', a: 'Yes, for the ten languages Bliss teaches. Bliss is voice-first and more guided; TalkPal covers more languages and supports typed practice.' },
      { q: 'Which is better for beginners?', a: 'Bliss, because your tutor explains in the language you already speak and gives you the exact phrase to say.' },
      { q: 'Does Bliss score pronunciation?', a: 'Bliss corrects you inside the conversation and has you repeat the right version, rather than giving a numeric score.' },
    ],
  },
  {
    slug: 'langua',
    name: 'Langua',
    title: 'Bliss vs Langua: AI Language Tutors Compared for Real Speaking',
    description:
      'Bliss vs Langua: detailed post-chat feedback and human tutors, or eight AI tutors who correct you live in ten languages? A fair look at both.',
    h1: 'Bliss vs Langua: feedback after the chat, or correction during it?',
    intro:
      'Langua (from LanguaTalk) is known for natural-sounding AI conversations and detailed feedback once the conversation ends, with interactive transcripts and saved vocabulary — and a marketplace of human tutors next to it. Bliss corrects you while you talk and has you say the fix right away.',
    verdict:
      'Bliss is the better fit for most learners: it corrects you while you speak — explained in your own language — so the fix becomes something you have said, not a report you read later. Langua is mainly for advanced learners who want long post-chat analysis or to book human tutors.',
    chooseBliss: [
      'You want corrections as you go, not a report at the end',
      'You need explanations in your own language',
      'You want to choose a tutor character',
      'You learn Mandarin, Japanese, Korean or Arabic and want romanization on every line',
    ],
    chooseThem: [
      'You are advanced and want long post-chat reports',
      'You want human tutors',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'AI voice and text conversations with transcripts; human tutors available' },
      { label: 'Feedback', bliss: 'Live: the sentence you just said, corrected and repeated', them: 'Detailed error lists after the conversation', win: true },
      { label: 'Explanations', bliss: 'In the language you already speak', them: 'Mostly in the target language', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'Web and mobile' },
    ],
    theirStrengths: [
      { title: 'Deep review', body: 'Categorised errors and interactive transcripts are excellent for learners who like to study their mistakes after the fact.' },
      { title: 'Humans when you want them', body: 'Being able to move from AI practice to a human tutor in the same ecosystem is a real plus.' },
    ],
    blissDifference: [
      { title: 'Fixed while it is fresh', body: 'Bliss corrects you in the moment and has you say the right version straight away — the correction becomes something you have said, not something you read.' },
      { title: 'Beginner-proof', body: 'Explanations in your own language mean you can start from zero.' },
    ],
    faq: [
      { q: 'Is Bliss a Langua alternative?', a: 'Yes. Both are AI tutors you talk with. Bliss corrects you during the conversation and explains in your language; Langua emphasises detailed feedback afterwards and offers human tutors.' },
      { q: 'Which suits intermediate learners?', a: 'Both can. Langua’s post-chat analysis is strong for intermediate learners; Bliss is stronger when you want live correction or are earlier on.' },
      { q: 'Does Bliss have human tutors?', a: 'No. Bliss’s eight tutors are AI, available any time of day.' },
    ],
  },
  {
    slug: 'univerbal',
    name: 'Univerbal',
    title: 'Bliss vs Univerbal: AI Language Tutor Apps Compared',
    description:
      'Bliss vs Univerbal: a full AI course with a placement test, or eight AI tutors you talk to in ten languages? Format, corrections and who each one suits.',
    h1: 'Bliss vs Univerbal: a course with an AI partner, or a tutor you pick?',
    intro:
      'Univerbal pairs AI conversation partners with a structured course and a placement test, across topics from movies to politics, in text and audio. Bliss is a voice-first tutor you choose among eight, who explains in your language.',
    verdict:
      'Bliss is the faster path to speaking: no placement test, no modules — open the app, pick your tutor and talk, with corrections explained in your language. Univerbal mainly suits learners who want a course syllabus and typed chat.',
    chooseBliss: [
      'You want voice-first practice rather than mixed text and audio',
      'You want explanations in your own language',
      'You want to pick and keep a tutor character',
    ],
    chooseThem: [
      'You want a placement test and a course syllabus',
      'You prefer typed chat',
    ],
    rows: [
      { label: 'Format', bliss: 'Voice conversation with an AI tutor', them: 'AI conversation partners plus a structured course; text and audio', win: true },
      { label: 'Level setting', bliss: 'Your tutor adapts as you talk', them: 'Placement test', win: true },
      { label: 'Explanations', bliss: 'In the language you already speak', them: 'Course explanations and chat feedback', win: true },
      { label: 'Platforms', bliss: BLISS_PLATFORM, them: 'iPhone, Android and web' },
    ],
    theirStrengths: [
      { title: 'Course plus conversation', body: 'A placement test and a course give you a clear path, with conversation to practise it.' },
      { title: 'Topic variety', body: 'Lots of discussion themes keep conversations interesting for intermediate learners.' },
    ],
    blissDifference: [
      { title: 'Straight to speaking', body: 'No placement test, no modules: you start talking and your tutor adjusts to what you can say.' },
      { title: 'Eight tutors, ten languages', body: 'Choose the tutor whose style you like and keep them across languages.' },
    ],
    faq: [
      { q: 'Is Bliss a Univerbal alternative?', a: 'Yes. Both use AI conversation for language learning. Univerbal adds a structured course; Bliss is a voice-first tutor you talk with.' },
      { q: 'Does Bliss have a placement test?', a: 'No. Your tutor adapts to your level as you talk, and explains in your own language whenever you need it.' },
    ],
  },
];

export const vsPath = (p: VsPage) => `/bliss/vs/${p.slug}/`;
