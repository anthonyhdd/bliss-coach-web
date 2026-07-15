// Per-app showcase content for the app landing pages.
// Lines, replies, chips, stats and quotes are pulled from each app's real
// App Store screenshots (July 2026) so the site shows the actual product.
// Astra is not on the store yet — its content mirrors the app's feature set.

export interface Showcase {
  /** benefit-first headline (can contain a serif-italic segment via `em`) */
  heroTitle: string;
  heroEm?: string;
  heroSub: string;
  /** the coach's on-screen line inside the phone mockup */
  screenLine: string;
  /** tappable replies under the line (language apps) */
  replies?: string[];
  /** tool chips under the line (utility apps) */
  chips?: string[];
  /** headline stat (omit numbers we can't substantiate) */
  stat?: { value: string; label: string };
  /** animated art type for each feature card, aligned with app.features */
  featureArts: [string, string, string];
  laurels?: string[];
  /** full-bleed tinted strip line */
  craftLine: string;
  quotes?: { name: string; text: string }[];
  /** which /home/ portrait fills the phone screen + focal point */
  screenImg: string;
  screenPos: string;
  /** 'sky' renders an app-style night sky + natal wheel instead of the portrait */
  screenVariant?: 'sky';
  /** the user's line in 'chat' art cards */
  chatUser?: string;
  /** floating hero props — a paper card + a sticker, mobilefirst-style */
  paper: { title: string; line: string };
  sticker: string;
}

export const SHOWCASE: Record<string, Showcase> = {
  sofia: {
    heroTitle: 'Speak Spanish fluently.',
    heroEm: '10 minutes a day.',
    heroSub:
      'Real conversations with Sofia, your AI tutor from Mexico. She listens, corrects you instantly, and cheers you on. No drills, no flashcards — just talking.',
    screenLine: '¿Vamos al cine después?',
    replies: ['¡Buena idea, vamos!', 'Hoy no puedo, lo siento'],
    laurels: ['Apps We Love', 'Best AI Teacher'],
    craftLine: 'Stop translating in your head. Start talking.',
    quotes: [
      { name: 'Jane', text: 'I improved my pronunciation in just a few days.' },
      { name: 'Emily', text: 'Sofia finally made me comfortable speaking Spanish.' },
    ],
    screenImg: 'sofia.png',
    screenPos: '50% 20%',
    featureArts: ['wave', 'replies', 'track'],
    paper: { title: 'CINE ★ ADMIT ONE', line: 'Sala 3 · Sábado, 21:30' },
    sticker: 'NO DRILLS',
  },
  amelie: {
    heroTitle: 'Learn French with a Parisian,',
    heroEm: 'not a textbook.',
    heroSub:
      'Amélie speaks with you — real, casual French, corrected as you go. Follow your track from first words to full conversations, and finally fit in anywhere.',
    screenLine: 'Ça vous dit un ciné ce soir ?',
    replies: ['Oui, on va voir quoi ?', 'Non, désolé je suis prise'],
    laurels: ['Apps We Love', 'Best AI Avatar'],
    craftLine: 'Finally fit in anywhere.',
    quotes: [
      { name: 'Foundations track', text: 'Basic vocabulary → sentence structure → real conversations. Four lessons at a time, at your pace.' },
      { name: 'Daily lesson', text: '“Prêt à démarrer la leçon du jour ?” — a fresh conversation every day, built on what you learned.' },
    ],
    screenImg: 'amelie.webp',
    screenPos: '50% 18%',
    chatUser: 'Je suis allé… allée au parc ?',
    featureArts: ['replies', 'track', 'fix'],
    paper: { title: 'LEÇON DU JOUR ✓', line: 'Basic vocabulary → real conversations' },
    sticker: 'OH LÀ LÀ',
  },
  charm: {
    heroTitle: 'Never stare at a blank text',
    heroEm: 'again.',
    heroSub:
      'Paste the convo. Charm reads the subtext and writes the reply — openers, comebacks, date prep. Works with Hinge, Tinder, Bumble, whatever you’re on.',
    screenLine: 'Be more gentle and calm. Don’t stress her out…',
    chips: ['Profile Analyzer', 'Message decoder', 'Reply generator'],
    laurels: ['Apps We Love', 'Best AI Avatar'],
    craftLine: 'Honest coaching, not generic pickup lines.',
    quotes: [
      { name: 'Jake', text: 'I used to stare at my screen for 20 min before sending anything. Now I just open and get replies.' },
      { name: 'Marcus', text: '3 months of situationship, zero progress. Charm helped me say the right thing. We’re exclusive now.' },
      { name: 'Tom', text: 'Updated my bio with Charm, tripled my matches in a week. Should’ve done this months ago.' },
      { name: 'Rayan', text: '6 months of nothing on Hinge. Tried Charm, got 3 dates in two weeks. Lesson learned.' },
    ],
    screenImg: 'coach.png',
    screenPos: '50% 16%',
    chatUser: 'What do I text back?',
    featureArts: ['chat', 'scan', 'chips'],
    paper: { title: "IT'S A MATCH 💘", line: "Now don't blow it." },
    sticker: 'STOP GUESSING',
  },
  alex: {
    heroTitle: 'Get hired.',
    heroEm: 'Walk in prepared.',
    heroSub:
      'Paste the job link — Alex builds your prep around the real role. Realistic mock interviews, STAR stories that land, salary talk without the sweat.',
    screenLine: 'Let’s talk about your experience.',
    chips: ['Mock Interview', 'STAR prep', 'Tough questions'],
    laurels: ['Apps We Love', 'Best AI Avatar'],
    craftLine: 'Scripts for every scenario, practice in real time.',
    quotes: [
      { name: 'Prep for this job', text: 'Paste the posting link. Alex tailors every question to that company and role.' },
      { name: 'Interview today?', text: 'Quick prep before you go — the questions you’ll actually get, with feedback on your answers.' },
    ],
    screenImg: 'alex.png',
    screenPos: '50% 12%',
    chatUser: 'I have a final round on Friday.',
    featureArts: ['chat', 'track', 'scan'],
    paper: { title: 'OFFER LETTER', line: 'Senior role — signed ✓' },
    sticker: 'STAR METHOD',
  },
  mila: {
    heroTitle: 'Lose the weight.',
    heroEm: 'Skip the diet.',
    heroSub:
      'Just talk to Mila. Tell her your day, snap your meal, get instant answers — calories, macros, and what to eat next. No logging, no counting, no guilt.',
    screenLine: 'How about some edamame with a sprinkle of salt?',
    chips: ['Meal idea', 'Beat cravings', 'Smart snack'],
    laurels: ['Snap a meal — instant macros', 'No logging'],
    craftLine: 'One pizza isn’t a setback. It’s Tuesday.',
    quotes: [
      { name: 'Snap a meal', text: 'Photo in, answers out: 120 kcal, 11g protein — and what to pair it with tonight.' },
      { name: 'She listens', text: 'Tell her your day — the cravings, the busy week, the restaurant menu. Real advice for how you actually eat.' },
    ],
    screenImg: 'mila.jpg',
    screenPos: '50% 40%',
    featureArts: ['wave', 'chips', 'track'],
    paper: { title: 'EDAMAME 🫛', line: '120 kcal · 11g protein · zero guilt' },
    sticker: 'NO LOGGING',
  },
  astra: {
    heroTitle: 'Your chart,',
    heroEm: 'in plain language.',
    heroSub:
      'Astra reads your natal chart and talks you through it — your sign, your day, and what the sky actually says about you. Voice or text, anytime.',
    screenLine: 'Sun in Leo, moon in Pisces — no wonder today felt big.',
    chips: ['Natal chart', 'Daily horoscope', 'Ask anything'],
    craftLine: 'Not recycled one-liners. Your sky, computed daily.',
    quotes: [
      { name: 'Your chart, decoded', text: 'Sun, moon, rising — and what they mean together, in words that make sense.' },
      { name: 'Daily guidance', text: 'Horoscopes computed from your own chart and the sky right now — never recycled.' },
    ],
    screenImg: 'astra.jpg',
    screenPos: '50% 30%',
    screenVariant: 'sky',
    chatUser: 'Why does today feel heavy?',
    featureArts: ['glyphs', 'crest', 'chat'],
    paper: { title: 'THE MOON', line: 'New moon in Pisces — big feelings ahead.' },
    sticker: 'MERCURY-PROOF',
  },
};
