/**
 * `/bliss/learn-<language>/` — one page per language Bliss teaches.
 *
 * WHY THESE PAGES EXIST
 * The organic traffic of the site sits on the single-tutor apps (Sofia, Amélie, Meilin…). Bliss has
 * no blog and no pSEO of its own (it is deliberately not an APPS entry), so without these pages the
 * only Bliss URLs a search engine can find are `/` and `/bliss/`. Each page targets "learn <language>
 * with an AI tutor" and gives the language-learning articles a relevant place to send readers.
 *
 * CONTENT RULES (SEO_PLAYBOOK.md + the founder's rules)
 * - Genuinely distinct per language: its own reasons, its own hard parts, its own phrases, its own
 *   FAQ. Nothing here is a template sentence with the language name swapped in — that is the thin
 *   duplicate content Google demotes.
 * - Product claims only where the app repo backs them: tutors explain in the learner's language;
 *   every non-Latin line (zh, ja, ko, ar) is followed by its romanization (`taughtScripts.ts`);
 *   Arabic is Modern Standard Arabic, not a dialect (`languageTutors.ts`); the recommended tutor is
 *   `recommendedTutor()` — the native for es/fr/en/zh, the first bilingual friend (Alex) otherwise.
 * - Never a rating, a review count or a learner count. Bliss has none worth quoting yet.
 * - Study-time figures are the US Foreign Service Institute's published categories, attributed.
 */

export type StarterPhrase = {
  /** The phrase in the language's own script. */
  text: string;
  /** Romanization (pinyin, rōmaji, Revised Romanization, Arabic transliteration) or a sounding-out
   *  respelling for Latin-script languages. */
  say?: string;
  meaning: string;
  /** One line of usage the dictionary won't tell you. */
  note?: string;
};

export type LearnPage = {
  /** ISO 639-1 — a key of TAUGHT_LANGUAGES. */
  code: string;
  /** URL segment after `learn-`. */
  slug: string;
  name: string;
  /** Endonym, shown as the kicker. */
  endonym: string;
  /** `dir` for phrases written right-to-left. */
  rtl?: boolean;
  /** ≤ 70 chars. */
  title: string;
  /** ≤ 165 chars. */
  description: string;
  h1: string;
  intro: string;
  why: { title: string; body: string }[];
  /** What the tutor concentrates on for THIS language. */
  how: { title: string; body: string }[];
  /** Why this tutor is the default for the language. */
  tutorNote: string;
  phrasesIntro: string;
  phrases: StarterPhrase[];
  faq: { q: string; a: string }[];
  /** Existing pages of the site worth reading next (root-relative, validated at build). */
  related?: { href: string; label: string }[];
};

export const LEARN_PAGES: readonly LearnPage[] = [
  {
    code: 'es',
    slug: 'spanish',
    name: 'Spanish',
    endonym: 'Español',
    title: 'Learn Spanish with an AI Tutor You Can Talk To | Bliss',
    description:
      'Learn Spanish by speaking it with Sofia, a Mexican AI tutor who explains in your language and corrects you as you go. Starter phrases, tips and FAQ.',
    h1: 'Learn Spanish by talking, not by memorizing lists',
    intro:
      'Spanish rewards speaking early more than almost any other language: it is written the way it sounds, and thousands of its words look like English ones. What slows most learners down is not vocabulary — it is never getting enough time to actually say things out loud. That is the part Bliss is built for.',
    why: [
      {
        title: 'Useful in more than 20 countries',
        body: 'Spanish is the official language of over twenty countries, from Mexico and Spain to Argentina, Colombia and Peru, and it is widely spoken across the United States. One language opens a whole continent of travel, work and friendships.',
      },
      {
        title: 'You can read it aloud on day one',
        body: 'Spanish spelling is close to phonetic: five vowel sounds, and letters that almost always sound the same way. Once you know the rules you can pronounce a word you have never seen — a huge head start compared with English or French.',
      },
      {
        title: 'You already know more than you think',
        body: 'Words like "hospital", "animal", "información" or "posible" are near-identical to English. The real work is grammar in motion: verb endings, gender, and the handful of distinctions English does not make.',
      },
    ],
    how: [
      {
        title: 'Mexican Spanish, as people actually speak it',
        body: 'Sofia is from Mexico, so you learn the Spanish of daily life — "¿qué onda?", "¡qué padre!", ordering tacos — not just textbook dialogues. Ask her about Spain and she will tell you what changes.',
      },
      {
        title: 'Ser vs estar, tú vs usted, in context',
        body: 'Instead of a grammar chapter, Sofia corrects the exact sentence you just said and explains the rule in one line, in your own language. The two verbs for "to be" stop being theory once you hear the fix on your own mistake.',
      },
      {
        title: 'Sounding-out tips for hard words',
        body: 'When a word trips you up — the rolled "rr", the soft "d" — Sofia respells it so you can hear how it should sound, then lets you try again.',
      },
    ],
    tutorNote:
      'Sofia is Bliss’s native Spanish tutor: warm, direct and funny, from Mexico. She is the default when you pick Spanish, but any of the eight Bliss tutors can teach it.',
    phrasesIntro: 'Ten phrases that get real use in your first week — the respelling shows roughly how to say each one.',
    phrases: [
      { text: '¿Qué onda?', say: 'keh OHN-dah', meaning: 'What’s up?', note: 'Very Mexican and very casual — with friends, not your boss.' },
      { text: 'Mucho gusto.', say: 'MOO-choh GOOS-toh', meaning: 'Nice to meet you.' },
      { text: '¿Cuánto cuesta?', say: 'KWAHN-toh KWES-tah', meaning: 'How much is it?' },
      { text: 'Quisiera un café, por favor.', say: 'kee-SYEH-rah oon kah-FEH por fah-VOR', meaning: 'I’d like a coffee, please.', note: '"Quisiera" is softer than "quiero" (I want).' },
      { text: '¿Me trae la cuenta, por favor?', say: 'meh TRAH-eh lah KWEN-tah', meaning: 'Could you bring the check, please?' },
      { text: 'No entendí, ¿me lo repite?', say: 'noh en-ten-DEE, meh loh reh-PEE-teh', meaning: 'I didn’t understand — could you repeat it?' },
      { text: '¿Dónde está el baño?', say: 'DOHN-deh es-TAH el BAH-nyoh', meaning: 'Where is the bathroom?' },
      { text: 'Estoy aprendiendo español.', say: 'es-TOY ah-pren-DYEN-doh es-pah-NYOHL', meaning: 'I’m learning Spanish.', note: 'People slow down and help as soon as they hear it.' },
      { text: '¡Qué padre!', say: 'keh PAH-dreh', meaning: 'How cool!', note: 'Mexico only — literally "how father!".' },
      { text: 'Nos vemos.', say: 'nohs VEH-mohs', meaning: 'See you.' },
    ],
    faq: [
      {
        q: 'Does Bliss teach Mexican Spanish or Spain Spanish?',
        a: 'Sofia teaches the Spanish spoken in Mexico, which is close to what most of Latin America and the United States use. The grammar is the same everywhere; if you are heading to Spain, ask her about vosotros and the vocabulary that changes.',
      },
      {
        q: 'How long does it take to learn Spanish?',
        a: 'The US Foreign Service Institute puts Spanish in its easiest group for English speakers, at roughly 24 to 30 weeks of full-time study to reach professional working proficiency. Holding a simple conversation comes far earlier — the key is how much you speak, not how many words you have seen.',
      },
      {
        q: 'Can I learn Spanish if I am a complete beginner?',
        a: 'Yes. Tell Sofia you are starting from zero: she explains everything in your language and gives you one short Spanish phrase at a time to say back.',
      },
      {
        q: 'What is the difference between Bliss and the Sofia app?',
        a: 'The Sofia app is one tutor for one language. Bliss includes Sofia plus seven other tutors and nine other languages in a single app, so you can add French or Italian later without starting over somewhere else.',
      },
    ],
    related: [
      { href: '/sofia/', label: 'Sofia, the single-tutor Spanish app' },
      { href: '/sofia/blog/', label: 'Spanish guides and tips' },
      { href: '/sofia/tools/ser-vs-estar/', label: 'Ser vs estar checker' },
    ],
  },
  {
    code: 'fr',
    slug: 'french',
    name: 'French',
    endonym: 'Français',
    title: 'Learn French with an AI Tutor from Paris | Bliss',
    description:
      'Speak real, casual French with Amélie, a Parisian AI tutor who explains in your language. Learn the French people actually say, with starter phrases and FAQ.',
    h1: 'Learn the French people actually speak',
    intro:
      'The French you read and the French you hear are two different things. Letters go silent, words run together, and Parisians drop half of what the textbook taught you. Learning French well means training your ear and your mouth on the spoken version — which is exactly what a conversation tutor is for.',
    why: [
      {
        title: 'Spoken on five continents',
        body: 'French is an official language in close to thirty countries — France, Belgium, Switzerland, Canada, and much of West and Central Africa — and a working language of the UN, the EU and the Olympic movement.',
      },
      {
        title: 'English has already done half the work',
        body: 'A large share of English vocabulary came from French after 1066: "government", "restaurant", "justice", "menu". Reading French gets comfortable quickly. Hearing and speaking it is the real challenge.',
      },
      {
        title: 'The spoken gap is the whole game',
        body: 'Liaisons, silent endings and everyday shortcuts ("chais pas" for "je ne sais pas", "on" instead of "nous") are why learners who read well still freeze in a café. Only practice out loud closes that gap.',
      },
    ],
    how: [
      {
        title: 'Casual Parisian French, not a phrasebook',
        body: 'Amélie is from Paris and speaks the way people there do. She teaches you the polite version and the one you will actually hear, and tells you when each fits.',
      },
      {
        title: 'Tu or vous, sorted in the moment',
        body: 'Choosing between "tu" and "vous" worries every learner. Amélie flags it on your own sentences — to a waiter, to a friend, to a colleague — so the rule becomes a reflex.',
      },
      {
        title: 'Pronunciation you can hear',
        body: 'Nasal vowels, the French "r", the "u" English does not have: when a word gives you trouble, Amélie sounds it out for you and has you say it again.',
      },
    ],
    tutorNote:
      'Amélie is Bliss’s native French tutor: lively, teasing and elegant, from Paris. She is the default when you pick French, and any of the other seven tutors can step in.',
    phrasesIntro: 'Ten phrases for real situations. The respelling is an English approximation — Amélie will fix the rest.',
    phrases: [
      { text: 'Je voudrais un café, s’il vous plaît.', say: 'zhuh voo-DREH uhn kah-FAY, seel voo PLEH', meaning: 'I’d like a coffee, please.', note: 'In a Paris café, "un café" is an espresso.' },
      { text: 'L’addition, s’il vous plaît.', say: 'lah-dee-SYOHN', meaning: 'The check, please.' },
      { text: 'C’est combien ?', say: 'seh kohm-BYAN', meaning: 'How much is it?' },
      { text: 'Vous pouvez répéter plus lentement ?', say: 'voo poo-VAY ray-pay-TAY plu lahnt-MAHN', meaning: 'Could you repeat that more slowly?' },
      { text: 'Enchanté(e).', say: 'ahn-shahn-TAY', meaning: 'Nice to meet you.', note: 'Add the "e" in writing if you are a woman — it sounds the same.' },
      { text: 'Ça marche.', say: 'sah MARSH', meaning: 'Sounds good / Works for me.' },
      { text: 'Pas de souci.', say: 'pahd soo-SEE', meaning: 'No problem.' },
      { text: 'Chais pas.', say: 'SHEH pah', meaning: 'Dunno.', note: 'Spoken form of "je ne sais pas" — you will hear it constantly, never write it.' },
      { text: 'On y va ?', say: 'ohn ee VAH', meaning: 'Shall we go?' },
      { text: 'Excusez-moi, où est le métro ?', say: 'ex-kew-ZAY mwah, oo eh luh may-TROH', meaning: 'Excuse me, where is the metro?' },
    ],
    faq: [
      {
        q: 'Is French hard for English speakers?',
        a: 'Reading is easier than people expect thanks to shared vocabulary. Listening and pronunciation are harder, because so many letters are silent. The US Foreign Service Institute places French in its easiest group, at roughly 24 to 30 weeks of full-time study for professional proficiency.',
      },
      {
        q: 'Will I learn formal or informal French?',
        a: 'Both, and when to use each. Amélie speaks casual Parisian French by default and switches to the polite register whenever the situation calls for it — ordering, emails, meeting someone older.',
      },
      {
        q: 'Can I practise French and Spanish at the same time?',
        a: 'Yes. Bliss teaches ten languages in one app and you can switch tutor or language whenever you want. Many learners keep one main language and use a second tutor for lighter practice.',
      },
      {
        q: 'What is the difference between Bliss and the Amélie app?',
        a: 'The Amélie app is Amélie teaching French, nothing else. Bliss includes Amélie and seven other tutors across ten languages in one app.',
      },
    ],
    related: [
      { href: '/amelie/', label: 'Amélie, the single-tutor French app' },
      { href: '/amelie/blog/', label: 'French guides and tips' },
      { href: '/amelie/tools/french-gender/', label: 'French noun gender helper' },
    ],
  },
  {
    code: 'en',
    slug: 'english',
    name: 'English',
    endonym: 'English',
    title: 'Learn English by Speaking with an AI Tutor | Bliss',
    description:
      'Practise spoken English with Emily, an American AI tutor who explains in your own language. Phrasal verbs, natural reductions, starter phrases and FAQ.',
    h1: 'Learn to speak English the way it’s really spoken',
    intro:
      'Most English learners already know a lot of English. They studied it at school, they read it online, they understand films with subtitles. What they lack is confidence speaking — and practice with the fast, contracted, idiom-heavy English people use in real conversations. Bliss gives you a patient partner for exactly that.',
    why: [
      {
        title: 'The language of work and the internet',
        body: 'English is the most widely studied language in the world and the default for international business, science, aviation and a large part of the web. For many careers it is not a bonus but a requirement.',
      },
      {
        title: 'Spelling will not help you speak',
        body: 'English spelling is famously unreliable — "though", "through", "tough" — so reading a lot does not automatically make you sound natural. You have to hear and say the words.',
      },
      {
        title: 'Real English is full of shortcuts',
        body: '"Gonna", "wanna", "lemme", dropped words, and phrasal verbs like "figure out" or "put off" are everywhere in speech and almost absent from textbooks. They are what makes native speakers hard to follow.',
      },
    ],
    how: [
      {
        title: 'American English from California',
        body: 'Emily speaks natural American English. She teaches you the clear version first, then the relaxed one you will hear in films, meetings and on the street.',
      },
      {
        title: 'Explained in your own language',
        body: 'If you are a beginner, Emily explains in the language you already speak and gives you the English phrase to say. As you improve, she uses more and more English.',
      },
      {
        title: 'Phrasal verbs and tone, on your sentences',
        body: 'Emily fixes the sentence you just said — the wrong preposition, the too-formal word, the phrasal verb you avoided — and tells you why in one line.',
      },
    ],
    tutorNote:
      'Emily is Bliss’s native English tutor: sunny, encouraging and direct, from California. She is the default when you pick English, and every other Bliss tutor can teach it too.',
    phrasesIntro: 'Ten everyday phrases that textbooks underrate, with the situation each one fits.',
    phrases: [
      { text: 'Sorry, I didn’t catch that.', meaning: 'I didn’t hear or understand you.', note: 'Softer and more natural than "Repeat, please."' },
      { text: 'Could you say that again, a bit slower?', meaning: 'Please repeat more slowly.' },
      { text: 'How’s it going?', meaning: 'How are you?', note: 'The answer is usually just "Good, you?" — not your life story.' },
      { text: 'Can I get a coffee to go?', meaning: 'I’d like a takeaway coffee.', note: 'In the US, "Can I get…" is the normal way to order.' },
      { text: 'I’m just looking, thanks.', meaning: 'I don’t need help right now (in a shop).' },
      { text: 'Sounds good.', meaning: 'OK, that works for me.' },
      { text: 'No worries.', meaning: 'It’s fine / you’re welcome.' },
      { text: 'Let me think about it.', meaning: 'I need time before deciding.', note: 'Also a polite way to say no.' },
      { text: 'I’m running late.', meaning: 'I’m going to be late.' },
      { text: 'What do you do?', meaning: 'What is your job?', note: 'It does not mean "What are you doing right now?"' },
    ],
    faq: [
      {
        q: 'Is Bliss good for improving spoken English if I already understand a lot?',
        a: 'Yes — that is the most common case. If you understand English but hesitate when speaking, a tutor you can talk to every day is the most direct way to build fluency. Tell Emily your level and she will skip what you already know.',
      },
      {
        q: 'Does Emily teach American or British English?',
        a: 'Emily speaks American English. If you need British spelling or vocabulary for an exam or a move to the UK, ask her and she will point out the differences.',
      },
      {
        q: 'Can Emily explain things in my native language?',
        a: 'Yes. Bliss tutors explain in the language you already speak and hand you the English to say, so beginners are never lost. You can ask for English-only whenever you are ready.',
      },
      {
        q: 'What is the difference between Bliss and the Emily app?',
        a: 'The Emily app is dedicated to English with Emily. Bliss includes her plus seven other tutors and nine more languages in one app.',
      },
    ],
    related: [{ href: '/emily/', label: 'Emily, the single-tutor English app' }],
  },
  {
    code: 'zh',
    slug: 'mandarin',
    name: 'Mandarin Chinese',
    endonym: '中文',
    title: 'Learn Mandarin Chinese with an AI Tutor, Pinyin Included | Bliss',
    description:
      'Learn to speak Mandarin with Meilin, a native AI tutor from Shanghai. Every phrase comes with pinyin and tone tips, explained in your language.',
    h1: 'Learn Mandarin by speaking it, tones and all',
    intro:
      'Mandarin looks impossible from the outside — thousands of characters, four tones — and surprisingly friendly from the inside: no verb conjugations, no plurals, no gendered nouns. The fastest way in is through your ears and mouth, with pinyin as a bridge, and characters coming later at your own pace.',
    why: [
      {
        title: 'More native speakers than any other language',
        body: 'Mandarin is the first language of more people than any other in the world, and the official language of mainland China and Taiwan, and one of the official languages of Singapore.',
      },
      {
        title: 'Grammar is simpler than you fear',
        body: 'Verbs never change form: "I go", "she goes" and "they went" all use 去 (qù). Time is shown with words like "yesterday" or the particle 了 (le), not with endings. Word order does most of the work.',
      },
      {
        title: 'Tones are the real challenge',
        body: 'The same syllable can mean different things depending on pitch — mā (mother) and mǎ (horse). Tones cannot be learned from reading; you have to hear them and have your own corrected.',
      },
    ],
    how: [
      {
        title: 'Pinyin with tone marks on every line',
        body: 'Every Mandarin phrase Meilin gives you comes with its pinyin, tone marks included, so you can say it before you can read the characters.',
      },
      {
        title: 'Tone tips on the words you actually use',
        body: 'When your tone slips, Meilin tells you which one and how to fix it — on the phrase you just said, not in an abstract drill.',
      },
      {
        title: 'Explained in your language',
        body: 'Beginners hear the explanation in the language they already speak, with one short Mandarin phrase at a time to repeat. No wall of characters on day one.',
      },
    ],
    tutorNote:
      'Meilin is Bliss’s native Mandarin tutor: patient, precise and gentle, from Shanghai. She is the default when you pick Mandarin; the other seven tutors can teach it as well.',
    phrasesIntro: 'Ten phrases for your first week, with pinyin. The tone marks matter — say them out loud.',
    phrases: [
      { text: '你好', say: 'nǐ hǎo', meaning: 'Hello', note: 'Two third tones in a row: the first one rises, so it sounds like "ní hǎo".' },
      { text: '谢谢', say: 'xièxie', meaning: 'Thank you' },
      { text: '多少钱？', say: 'duōshao qián?', meaning: 'How much is it?' },
      { text: '我要这个', say: 'wǒ yào zhège', meaning: 'I want this one', note: 'Point and say it — it works in any shop or market.' },
      { text: '太贵了', say: 'tài guì le', meaning: 'That’s too expensive' },
      { text: '买单', say: 'mǎidān', meaning: 'The check, please' },
      { text: '我听不懂', say: 'wǒ tīng bu dǒng', meaning: 'I don’t understand (what I hear)' },
      { text: '请再说一遍', say: 'qǐng zài shuō yí biàn', meaning: 'Please say it again' },
      { text: '没关系', say: 'méi guānxi', meaning: 'It’s fine / No problem' },
      { text: '我在学中文', say: 'wǒ zài xué Zhōngwén', meaning: 'I’m learning Chinese' },
    ],
    faq: [
      {
        q: 'Do I need to learn Chinese characters to start speaking?',
        a: 'No. Meilin gives every phrase in pinyin with tone marks, so you can start speaking right away. The characters are shown alongside, and you can pick them up gradually.',
      },
      {
        q: 'How long does it take to learn Mandarin?',
        a: 'The US Foreign Service Institute puts Mandarin in its hardest group for English speakers, at about 88 weeks of full-time study for professional proficiency. Basic spoken exchanges come much sooner, especially with daily speaking practice.',
      },
      {
        q: 'Does Bliss teach simplified or traditional characters?',
        a: 'Meilin is from Shanghai and writes simplified characters, the standard in mainland China and Singapore.',
      },
      {
        q: 'What is the difference between Bliss and the Meilin app?',
        a: 'The Meilin app is Meilin teaching Mandarin only. Bliss includes her plus seven other tutors and nine other languages in one app.',
      },
    ],
    related: [
      { href: '/meilin/', label: 'Meilin, the single-tutor Mandarin app' },
      { href: '/meilin/how-to-say/', label: 'Mandarin for real situations' },
    ],
  },
  {
    code: 'it',
    slug: 'italian',
    name: 'Italian',
    endonym: 'Italiano',
    title: 'Learn Italian with an AI Tutor, by Speaking | Bliss',
    description:
      'Learn Italian through real conversation with a patient AI tutor who explains in your language. Double consonants, Lei vs tu, starter phrases and FAQ.',
    h1: 'Learn Italian through conversation',
    intro:
      'Italian is one of the most rewarding languages to start: it sounds the way it is written, it shares roots with English, Spanish and French, and it comes with a culture people fall in love with — food, art, cinema, football. The catch is speaking it with the rhythm and the double consonants that make it sound Italian.',
    why: [
      {
        title: 'The language of food, art and design',
        body: 'Menus, music terms, opera, fashion and architecture are full of Italian. Speaking it turns a trip to Rome, Florence or Naples from sightseeing into actual conversations.',
      },
      {
        title: 'A gateway to the other Romance languages',
        body: 'If you know Spanish or French, Italian comes quickly; if you start with Italian, those languages become easier later. Much of the grammar and vocabulary is shared.',
      },
      {
        title: 'Easy to pronounce, tricky to sound natural',
        body: 'Italian spelling is regular, but doubled consonants change meaning — "pala" (shovel) vs "palla" (ball), "sete" (thirst) vs "sette" (seven). Getting them right is what makes you understood.',
      },
    ],
    how: [
      {
        title: 'Double consonants, corrected when they matter',
        body: 'When a missing double consonant changes your meaning, your tutor points it out on the word you said and has you try it again.',
      },
      {
        title: 'Lei or tu for every situation',
        body: 'Italian has a formal "you" (Lei) used with strangers, shopkeepers and older people. Your tutor shows you when to use it as it comes up in the conversation.',
      },
      {
        title: 'Explained in your own language',
        body: 'Total beginners get explanations in the language they already speak and one Italian phrase at a time. As you improve, the conversation shifts into Italian.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for Italian: a calm, methodical and patient bilingual tutor who is good at breaking a new language into steps. Prefer another face? Any of the eight tutors can teach Italian.',
    phrasesIntro: 'Ten phrases that cover a first trip to Italy. The respelling marks the stressed syllable in capitals.',
    phrases: [
      { text: 'Un caffè, per favore.', say: 'oon kaf-FEH, pehr fah-VOH-reh', meaning: 'A coffee, please.', note: 'You will get an espresso. Cappuccino is traditionally a morning drink.' },
      { text: 'Il conto, per favore.', say: 'eel KOHN-toh', meaning: 'The check, please.' },
      { text: 'Quanto costa?', say: 'KWAHN-toh KOH-stah', meaning: 'How much is it?' },
      { text: 'Scusi!', say: 'SKOO-zee', meaning: 'Excuse me! (formal)', note: 'Use "scusa" with friends.' },
      { text: 'Non ho capito.', say: 'nohn oh kah-PEE-toh', meaning: 'I didn’t understand.', note: 'The "h" in "ho" is silent.' },
      { text: 'Può ripetere, per favore?', say: 'pwoh ree-PEH-teh-reh', meaning: 'Could you repeat, please?' },
      { text: 'Piacere.', say: 'pyah-CHEH-reh', meaning: 'Nice to meet you.' },
      { text: 'Dov’è la stazione?', say: 'doh-VEH lah stah-TSYOH-neh', meaning: 'Where is the station?' },
      { text: 'Va bene.', say: 'vah BEH-neh', meaning: 'OK / That’s fine.' },
      { text: 'Buon appetito!', say: 'bwohn ahp-peh-TEE-toh', meaning: 'Enjoy your meal!', note: 'Hear the double "p" and double "t".' },
    ],
    faq: [
      {
        q: 'Is Italian easy to learn?',
        a: 'For English speakers it is one of the more approachable languages: the US Foreign Service Institute puts it in its easiest group, at roughly 24 to 30 weeks of full-time study for professional proficiency. Pronunciation is regular; verb forms take practice.',
      },
      {
        q: 'Who teaches Italian in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor, but you can pick any of the eight tutors for Italian and switch whenever you like.',
      },
      {
        q: 'Should I learn Italian or Spanish first?',
        a: 'Pick the one you will use. They are close enough that the second will come faster — and in Bliss you can learn both in the same app without a second subscription.',
      },
      {
        q: 'Can I learn Italian from zero with Bliss?',
        a: 'Yes. Tell your tutor you are a beginner: explanations come in your language and you practise one short Italian phrase at a time.',
      },
    ],
  },
  {
    code: 'de',
    slug: 'german',
    name: 'German',
    endonym: 'Deutsch',
    title: 'Learn German by Speaking with an AI Tutor | Bliss',
    description:
      'Speak German with a patient AI tutor who explains in your language. Der/die/das, word order and du vs Sie in real conversation. Starter phrases and FAQ.',
    h1: 'Learn German without drowning in grammar tables',
    intro:
      'German has a reputation for grammar tables — three genders, four cases, verbs flying to the end of the sentence. The tables are real, but nobody learns them by staring at them. You learn them by saying hundreds of short sentences and having the wrong article fixed each time, until the right one simply sounds better.',
    why: [
      {
        title: 'The largest native language in the EU',
        body: 'German is the most widely spoken first language in the European Union and the main language of Germany, Austria and much of Switzerland — a core language for work and study in central Europe.',
      },
      {
        title: 'Closer to English than it looks',
        body: 'English and German are sister languages: "Haus", "Wasser", "Hand", "trinken". Much of the basic vocabulary is shared, which makes early progress faster than the grammar suggests.',
      },
      {
        title: 'Logical once you hear the patterns',
        body: 'German pronunciation is regular, and word order follows firm rules: the verb comes second in a statement and goes to the end after words like "weil" (because). Rules that firm are exactly what practice turns into habit.',
      },
    ],
    how: [
      {
        title: 'Der, die, das — fixed on your sentences',
        body: 'Instead of memorizing gender lists, you get the correct article on the noun you just used, with the short reason. Over time the right article starts to sound right.',
      },
      {
        title: 'Word order in motion',
        body: 'Your tutor corrects where the verb goes in the sentence you actually said — main clause, question or "weil" clause — which is where most learners slip.',
      },
      {
        title: 'Du or Sie, depending on who you’re talking to',
        body: 'German draws a firm line between the informal "du" and the formal "Sie". Your tutor tells you which one fits as the conversation changes.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for German: calm, methodical and patient — a good match for a language with clear rules. Any of the other seven tutors can teach German too.',
    phrasesIntro: 'Ten phrases for everyday situations. "ch" after a, o, u is the throaty sound in "Bach".',
    phrases: [
      { text: 'Ich hätte gern einen Kaffee.', say: 'ikh HEH-teh gehrn EYE-nen KAH-feh', meaning: 'I’d like a coffee.', note: 'More polite than "Ich will" (I want).' },
      { text: 'Zahlen, bitte.', say: 'TSAH-len, BIT-teh', meaning: 'The check, please.', note: 'Literally "paying, please".' },
      { text: 'Wie viel kostet das?', say: 'vee feel KOS-tet dahs', meaning: 'How much is it?' },
      { text: 'Entschuldigung!', say: 'ent-SHOOL-dee-goong', meaning: 'Excuse me! / Sorry!' },
      { text: 'Ich verstehe nicht.', say: 'ikh fehr-SHTAY-eh nikht', meaning: 'I don’t understand.' },
      { text: 'Können Sie das bitte wiederholen?', say: 'KUR-nen zee dahs BIT-teh vee-der-HOH-len', meaning: 'Could you repeat that, please?' },
      { text: 'Wo ist der Bahnhof?', say: 'voh ist dehr BAHN-hohf', meaning: 'Where is the train station?' },
      { text: 'Alles klar.', say: 'AH-les klahr', meaning: 'All good / Got it.' },
      { text: 'Ich lerne Deutsch.', say: 'ikh LEHR-neh doytsh', meaning: 'I’m learning German.' },
      { text: 'Tschüss!', say: 'chüss', meaning: 'Bye!', note: 'Casual. "Auf Wiedersehen" is the formal goodbye.' },
    ],
    faq: [
      {
        q: 'How hard is German for English speakers?',
        a: 'The US Foreign Service Institute puts German one step above Spanish and French, at about 36 weeks of full-time study for professional proficiency — mostly because of cases and genders. Pronunciation and shared vocabulary work in your favour.',
      },
      {
        q: 'Do I have to memorize all the der/die/das rules first?',
        a: 'No. A few patterns help (most nouns ending in -ung are feminine, for example), but most learners absorb genders by using nouns in sentences and being corrected. That is how Bliss teaches them.',
      },
      {
        q: 'Who teaches German in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor. You can choose any of the eight tutors instead, and switch at any time.',
      },
      {
        q: 'Will I learn formal or casual German?',
        a: 'Both. Your tutor uses "Sie" for situations like shops and offices and "du" for friends, and tells you when to switch.',
      },
    ],
  },
  {
    code: 'pt',
    slug: 'portuguese',
    name: 'Portuguese',
    endonym: 'Português',
    title: 'Learn Portuguese with an AI Tutor You Talk To | Bliss',
    description:
      'Learn Portuguese by speaking with a patient AI tutor who explains in your language. Brazil vs Portugal, nasal sounds, starter phrases and FAQ.',
    h1: 'Learn Portuguese for Brazil, Portugal and beyond',
    intro:
      'Portuguese is spoken on four continents, and it sounds quite different depending on where you land: open and musical in Brazil, compact and fast in Portugal. The grammar is the same, the vocabulary mostly shared — but you will want to practise the version you are going to use, out loud.',
    why: [
      {
        title: 'A language of more than 200 million people',
        body: 'Portuguese is the official language of Brazil, Portugal, Angola, Mozambique and several other countries — one of the most spoken languages in the world and the most spoken in the Southern Hemisphere.',
      },
      {
        title: 'Brazil alone is a reason',
        body: 'Brazil is the largest country in South America, with a huge music, football and business culture. Very few Brazilians you meet day to day will switch to English for you.',
      },
      {
        title: 'Nasal sounds make the difference',
        body: 'Sounds like "ão" in "não" and "pão" have no English equivalent. Spanish speakers can read Portuguese easily but are often not understood until they practise these sounds.',
      },
    ],
    how: [
      {
        title: 'Say which Portuguese you need',
        body: 'Tell your tutor whether you are preparing for Brazil or for Portugal, and ask about the differences whenever they come up — "você" or "tu", "banheiro" or "casa de banho".',
      },
      {
        title: 'Nasal vowels and word endings, corrected',
        body: 'When a nasal sound or a swallowed ending changes how you are understood, your tutor catches it on your sentence and has you say it again.',
      },
      {
        title: 'Explained in your own language',
        body: 'Beginners get explanations in their own language and short Portuguese phrases to repeat. Spanish speakers get the false friends pointed out as they happen.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for Portuguese: a calm, patient bilingual tutor. Any of the eight Bliss tutors can teach Portuguese if you would rather pick another face.',
    phrasesIntro: 'Ten phrases, with notes where Brazil and Portugal differ. The respelling follows Brazilian pronunciation.',
    phrases: [
      { text: 'Tudo bem?', say: 'TOO-doo bayn', meaning: 'How’s it going?', note: 'The standard greeting in Brazil; the answer is also "Tudo bem!".' },
      { text: 'Obrigado. / Obrigada.', say: 'oh-bree-GAH-doo / oh-bree-GAH-dah', meaning: 'Thank you.', note: 'It follows the speaker: men say "obrigado", women say "obrigada".' },
      { text: 'Quanto custa?', say: 'KWAHN-too KOOS-tah', meaning: 'How much is it?' },
      { text: 'A conta, por favor.', say: 'ah KOHN-tah, poor fah-VOHR', meaning: 'The check, please.' },
      { text: 'Não entendi.', say: 'nown en-ten-JEE', meaning: 'I didn’t understand.', note: 'In Brazil "di" often sounds like "jee".' },
      { text: 'Pode repetir, por favor?', say: 'POH-jee heh-peh-CHEER', meaning: 'Could you repeat, please?' },
      { text: 'Com licença.', say: 'kohn lee-SEN-sah', meaning: 'Excuse me (to get past).' },
      { text: 'Onde fica o banheiro?', say: 'OHN-jee FEE-kah oo bah-NYAY-roo', meaning: 'Where is the bathroom?', note: 'In Portugal: "a casa de banho".' },
      { text: 'Estou aprendendo português.', say: 'es-TOH ah-pren-DEN-doo por-too-GAYS', meaning: 'I’m learning Portuguese.', note: 'In Portugal: "Estou a aprender português."' },
      { text: 'Beleza!', say: 'beh-LEH-zah', meaning: 'Cool! / Deal!', note: 'Very Brazilian and very casual.' },
    ],
    faq: [
      {
        q: 'Does Bliss teach Brazilian or European Portuguese?',
        a: 'Tell your tutor which one you need. The grammar is shared; your tutor can point out where pronunciation, vocabulary and forms of address differ between Brazil and Portugal.',
      },
      {
        q: 'Is Portuguese easy if I already speak Spanish?',
        a: 'Reading, yes — the two languages share most of their vocabulary. Speaking and listening take more work because of nasal vowels and reduced endings, and some words look alike but mean different things.',
      },
      {
        q: 'How long does it take to learn Portuguese?',
        a: 'The US Foreign Service Institute places Portuguese in its easiest group for English speakers, at roughly 24 to 30 weeks of full-time study for professional proficiency.',
      },
      {
        q: 'Who teaches Portuguese in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor, and you can switch to any of the other seven tutors whenever you want.',
      },
    ],
  },
  {
    code: 'ja',
    slug: 'japanese',
    name: 'Japanese',
    endonym: '日本語',
    title: 'Learn Japanese with an AI Tutor, Rōmaji Included | Bliss',
    description:
      'Start speaking Japanese with a patient AI tutor. Every Japanese line comes with rōmaji, explained in your language. Politeness levels, phrases and FAQ.',
    h1: 'Start speaking Japanese before you can read it',
    intro:
      'Japanese has three writing systems, which is why many learners stall before they ever say a sentence. The good news is that spoken Japanese is far more approachable than the writing: only five vowel sounds, few consonant clusters, and very regular verbs. Bliss lets you start with speech and build the scripts alongside.',
    why: [
      {
        title: 'Pronunciation is simpler than it seems',
        body: 'Japanese has five vowels, pronounced the same way every time, and syllables that are mostly a consonant plus a vowel. English speakers can be understood surprisingly early.',
      },
      {
        title: 'Anime, games, travel — and work',
        body: 'For many learners the motivation is culture: films, anime, manga, games, and trips to Japan. Understanding even a little changes the experience completely.',
      },
      {
        title: 'Politeness is built into the grammar',
        body: 'Verbs change depending on who you are talking to: "taberu" with a friend, "tabemasu" with a stranger. Choosing the right level is part of speaking Japanese well.',
      },
    ],
    how: [
      {
        title: 'Rōmaji after every Japanese line',
        body: 'Every Japanese phrase your tutor gives you is followed by its rōmaji, so you can say it before you can read hiragana, katakana or kanji.',
      },
      {
        title: 'Polite Japanese first',
        body: 'You start with the polite -masu / desu forms that are safe with anyone. Your tutor shows you the casual forms when you ask or when the situation calls for them.',
      },
      {
        title: 'Explained in your own language',
        body: 'Japanese word order is the reverse of English in many ways — the verb comes last. Your tutor explains it in the language you already speak, one short sentence at a time.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for Japanese: calm, methodical and patient — useful for a language that rewards small, steady steps. Every other Bliss tutor can also teach Japanese.',
    phrasesIntro: 'Ten polite phrases that work anywhere in Japan, with rōmaji.',
    phrases: [
      { text: 'すみません', say: 'sumimasen', meaning: 'Excuse me / Sorry', note: 'The most useful word in Japan: to call a waiter, to get past, to apologize.' },
      { text: 'ありがとうございます', say: 'arigatō gozaimasu', meaning: 'Thank you (polite)' },
      { text: 'これをください', say: 'kore o kudasai', meaning: 'This one, please' },
      { text: 'いくらですか？', say: 'ikura desu ka?', meaning: 'How much is it?' },
      { text: 'お会計お願いします', say: 'okaikei onegaishimasu', meaning: 'The check, please' },
      { text: 'もう一度お願いします', say: 'mō ichido onegaishimasu', meaning: 'One more time, please' },
      { text: 'わかりません', say: 'wakarimasen', meaning: 'I don’t understand' },
      { text: '大丈夫です', say: 'daijōbu desu', meaning: 'I’m fine / No thank you', note: 'Often used to politely decline an offer.' },
      { text: 'いただきます', say: 'itadakimasu', meaning: 'Said before eating', note: 'There is no real English equivalent; it expresses thanks for the meal.' },
      { text: '日本語を勉強しています', say: 'nihongo o benkyō shite imasu', meaning: 'I’m studying Japanese' },
    ],
    faq: [
      {
        q: 'Do I need to learn hiragana before speaking Japanese?',
        a: 'Not to start speaking. Every Japanese line in Bliss comes with rōmaji, so you can practise out loud from the first session. Learning hiragana early is still a good idea if you plan to read.',
      },
      {
        q: 'How long does it take to learn Japanese?',
        a: 'The US Foreign Service Institute places Japanese in its hardest group for English speakers, at about 88 weeks of full-time study for professional proficiency — mostly because of the writing system. Simple spoken exchanges come much earlier.',
      },
      {
        q: 'Will I learn polite or casual Japanese?',
        a: 'Polite first, because it is safe with anyone. Ask your tutor for the casual version any time and it will explain when each one fits.',
      },
      {
        q: 'Who teaches Japanese in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor. You can pick any of the eight tutors instead and switch whenever you like.',
      },
    ],
  },
  {
    code: 'ko',
    slug: 'korean',
    name: 'Korean',
    endonym: '한국어',
    title: 'Learn Korean with an AI Tutor, Romanization Included | Bliss',
    description:
      'Learn to speak Korean with a patient AI tutor. Hangul with romanization on every line, polite speech levels, starter phrases and FAQ — in your language.',
    h1: 'Learn Korean, from your first 안녕하세요',
    intro:
      'Plenty of people come to Korean through K-dramas and K-pop and discover they already recognize dozens of words. The alphabet, Hangul, can be learned in days. What takes practice is speaking: the sound changes between syllables, and the speech levels that tell you how polite to be.',
    why: [
      {
        title: 'An alphabet designed to be learned',
        body: 'Hangul was created in the 15th century specifically so that ordinary people could learn to read quickly. Its letters are built from a small set of shapes, and many learners can sound out words within a week.',
      },
      {
        title: 'Culture that keeps you motivated',
        body: 'K-dramas, music, food and beauty have made Korean one of the fastest-growing languages to study. Understanding lyrics and dialogue without subtitles is a strong, lasting reason to keep going.',
      },
      {
        title: 'Speech levels matter',
        body: 'Korean verbs change with politeness. The polite "-요" ending is the safe default with people you don’t know well; getting it right matters as much as the vocabulary.',
      },
    ],
    how: [
      {
        title: 'Romanization after every Korean line',
        body: 'Every Korean phrase your tutor gives you is followed by its romanization, so you can speak right away and learn Hangul at your own pace.',
      },
      {
        title: 'Polite speech by default',
        body: 'You start with the polite "-요" style that works with almost anyone. Your tutor explains when casual speech is fine and when formal speech is expected.',
      },
      {
        title: 'Sound changes, explained when you trip',
        body: 'Korean syllables change sound when they meet — "hangugeo" is written 한국어 but the consonants blend. Your tutor explains it on the words you use, in your language.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for Korean: a calm, methodical bilingual tutor. Any of the eight Bliss tutors can teach Korean if you would rather pick another.',
    phrasesIntro: 'Ten phrases in polite Korean, with romanization.',
    phrases: [
      { text: '안녕하세요', say: 'annyeonghaseyo', meaning: 'Hello' },
      { text: '감사합니다', say: 'gamsahamnida', meaning: 'Thank you (formal)' },
      { text: '이거 주세요', say: 'igeo juseyo', meaning: 'This one, please', note: 'Works for ordering anything you can point at.' },
      { text: '얼마예요?', say: 'eolmayeyo?', meaning: 'How much is it?' },
      { text: '다시 말해 주세요', say: 'dasi malhae juseyo', meaning: 'Please say it again' },
      { text: '잘 모르겠어요', say: 'jal moreugesseoyo', meaning: 'I’m not sure / I don’t really know' },
      { text: '화장실이 어디예요?', say: 'hwajangsiri eodiyeyo?', meaning: 'Where is the restroom?' },
      { text: '괜찮아요', say: 'gwaenchanayo', meaning: 'It’s okay / I’m fine' },
      { text: '잘 먹겠습니다', say: 'jal meokgetseumnida', meaning: 'Said before eating', note: 'Literally "I will eat well" — a thank-you to whoever cooked or paid.' },
      { text: '한국어를 배우고 있어요', say: 'hangugeoreul baeugo isseoyo', meaning: 'I’m learning Korean' },
    ],
    faq: [
      {
        q: 'How long does it take to learn to read Korean?',
        a: 'Hangul itself can be learned in a few days to a couple of weeks. Understanding and speaking the language takes much longer: the US Foreign Service Institute puts Korean in its hardest group for English speakers, at about 88 weeks of full-time study.',
      },
      {
        q: 'Can I start speaking Korean before I can read Hangul?',
        a: 'Yes. Every Korean line in Bliss comes with romanization, so you can practise out loud immediately and pick up Hangul alongside.',
      },
      {
        q: 'Will I learn polite or casual Korean?',
        a: 'Polite "-요" Korean first, since it is appropriate with almost everyone. Your tutor can show you casual and formal forms whenever you ask.',
      },
      {
        q: 'Who teaches Korean in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor. You can choose any of the eight tutors and switch at any time.',
      },
    ],
  },
  {
    code: 'ar',
    slug: 'arabic',
    name: 'Arabic',
    endonym: 'العربية',
    rtl: true,
    title: 'Learn Arabic (Modern Standard) with an AI Tutor | Bliss',
    description:
      'Learn to speak Modern Standard Arabic with a patient AI tutor. Transliteration on every line, explanations in your language, starter phrases and FAQ.',
    h1: 'Learn Arabic, one spoken sentence at a time',
    intro:
      'Arabic is often described as one language with many voices: Modern Standard Arabic for news, books and formal speech, and regional dialects for everyday life. Bliss teaches simple Modern Standard Arabic — the version understood across the Arab world — with transliteration on every line, so the script never stops you from speaking.',
    why: [
      {
        title: 'Official in more than 20 countries',
        body: 'Arabic is an official language across North Africa and the Middle East and one of the six official languages of the United Nations. Modern Standard Arabic is the shared written and formal standard across all of them.',
      },
      {
        title: 'The key to a vast culture',
        body: 'Poetry, history, religion, music and cuisine: Arabic opens a culture that spans centuries and continents. Even basic Arabic changes how people receive you when you travel.',
      },
      {
        title: 'Sounds English does not have',
        body: 'Letters like ع (ʿayn), ح (ḥā’) and ق (qāf) are made deeper in the throat than any English sound. They are learnable — but only by listening and being corrected.',
      },
    ],
    how: [
      {
        title: 'Transliteration after every Arabic line',
        body: 'Every Arabic phrase your tutor gives you comes with its transliteration, so you can speak before you can read the right-to-left script.',
      },
      {
        title: 'Modern Standard Arabic, kept simple',
        body: 'Bliss teaches Modern Standard Arabic (fuṣḥā) in a simple, conversational form — not a regional dialect. It is the version you will see in writing and hear in the news across the Arab world.',
      },
      {
        title: 'Explained in your own language',
        body: 'Arabic builds words from three-letter roots — k-t-b gives kitāb (book) and kātib (writer). Your tutor explains patterns like this in the language you already speak, as they come up.',
      },
    ],
    tutorNote:
      'Bliss recommends Alex for Arabic: calm, methodical and patient, a good match for a new script and new sounds. Any of the other seven Bliss tutors can teach Arabic too.',
    phrasesIntro: 'Ten phrases in Modern Standard Arabic, with transliteration. Arabic reads right to left.',
    phrases: [
      { text: 'مرحبا', say: 'marḥaban', meaning: 'Hello' },
      { text: 'السلام عليكم', say: 'as-salāmu ʿalaykum', meaning: 'Peace be upon you (greeting)', note: 'The reply is "wa ʿalaykumu s-salām".' },
      { text: 'شكرا', say: 'shukran', meaning: 'Thank you' },
      { text: 'من فضلك', say: 'min faḍlik', meaning: 'Please', note: 'Said to a man; to a woman, "min faḍliki".' },
      { text: 'كم الثمن؟', say: 'kam ath-thaman?', meaning: 'How much is it?' },
      { text: 'لا أفهم', say: 'lā afham', meaning: 'I don’t understand' },
      { text: 'أين الحمام؟', say: 'ayna al-ḥammām?', meaning: 'Where is the bathroom?' },
      { text: 'أنا أتعلم العربية', say: 'anā ataʿallam al-ʿarabiyya', meaning: 'I’m learning Arabic' },
      { text: 'مع السلامة', say: 'maʿa s-salāma', meaning: 'Goodbye', note: 'Literally "with safety".' },
      { text: 'إن شاء الله', say: 'in shāʾa llāh', meaning: 'God willing', note: 'Used constantly about anything in the future, by people of every faith.' },
    ],
    faq: [
      {
        q: 'Does Bliss teach Modern Standard Arabic or a dialect?',
        a: 'Modern Standard Arabic, in a simple conversational form. It is understood across the Arab world and is the base for reading and formal speech. Dialects such as Egyptian or Levantine are not the focus.',
      },
      {
        q: 'Do I need to read the Arabic script to start?',
        a: 'No. Every Arabic line comes with a transliteration, so you can practise speaking from day one and learn the alphabet in parallel.',
      },
      {
        q: 'How long does it take to learn Arabic?',
        a: 'The US Foreign Service Institute places Arabic in its hardest group for English speakers, at about 88 weeks of full-time study for professional proficiency. Greetings and everyday phrases come much sooner.',
      },
      {
        q: 'Who teaches Arabic in Bliss?',
        a: 'Bliss recommends Alex, a patient bilingual tutor. You can choose any of the eight tutors for Arabic and switch whenever you want.',
      },
    ],
  },
];

export const LEARN_PAGE_BY_CODE: Readonly<Record<string, LearnPage>> = Object.fromEntries(
  LEARN_PAGES.map((p) => [p.code, p]),
);

export const learnPath = (p: LearnPage) => `/bliss/learn-${p.slug}/`;
