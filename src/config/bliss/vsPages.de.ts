/**
 * `/de/bliss/vs/<competitor>/` — deutsche Version der „Bliss vs X“-Seiten.
 *
 * Gleiche Regeln wie `vsPages.ts` (dessen Kopfkommentar lesen): Pro-Bliss-Positionierung ohne
 * falsche Aussage über den Wettbewerber, keine Preise, keine Bewertungen, keine Nutzerzahlen,
 * Wettbewerber-Fakten nur laut deren Store-Eintrag und „zum Zeitpunkt des Schreibens“. Gleiche
 * Einträge, gleiche Reihenfolge, gleiche `slug` / `name` / `win`-Flags wie die englische Version.
 */
import type { VsPage } from './vsPages';

/** Zeilen, die auf jeder Seite gleich sind — nur die Seite des Wettbewerbers ändert sich. */
const BLISS_LANGS = '10: Spanisch, Französisch, Englisch, Mandarin, Italienisch, Deutsch, Portugiesisch, Japanisch, Koreanisch, Arabisch';
const BLISS_PLATFORM = 'iPhone (App Store)';
const BLISS_FREE = 'Kostenloser Download mit einem ersten Tutor; Bliss Pro = alle Tutoren, unbegrenztes Üben';

export const VS_PAGES_DE: readonly VsPage[] = [
  {
    slug: 'praktika',
    name: 'Praktika',
    title: 'Bliss vs Praktika: Welcher KI-Avatar-Sprachtutor passt zu dir?',
    description:
      'Bliss vs Praktika: zwei KI-Tutor-Apps mit Avatar im Vergleich – Tutoren, Sprachen, Korrekturen. Und warum Anfänger zu Bliss greifen.',
    h1: 'Bliss vs Praktika: zwei KI-Tutoren mit Avatar, zwei Ideen vom Unterricht',
    intro:
      'Auf den ersten Blick sehen Praktika und Bliss ähnlich aus: Du sprichst laut mit einem KI-Tutor, der ein Gesicht hat, und er antwortet dir. Der Unterschied liegt in allem rund um das Gespräch – wie viel der Tutor erklärt, in welcher Sprache und wie du aussuchst, wer dich unterrichtet.',
    verdict:
      'Für die meisten Lernenden ist Bliss die bessere Wahl: Dein Tutor erklärt dir auf Deutsch, korrigiert genau den Satz, den du gerade gesagt hast, lässt ihn dich noch einmal sagen – und du wählst (und wechselst) zwischen acht Tutoren in einer einzigen App. Praktika passt vielleicht noch zu dir, wenn du ausschließlich freie Unterhaltung auf Englisch willst, Russisch brauchst oder Android nutzt.',
    chooseBliss: [
      'Du bist Anfänger und brauchst die Erklärung auf Deutsch, nicht nur in der Sprache, die du lernst',
      'Du willst, dass der Tutor genau deinen letzten Satz korrigiert und dich ihn wiederholen lässt',
      'Du willst deinen Tutor selbst wählen (und wechseln), ohne die App zu wechseln',
      'Du lernst Japanisch, Koreanisch, Mandarin oder Arabisch und willst unter jeder Zeile die Umschrift',
    ],
    chooseThem: [
      'Du willst nur freie Unterhaltung auf Englisch',
      'Du brauchst Russisch oder Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor deiner Wahl', them: 'Sprachgespräch mit KI-Tutoren als Avatar' },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Etwa 12, darunter Englisch, Spanisch, Französisch, Deutsch, Japanisch, Koreanisch, Chinesisch, Arabisch und Russisch (laut App-Store-Eintrag)' },
      { label: 'Erklärungen', bliss: 'Auf Deutsch, dazu der Satz zum Nachsprechen in deiner Lernsprache', them: 'Meist in der Zielsprache, an dein Niveau angepasst', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Feedback zu Grammatik und Wortschatz während und nach dem Gespräch', win: true },
      { label: 'Tutor-Wahl', bliss: 'Acht Tutoren, jeder für jede Sprache, jederzeit wechselbar', them: 'Zugewiesener Avatar, weitere verfügbar', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone und Android' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Kostenloser Download, Abo für den vollen Zugang' },
    ],
    theirStrengths: [
      { title: 'Viel Erfahrung mit Englisch', body: 'Praktika hat sein Produkt rund um Englischlernende gebaut, und das merkt man: viele Szenarien, Akzente und Themen für alle, die schon etwas Englisch sprechen und flüssiger werden wollen.' },
      { title: 'Android und iPhone', body: 'Wenn du zwischen Geräten wechselst oder Android nutzt, ist Praktika dort verfügbar, wo Bliss es noch nicht ist.' },
      { title: 'Gespräch zuerst – für Fortgeschrittene', body: 'Wenn du schon eine Unterhaltung führen kannst, fühlt sich ein freies Gespräch mit weniger Unterbrechungen vielleicht natürlicher an als geführte Korrektur.' },
    ],
    blissDifference: [
      { title: 'Gemacht für deine ersten hundert Sätze', body: 'Die Bliss-Tutoren erklären dir auf Deutsch und geben dir genau den Satz, den du sagen sollst. Echte Anfänger stehen nie ratlos vor einem Satz, den sie nicht verstehen.' },
      { title: 'Eine App, acht Tutoren', body: 'Sofia, Amélie, Emily, Meilin und vier weitere – jede und jeder mit eigener Persönlichkeit. Alle unterrichten alle Sprachen: Du behältst deinen Lieblingstutor, wenn du eine zweite Sprache dazunimmst.' },
      { title: 'Korrektur, die du laut aussprichst', body: 'Wenn dir ein Fehler passiert, gibt dir dein Tutor den korrigierten Satz und bittet dich, ihn noch einmal zu sagen. Die Verbesserung passiert in deinem Mund, nicht nur auf dem Bildschirm.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Praktika-Alternative?', a: 'Ja. Bei beiden sprichst du laut mit einem KI-Tutor. Bliss richtet sich stärker an Anfänger – Erklärungen auf Deutsch und korrigierte Sätze zum Nachsprechen –, Praktika eher an freie Unterhaltung, vor allem auf Englisch.' },
      { q: 'Was ist besser für absolute Anfänger?', a: 'Bliss ist genau dafür gemacht: Dein Tutor erklärt dir auf Deutsch und gibt dir den Satz zum Nachsprechen. Apps, die ganz aufs freie Gespräch setzen, funktionieren besser, sobald du schon einfache Sätze bilden kannst.' },
      { q: 'Kann ich mit Bliss Englisch lernen wie mit Praktika?', a: 'Ja. Englisch ist eine der zehn Sprachen von Bliss, unterrichtet von Emily als Muttersprachlerin – oder von jedem anderen Tutor, wenn dir das lieber ist. Und wenn nötig, erklärt sie dir alles auf Deutsch.' },
      { q: 'Kann ich Bliss kostenlos testen?', a: 'Ja. Bliss ist ein kostenloser Download mit einem ersten Tutor. Abos und Preise siehst du in der App, bevor du irgendetwas bezahlst.' },
    ],
    related: [{ href: '/sofia/blog/praktika-alternative/', label: 'Praktika-Alternative zum Spanischlernen (Sofia, auf Englisch)' }],
  },
  {
    slug: 'speak',
    name: 'Speak',
    title: 'Bliss vs Speak: KI-Tutor-Apps zum Sprechenlernen im Vergleich',
    description:
      'Bliss vs Speak: zwei Apps fürs Sprechenlernen im Vergleich – Sprachen, Lektionen, Tutoren, Korrekturen. Und eine ehrliche Antwort, wer was nehmen sollte.',
    h1: 'Bliss vs Speak: strukturierte Sprechübungen oder ein Tutor zum Reden?',
    intro:
      'Speak und Bliss sind sich in der Grundidee einig: Eine Sprache lernst du, indem du sie laut sprichst – viel. Uneinig sind sie bei der Form: Speak ist um einen strukturierten Kurs aus Sprechlektionen gebaut, Bliss um ein Gespräch mit einem Tutor, den du selbst wählst.',
    verdict:
      'Bliss gewinnt für die meisten, die wirklich ein Gespräch führen wollen: ein Tutor, der auf das reagiert, was du gesagt hast, dir auf Deutsch erklärt und dich live korrigiert – in zehn Sprachen, darunter Portugiesisch und Arabisch, die Speak nicht aufführt. Speak passt vielleicht noch zu dir, wenn du gezielt einen Drill-Kurs Lektion für Lektion willst oder Android brauchst.',
    chooseBliss: [
      'Du willst ein Gespräch mit einer Figur, keine Abfolge von Drills',
      'Du lernst Portugiesisch oder Arabisch',
      'Du willst bei jedem Schritt die Erklärung auf Deutsch',
      'Dir gefällt die Idee, deinen Tutor zu wählen – und zu wechseln',
    ],
    chooseThem: [
      'Du willst lieber einen festen Drill-Kurs als ein Gespräch',
      'Du brauchst Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Gespräch mit einem KI-Tutor', them: 'Strukturierte Sprechlektionen plus KI-Gesprächsübungen' },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Spanisch, Französisch, Koreanisch, Japanisch, Italienisch, Mandarin und Englisch (zum Zeitpunkt des Schreibens)', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Lektionserklärungen in deiner Sprache', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Feedback per Spracherkennung zu Lektionssätzen und in KI-Chats', win: true },
      { label: 'Tutoren', bliss: 'Acht Figuren mit eigener Stimme und Persönlichkeit', them: 'Kursgesteuert; der KI-Tutor ist eine Funktion, keine Figur, die du wählst', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Kostenlose Lektionen, Abo für den vollen Zugang' },
    ],
    theirStrengths: [
      { title: 'Echte Kursstruktur', body: 'Die Lektionen von Speak folgen einer durchdachten Reihenfolge. Wenn du gern genau weißt, was als Nächstes kommt, ist diese Struktur ein echter Vorteil.' },
      { title: 'Viele Wiederholungen', body: 'Viele kurze Sätze hintereinander zu sagen, macht Antworten automatisch. Das kann Speak gut.' },
      { title: 'Mehr Plattformen', body: 'Android und Web machen es leichter, auf dem Gerät zu üben, das gerade zur Hand ist.' },
    ],
    blissDifference: [
      { title: 'Ein Tutor, kein Lehrplan', body: 'In Bliss sprichst du mit Sofia, Amélie, Emily, Meilin oder einem anderen Tutor, der auf das reagiert, was du gesagt hast – nicht auf das, was eine Lektion für dich vorgesehen hat.' },
      { title: 'Zehn Sprachen, dieselben Tutoren', body: 'Portugiesisch und Arabisch sind dabei, und du behältst deinen Tutor, wenn du eine Sprache dazunimmst.' },
      { title: 'Schriften lesbar gemacht', body: 'Bei Japanisch, Koreanisch, Mandarin und Arabisch steht unter jeder Zeile die Umschrift – so kannst du es sagen, bevor du es lesen kannst.' },
    ],
    faq: [
      { q: 'Ist Bliss wie Speak?', a: 'Bei beiden steht das Sprechen im Mittelpunkt. Speak ist als strukturierter Kurs aus Sprechlektionen aufgebaut; Bliss ist ein Gespräch mit einem KI-Tutor deiner Wahl, der dir auf Deutsch erklärt und dich unterwegs korrigiert.' },
      { q: 'Welche App hat mehr Sprachen, Bliss oder Speak?', a: 'Zum Zeitpunkt des Schreibens unterrichtet Bliss zehn Sprachen, darunter Portugiesisch und Arabisch, die Speak nicht aufführt. Speak deckt sieben ab.' },
      { q: 'Taugt Bliss für Koreanisch oder Japanisch?', a: 'Ja. Beide gehören zu den zehn Sprachen von Bliss, und unter jeder koreanischen oder japanischen Zeile steht die Umschrift, damit Anfänger sie sofort sagen können. Und wer Englisch lernt, spricht mit Emily, einer Muttersprachlerin.' },
      { q: 'Kann ich Bliss auf Android nutzen?', a: 'Noch nicht. Bliss gibt es für das iPhone im App Store.' },
    ],
  },
  {
    slug: 'learna',
    name: 'Learna',
    title: 'Bliss vs Learna: KI-Sprechtutor-Apps im ehrlichen Vergleich',
    description:
      'Bliss vs Learna: Learna ist ein KI-Englischtutor, Bliss unterrichtet zehn Sprachen mit acht Tutoren. Format, Korrekturen und für wen sich welche App lohnt.',
    h1: 'Bliss vs Learna: ein Englisch-Coach oder ein Tutor für zehn Sprachen?',
    intro:
      'Learna ist ein KI-Englischtutor: Du chattest mit einer virtuellen Figur und arbeitest dich durch Übungen zu Grammatik, Wortschatz, Lesen und Aussprache. Bliss ist ein Tutor, mit dem du in zehn Sprachen sprichst. Wenn du Englisch lernst, kommen beide in Frage. Wenn nicht, nur eine.',
    verdict:
      'Bliss ist für fast alle die bessere Wahl: zehn Sprachen statt nur Englisch, acht Tutoren zur Auswahl und jede Einheit wird gesprochen, statt durch Übungsbildschirme zu tippen. Englisch lernst du bei Bliss mit Emily, einer muttersprachlichen Tutorin. Learna passt vielleicht noch zu dir, wenn Englisch dein einziges Ziel ist und du neben dem Chat Grammatik- und Rechtschreibdrills willst.',
    chooseBliss: [
      'Du lernst Spanisch, Französisch, Italienisch, Mandarin oder eine andere Sprache als Englisch',
      'Du willst deine Zeit mit Sprechen verbringen, nicht mit Übungsbildschirmen',
      'Du willst zu jeder Korrektur eine Erklärung auf Deutsch',
      'Du willst deinen Tutor unter acht Figuren selbst wählen',
    ],
    chooseThem: [
      'Englisch ist dein einziges Ziel und du willst Grammatik- und Rechtschreibdrills',
      'Du brauchst Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Chat mit einer KI-Figur plus Übungen zu Grammatik, Lesen, Wortschatz und Aussprache', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Englisch', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Auf Englisch ausgerichtet, mit Übungen nach Fertigkeit', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Echtzeit-Feedback beim Üben', win: true },
      { label: 'Tutoren', bliss: 'Acht Figuren, frei wählbar', them: 'Eine virtuelle Chat-Figur', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Kostenloser Download mit In-App-Käufen' },
    ],
    theirStrengths: [
      { title: 'Alles rund ums Englische an einem Ort', body: 'Module zu Grammatik, Rechtschreibung, Lesen und Wortschatz stehen neben dem Gespräch – gut für alle, die ein breites Englisch-Training wollen.' },
      { title: 'Text und Sprache', body: 'Wenn du nicht immer laut sprechen kannst, hältst du mit getippten Übungen trotzdem dran.' },
    ],
    blissDifference: [
      { title: 'Zehn Sprachen', body: 'Spanisch, Französisch, Englisch, Mandarin, Italienisch, Deutsch, Portugiesisch, Japanisch, Koreanisch und Arabisch – mit denselben Tutoren.' },
      { title: 'Sprechen ist die Lektion', body: 'Bliss zerlegt das Lernen nicht in Übungsbildschirme. Du sprichst, dein Tutor korrigiert deinen Satz, du sagst ihn noch einmal.' },
      { title: 'Eine Muttersprachlerin für Englisch', body: 'Emily, die kalifornische Tutorin von Bliss, unterrichtet Englisch – und erklärt dir auf Deutsch, wenn du es brauchst.' },
    ],
    faq: [
      { q: 'Unterrichtet Learna auch andere Sprachen als Englisch?', a: 'Zum Zeitpunkt des Schreibens präsentiert sich Learna als Englischtutor. Bliss unterrichtet zehn Sprachen, Englisch inklusive.' },
      { q: 'Was ist besser zum Sprechenüben?', a: 'Bliss ist ausschließlich ums Sprechen gebaut: Jede Einheit ist ein Gespräch mit deinem Tutor. Learna mischt Gespräche mit Übungen zu Grammatik, Lesen und Wortschatz.' },
      { q: 'Hilft mir Bliss beim Englischlernen?', a: 'Ja. Emily ist die muttersprachliche Englisch-Tutorin, und sie erklärt dir auf Deutsch.' },
      { q: 'Ist Bliss kostenlos?', a: 'Bliss ist ein kostenloser Download mit einem ersten Tutor. Abos und Preise siehst du in der App, bevor du bezahlst.' },
    ],
  },
  {
    slug: 'duolingo',
    name: 'Duolingo',
    title: 'Bliss vs Duolingo: Mit einem Tutor sprechen statt Gamification',
    description:
      'Bliss vs Duolingo: Gamifizierter Kurs mit Streaks oder ein KI-Tutor, mit dem du laut sprichst? Was beide am besten können – die Duolingo-Alternative fürs Sprechen.',
    h1: 'Bliss vs Duolingo: Streaks und Lektionen oder ein Tutor zum Reden?',
    intro:
      'Mit Duolingo fangen die meisten an: kurze gamifizierte Lektionen, Streaks, Ligen und eine riesige Sprachliste. Die Schwachstelle ist – nach Aussage vieler Lernender – das Sprechen: Man kann monatelang Lektionen machen und im echten Gespräch trotzdem erstarren. Genau für diese Lücke ist Bliss gebaut.',
    verdict:
      'Wenn du sprechen willst, ist Bliss die bessere App: Ab der ersten Einheit sagst du ganze Sätze laut, und dein Tutor korrigiert genau den Satz, den du gebildet hast, und erklärt dir auf Deutsch, warum. Für Englisch etwa sprichst du mit Emily, einer Muttersprachlerin. Duolingo ist super für die tägliche Vokabelroutine – aber dort lernst du nicht, ein Gespräch zu führen. Behalte es gern für deine Streak; zum Sprechen nimm Bliss.',
    chooseBliss: [
      'Du hast Lektionen gemacht, erstarrst aber trotzdem, wenn du sprechen musst',
      'Du willst Korrekturen für Sätze, die du selbst gebildet hast, nicht für Multiple-Choice-Antworten',
      'Du willst einen Tutor mit Stimme und Persönlichkeit statt eines Spiels',
      'Deine Sprache ist eine der zehn von Bliss',
    ],
    chooseThem: [
      'Du willst vor allem Streaks und Ligen, um eine tägliche Gewohnheit aufzubauen',
      'Deine Sprache gehört nicht zu den zehn von Bliss',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Gamifizierte Mini-Lektionen; KI-Gesprächsfunktionen in manchen Bezahl-Abos', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Dutzende Kurse' },
      { label: 'Sprechpraxis', bliss: 'Die ganze Einheit ist Sprechen', them: 'Sprechübungen in den Lektionen; freies Gespräch nur in manchen Abos und Sprachen', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Richtig/Falsch-Feedback zu Übungen', win: true },
      { label: 'Motivation', bliss: 'Ein Tutor, der dich kennt', them: 'Streaks, XP, Ligen' },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Kostenlos mit Werbung; Bezahl-Abos entfernen Werbung und bringen Extras' },
    ],
    theirStrengths: [
      { title: 'Gewohnheiten aufbauen', body: 'Kaum eine App bringt dich so zuverlässig dazu, sie jeden Tag zu öffnen. Streaks und Ligen funktionieren für viele.' },
      { title: 'Breite', body: 'Dutzende Sprachen, dazu Lese-, Hör- und Vokabeltraining in allen.' },
      { title: 'Kostenloser Grundkurs', body: 'Du kommst weit, ohne zu bezahlen.' },
    ],
    blissDifference: [
      { title: 'Sprechen von Anfang an, nicht irgendwann', body: 'Ab deiner ersten Einheit sagst du ganze Sätze laut zu einem Tutor, der dir antwortet.' },
      { title: 'Deine Fehler, korrigiert', body: 'Bliss korrigiert den Satz, den du wirklich gesagt hast – deine Wortstellung, dein Verb – und lässt dich die korrigierte Version sagen.' },
      { title: 'Erklärt wie von einem Menschen', body: 'Wenn etwas falsch ist, sagt dir dein Tutor, warum – auf Deutsch.' },
    ],
    faq: [
      { q: 'Kann Bliss Duolingo ersetzen?', a: 'Fürs Sprechen ja – genau dafür ist Bliss da. Viele behalten Duolingo für Vokabeln und Lesen und nutzen einen Sprechtutor wie Bliss für Gespräche.' },
      { q: 'Warum kann ich nach Monaten Duolingo immer noch nicht sprechen?', a: 'Die richtige Antwort zu erkennen und selbst einen Satz zu bilden, sind zwei verschiedene Fähigkeiten. Sprechen verbessert sich am schnellsten, wenn du Sätze laut bildest und korrigiert bekommst – genau das passiert in einer Tutor-Einheit.' },
      { q: 'Ist Bliss gamifiziert?', a: 'Nicht im Duolingo-Sinn. Es gibt keine Ligen; die Motivation ist ein Tutor, der mit dir spricht und sich merkt, woran du gearbeitet hast.' },
      { q: 'Welche Sprachen unterrichtet Bliss?', a: 'Spanisch, Französisch, Englisch, Mandarin, Italienisch, Deutsch, Portugiesisch, Japanisch, Koreanisch und Arabisch.' },
    ],
  },
  {
    slug: 'babbel',
    name: 'Babbel',
    title: 'Bliss vs Babbel: KI-Tutor-Gespräch vs strukturierte Lektionen',
    description:
      'Bliss vs Babbel im Vergleich: strukturierte Grammatiklektionen und Live-Kurse oder ein KI-Tutor, mit dem du laut sprichst? Für wen sich welche App eignet.',
    h1: 'Bliss vs Babbel: ein strukturierter Kurs oder ein Gespräch?',
    intro:
      'Babbel unterrichtet mit sorgfältig aufgebauten Lektionen, die Grammatik und Wortschatz Schritt für Schritt aufbauen – geschrieben für Sprecher deiner Sprache. Bliss stellt das Gespräch an den Anfang: Du sprichst mit einem Tutor, und Grammatik wird genau dann erklärt, wenn sie in etwas auftaucht, das du gesagt hast.',
    verdict:
      'Wenn du sprechen willst, bringt dich Bliss schneller dahin: Du sprichst ab dem ersten Tag, und Grammatik wird in dem Moment erklärt, in dem sie in deinem eigenen Satz auftaucht – von einem Tutor, der dich live korrigiert. Babbel passt vielleicht noch zu dir, wenn du Grammatik lieber erst am Bildschirm lernst, bevor du etwas sagst, oder bezahlte Live-Kurse mit Menschen willst.',
    chooseBliss: [
      'Du willst sofort sprechen, nicht erst nach einer Lerneinheit',
      'Du lernst Mandarin, Japanisch, Koreanisch oder Arabisch und willst unter jeder Zeile die Umschrift',
      'Du willst einen Tutor mit Persönlichkeit, den du selbst wählst',
      'Übungsbildschirme langweilen dich',
    ],
    chooseThem: [
      'Du lernst Grammatik lieber am Bildschirm, bevor du sprichst',
      'Du willst bezahlte Live-Kurse mit echten Lehrkräften',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Strukturierte Lektionen, Wiederholungen und Podcasts; optional Live-Kurse' },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Vor allem europäische Sprachen plus einige weitere (je nach deiner Ausgangssprache)', win: true },
      { label: 'Grammatik', bliss: 'Erklärt, wenn sie in deinem Satz auftaucht', them: 'Explizit unterrichtet, Lektion für Lektion', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Feedback zu Übungen und Spracherkennung bei Lektionssätzen', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Erste Lektion kostenlos; Abo für den Kurs' },
    ],
    theirStrengths: [
      { title: 'Grammatik, ordentlich gemacht', body: 'Die Lektionen von Babbel erklären die Regeln klar und der Reihe nach. Wenn du gern verstehst, bevor du sprichst, ist das wertvoll.' },
      { title: 'Menschliche Lehrkräfte verfügbar', body: 'Live-Kurse geben dir eine echte Lehrkraft, wenn du eine willst.' },
    ],
    blissDifference: [
      { title: 'Sprechen ab Tag eins', body: 'Deine erste Bliss-Einheit ist ein Gespräch. Du sagst von Anfang an echte Sätze.' },
      { title: 'Asiatische Sprachen und Arabisch', body: 'Mandarin, Japanisch, Koreanisch und Arabisch werden mit Umschrift unterrichtet, damit du sprechen kannst, bevor du die Schrift lesen kannst.' },
      { title: 'Such dir deine Lehrkraft aus', body: 'Acht Tutoren, jeder mit eigener Stimme und eigenem Stil – jederzeit wechselbar.' },
    ],
    faq: [
      { q: 'Ist Bliss besser als Babbel?', a: 'Sie erfüllen verschiedene Aufgaben. Babbel ist ein strukturierter Kurs; Bliss ist ein Tutor, mit dem du sprichst. Wenn dir genau das Sprechen fehlt, passt Bliss besser.' },
      { q: 'Kann ich Bliss und Babbel zusammen nutzen?', a: 'Ja, und das funktioniert gut: Babbel für die Struktur, Bliss, um es laut zu üben und korrigiert zu werden.' },
      { q: 'Erklärt Bliss Grammatik?', a: 'Ja, wenn sie auftaucht. Machst du einen Fehler, erklärt dir dein Tutor auf Deutsch, warum, und lässt dich den Satz noch einmal sagen.' },
    ],
    related: [{ href: '/sofia/blog/babbel-alternative/', label: 'Babbel-Alternative zum Spanischlernen (Sofia, auf Englisch)' }],
  },
  {
    slug: 'talkpal',
    name: 'TalkPal',
    title: 'Bliss vs TalkPal: Welche KI-Sprach-App für Gespräche?',
    description:
      'Bliss vs TalkPal: über 80 Sprachen per Text und Stimme oder zehn Sprachen mit acht Tutoren, mit denen du sprichst? Ein ehrlicher Vergleich beider KI-Apps.',
    h1: 'Bliss vs TalkPal: viele Sprachen oder ein Tutor mit Tiefgang?',
    intro:
      'TalkPal ist ein KI-Gesprächspartner für eine sehr lange Liste von Sprachen, per Text oder Stimme, mit Rollenspielen und Aussprache-Scores. Bliss unterrichtet zehn Sprachen, mit Fokus auf Sprechen, mit acht Tutoren, die dir auf Deutsch erklären.',
    verdict:
      'Für jede der zehn Sprachen, die Bliss unterrichtet, ist Bliss die bessere Lehrkraft: geführte Einheiten, Erklärungen auf Deutsch, korrigierte Sätze zum Nachsprechen und acht Tutoren mit echter Persönlichkeit statt eines generischen Chatbots. TalkPal passt vielleicht noch zu dir, wenn deine Sprache nicht zu den zehn von Bliss gehört.',
    chooseBliss: [
      'Du bist Anfänger und brauchst Anleitung, nicht nur einen Gesprächspartner',
      'Du willst Erklärungen auf Deutsch',
      'Du willst einen Tutor mit Gesicht, Stimme und Persönlichkeit',
      'Du lernst eine der zehn Sprachen von Bliss',
    ],
    chooseThem: [
      'Deine Sprache gehört nicht zu den zehn von Bliss',
      'Du tippst lieber, als zu sprechen',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Text- und Sprachchats, Rollenspiele, Debatten' },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Über 80 (laut TalkPal)' },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Einstellbar; meist in der Zielsprache', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Grammatikkorrekturen und Aussprache-Scores', win: true },
      { label: 'Tutoren', bliss: 'Acht Figuren zur Auswahl', them: 'KI-Figuren je nach Szenario', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Übungszeit', bliss: 'Unbegrenzt mit Bliss Pro', them: 'Siehe aktuelle Abos des Anbieters', win: true },
    ],
    theirStrengths: [
      { title: 'Riesige Sprachauswahl', body: 'Wenn du etwa Suaheli oder Finnisch lernst, deckt TalkPal das wahrscheinlich ab – Bliss nicht.' },
      { title: 'Viele Übungsmodi', body: 'Rollenspiele, Debatten, Figuren-Chats und getippte Übungen sorgen für viel Abwechslung.' },
    ],
    blissDifference: [
      { title: 'Eine Lehrkraft, nicht nur ein Partner', body: 'Bliss-Tutoren führen: Sie erklären, geben dir den Satz, korrigieren ihn und lassen dich ihn noch einmal sagen. Das zählt vor allem in den ersten Monaten.' },
      { title: 'Figuren, die du kennenlernst', body: 'Sofia, Amélie, Emily, Meilin und vier weitere behalten ihre Persönlichkeit über Einheiten und Sprachen hinweg.' },
    ],
    faq: [
      { q: 'Ist Bliss eine TalkPal-Alternative?', a: 'Ja, für die zehn Sprachen, die Bliss unterrichtet. Bliss setzt aufs Sprechen und führt dich mehr; TalkPal deckt mehr Sprachen ab und unterstützt getipptes Üben.' },
      { q: 'Was ist besser für Anfänger?', a: 'Bliss, weil dein Tutor dir auf Deutsch erklärt und dir genau den Satz gibt, den du sagen sollst.' },
      { q: 'Bewertet Bliss die Aussprache?', a: 'Bliss korrigiert dich direkt im Gespräch und lässt dich die richtige Version wiederholen, statt eine Punktzahl zu vergeben.' },
    ],
  },
  {
    slug: 'langua',
    name: 'Langua',
    title: 'Bliss vs Langua: KI-Sprachtutoren fürs echte Sprechen im Test',
    description:
      'Bliss vs Langua: ausführliches Feedback nach dem Chat und menschliche Tutoren oder acht KI-Tutoren, die dich in zehn Sprachen live korrigieren? Ein fairer Blick.',
    h1: 'Bliss vs Langua: Feedback nach dem Gespräch oder Korrektur währenddessen?',
    intro:
      'Langua (von LanguaTalk) ist bekannt für natürlich klingende KI-Gespräche und ausführliches Feedback nach dem Gespräch, mit interaktiven Transkripten und gespeichertem Wortschatz – und daneben einem Marktplatz für menschliche Tutoren. Bliss korrigiert dich, während du sprichst, und lässt dich die Verbesserung sofort sagen.',
    verdict:
      'Bliss passt für die meisten Lernenden besser: Es korrigiert dich, während du sprichst – erklärt auf Deutsch –, sodass die Verbesserung etwas wird, das du gesagt hast, und kein Bericht, den du später liest. Langua passt vielleicht noch zu dir, wenn du fortgeschritten bist und lange Analysen nach dem Chat willst oder menschliche Tutoren buchen möchtest.',
    chooseBliss: [
      'Du willst Korrekturen unterwegs, nicht einen Bericht am Ende',
      'Du brauchst Erklärungen auf Deutsch',
      'Du willst eine Tutor-Figur selbst wählen',
      'Du lernst Mandarin, Japanisch, Koreanisch oder Arabisch und willst unter jeder Zeile die Umschrift',
    ],
    chooseThem: [
      'Du bist fortgeschritten und willst lange Berichte nach dem Chat',
      'Du willst menschliche Tutoren',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'KI-Gespräche per Stimme und Text mit Transkripten; menschliche Tutoren verfügbar' },
      { label: 'Feedback', bliss: 'Live: der Satz, den du gerade gesagt hast, korrigiert und wiederholt', them: 'Ausführliche Fehlerlisten nach dem Gespräch', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Meist in der Zielsprache', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'Web und Mobil' },
      { label: 'Übungszeit', bliss: 'Unbegrenzt mit Bliss Pro', them: 'Siehe aktuelle Abos des Anbieters', win: true },
    ],
    theirStrengths: [
      { title: 'Gründliche Auswertung', body: 'Kategorisierte Fehler und interaktive Transkripte sind ideal für alle, die ihre Fehler gern im Nachhinein studieren.' },
      { title: 'Menschen, wenn du sie willst', body: 'Im selben Angebot von KI-Übung zu einem menschlichen Tutor wechseln zu können, ist ein echtes Plus.' },
    ],
    blissDifference: [
      { title: 'Korrigiert, solange es frisch ist', body: 'Bliss korrigiert dich im Moment und lässt dich die richtige Version sofort sagen – die Korrektur wird etwas, das du gesagt hast, nicht etwas, das du liest.' },
      { title: 'Anfängertauglich', body: 'Erklärungen auf Deutsch heißen: Du kannst bei null anfangen.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Langua-Alternative?', a: 'Ja. Bei beiden sprichst du mit einem KI-Tutor. Bliss korrigiert dich während des Gesprächs und erklärt auf Deutsch; Langua setzt auf ausführliches Feedback danach und bietet menschliche Tutoren.' },
      { q: 'Was passt für Mittelstufe-Lernende?', a: 'Beide können passen. Languas Analyse nach dem Chat ist stark für die Mittelstufe; Bliss ist stärker, wenn du Live-Korrektur willst oder noch am Anfang stehst.' },
      { q: 'Hat Bliss menschliche Tutoren?', a: 'Nein. Die acht Tutoren von Bliss sind KI und zu jeder Tageszeit verfügbar.' },
    ],
  },
  {
    slug: 'univerbal',
    name: 'Univerbal',
    title: 'Bliss vs Univerbal: KI-Sprachtutor-Apps im Vergleich',
    description:
      'Bliss vs Univerbal: ein kompletter KI-Kurs mit Einstufungstest oder acht KI-Tutoren für zehn Sprachen? Format, Korrekturen und für wen sich welche App eignet.',
    h1: 'Bliss vs Univerbal: ein Kurs mit KI-Partner oder ein Tutor deiner Wahl?',
    intro:
      'Univerbal verbindet KI-Gesprächspartner mit einem strukturierten Kurs und einem Einstufungstest, zu Themen von Filmen bis Politik, per Text und Audio. Bliss ist ein Tutor mit Fokus aufs Sprechen, den du unter acht wählst und der dir auf Deutsch erklärt.',
    verdict:
      'Bliss ist der schnellere Weg zum Sprechen: kein Einstufungstest, keine Module – App öffnen, Tutor wählen und reden, mit Korrekturen, die dir auf Deutsch erklärt werden. Univerbal passt vielleicht noch zu dir, wenn du einen Kurslehrplan und getippten Chat willst.',
    chooseBliss: [
      'Du willst vor allem sprechen statt gemischt Text und Audio',
      'Du willst Erklärungen auf Deutsch',
      'Du willst eine Tutor-Figur wählen und behalten',
    ],
    chooseThem: [
      'Du willst einen Einstufungstest und einen Kurslehrplan',
      'Du chattest lieber per Text',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'KI-Gesprächspartner plus strukturierter Kurs; Text und Audio', win: true },
      { label: 'Einstufung', bliss: 'Dein Tutor passt sich beim Sprechen an', them: 'Einstufungstest', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Kurserklärungen und Chat-Feedback', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Übungszeit', bliss: 'Unbegrenzt mit Bliss Pro', them: 'Siehe aktuelle Abos des Anbieters', win: true },
    ],
    theirStrengths: [
      { title: 'Kurs plus Gespräch', body: 'Ein Einstufungstest und ein Kurs geben dir einen klaren Weg, mit Gesprächen zum Üben.' },
      { title: 'Themenvielfalt', body: 'Viele Diskussionsthemen halten Gespräche für Fortgeschrittene interessant.' },
    ],
    blissDifference: [
      { title: 'Direkt zum Sprechen', body: 'Kein Einstufungstest, keine Module: Du fängst an zu reden, und dein Tutor stellt sich auf das ein, was du sagen kannst.' },
      { title: 'Acht Tutoren, zehn Sprachen', body: 'Wähl den Tutor, dessen Stil dir gefällt, und behalte ihn für alle Sprachen.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Univerbal-Alternative?', a: 'Ja. Beide nutzen KI-Gespräche zum Sprachenlernen. Univerbal ergänzt einen strukturierten Kurs; Bliss ist ein Tutor, mit dem du vor allem sprichst.' },
      { q: 'Hat Bliss einen Einstufungstest?', a: 'Nein. Dein Tutor passt sich beim Sprechen an dein Niveau an und erklärt dir auf Deutsch, wann immer du es brauchst.' },
    ],
  },
  {
    slug: 'emma',
    name: 'Emma',
    title: 'Bliss vs Emma: KI-Sprachtutor-Apps im Vergleich',
    description:
      'Bliss vs Emma: ein KI-Tutor für sechs Sprachen oder acht Tutoren für zehn? Sprechen, Korrekturen und Auswahl im Vergleich – und warum viele Bliss wählen.',
    h1: 'Bliss vs Emma: ein KI-Tutor oder der Tutor deiner Wahl?',
    intro:
      'Emma ist eine KI-Tutor-App, die mit Englisch angefangen hat und inzwischen sechs Sprachen aufführt – mit Text- und Sprachchats, Lektionen und Vokabelübungen. Bliss setzt aufs Sprechen, mit acht Tutoren und zehn Sprachen – und alle erklären dir auf Deutsch.',
    verdict:
      'Bliss ist für die meisten Lernenden die stärkere Wahl: mehr Sprachen (darunter Mandarin, Japanisch, Koreanisch und Arabisch), acht Tutoren mit eigener Persönlichkeit statt einem, und Einheiten, in denen du sprichst – jeder Fehler wird korrigiert und noch einmal gesagt. Für Englisch hast du mit Emily sogar eine muttersprachliche Tutorin. Emma passt vielleicht noch zu dir, wenn du genauso viel tippen wie sprechen willst.',
    chooseBliss: [
      'Du lernst Mandarin, Japanisch, Koreanisch oder Arabisch – Emma führt sie nicht auf',
      'Du willst deinen Tutor selbst wählen und wechseln, wann du willst',
      'Du willst, dass jede Einheit Sprechpraxis ist',
      'Du willst unter jeder Zeile einer nicht-lateinischen Schrift die Umschrift',
    ],
    chooseThem: [
      'Du tippst deinem Tutor genauso gern, wie du mit ihm sprichst',
      'Du willst einen Lernplan mit Vokabelübungen neben dem Chat',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Text- und Sprachchat mit einem KI-Tutor plus Lektionen und Übungen', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Englisch, Spanisch, Französisch, Italienisch, Portugiesisch und Deutsch (laut App-Store-Eintrag)', win: true },
      { label: 'Tutoren', bliss: 'Acht Figuren, jede für jede Sprache wählbar', them: 'Eine Tutorin, Emma', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'An dein Niveau angepasst', win: true },
      { label: 'Korrekturen', bliss: 'Korrigiert den Satz, den du gerade gesagt hast, und lässt ihn dich wiederholen', them: 'Echtzeit-Korrekturen im Chat', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Gratis-Angebot', bliss: BLISS_FREE, them: 'Kostenloser Download mit In-App-Käufen' },
    ],
    theirStrengths: [
      { title: 'Text, wenn du nicht reden kannst', body: 'Getippte Chats halten dich im Bus oder im Großraumbüro am Üben.' },
      { title: 'Ein geführter Plan', body: 'Ein persönlicher Plan mit Vokabelübungen passt zu allen, die gern etwas abhaken.' },
    ],
    blissDifference: [
      { title: 'Acht Tutoren statt einer', body: 'Sofia, Amélie, Emily, Meilin und vier weitere – jede und jeder mit eigener Stimme und eigenem Stil. Behalte den, mit dem es passt, in jeder Sprache.' },
      { title: 'Zehn Sprachen', body: 'Darunter Mandarin, Japanisch, Koreanisch und Arabisch, jeweils mit Umschrift, damit du es sagen kannst, bevor du es lesen kannst.' },
      { title: 'Sprechen ist die ganze Einheit', body: 'Du sprichst, dein Tutor korrigiert genau deinen Satz, du sagst ihn noch einmal. Diese Schleife bringt dich zum Sprechen.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Emma-Alternative?', a: 'Ja. Beide sind KI-Tutoren. Bliss setzt aufs Sprechen, unterrichtet zehn Sprachen und lässt dich unter acht Tutoren wählen; Emma ist eine einzelne Tutorin mit Text- und Sprachchat in sechs Sprachen.' },
      { q: 'Was ist besser für Japanisch oder Koreanisch?', a: 'Bliss – Emma führt beide zum Zeitpunkt des Schreibens nicht auf, und Bliss zeigt unter jeder Zeile die Umschrift.' },
      { q: 'Kann ich Bliss kostenlos testen?', a: 'Ja. Bliss ist ein kostenloser Download mit einem ersten Tutor. Abos und Preise siehst du in der App, bevor du irgendetwas bezahlst.' },
    ],
  },
  {
    slug: 'busuu',
    name: 'Busuu',
    title: 'Bliss vs Busuu: KI-Tutor-Gespräch vs Kurs mit Community',
    description:
      'Bliss vs Busuu: ein Kurs mit Community-Korrekturen oder ein KI-Tutor, der dich live beim Sprechen korrigiert? Ein ehrlicher Vergleich – und wer was nehmen sollte.',
    h1: 'Bliss vs Busuu: auf eine Korrektur warten oder sie beim Sprechen bekommen?',
    intro:
      'Busuu kombiniert einen strukturierten Kurs in rund vierzehn Sprachen mit einer Community von Muttersprachlern, die deine schriftlichen und gesprochenen Übungen korrigieren, plus KI-Gesprächsübungen in manchen Sprachen. Bliss gibt dir die Korrektur in dem Moment, in dem du etwas sagst – von einem Tutor deiner Wahl.',
    verdict:
      'Wenn du sprechen willst, ist Bliss das bessere Werkzeug: Du bekommst die Korrektur sofort, auf Deutsch erklärt, und sagst den korrigierten Satz gleich danach – ohne darauf zu warten, dass jemand Fremdes eine Aufnahme anhört. Busuu passt vielleicht noch zu dir, wenn du einen Kurs nach GER-Niveaus willst und die Community-Seite magst.',
    chooseBliss: [
      'Du willst in dem Moment korrigiert werden, in dem du sprichst, nicht später',
      'Du willst in jeder Einheit ein echtes Gespräch, in einer von zehn Sprachen',
      'Du lernst Mandarin, Koreanisch oder Arabisch und willst unter jeder Zeile die Umschrift',
      'Du willst einen Tutor mit Persönlichkeit, den du selbst wählst',
    ],
    chooseThem: [
      'Du willst einen strukturierten Kurs nach Niveaustufen',
      'Du magst Feedback von anderen Lernenden und Muttersprachlern',
    ],
    rows: [
      { label: 'Format', bliss: 'Sprachgespräch mit einem KI-Tutor', them: 'Strukturierter Kurs, Community-Feedback, KI-Gespräche in manchen Sprachen', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Rund 14 Kurse' },
      { label: 'Korrekturen', bliss: 'Sofort: der Satz, den du gerade gesagt hast, korrigiert und wiederholt', them: 'Community-Korrekturen zu eingereichten Übungen; KI-Feedback, wo verfügbar', win: true },
      { label: 'Erklärungen', bliss: 'Auf Deutsch', them: 'Kurserklärungen in deiner Sprache' },
      { label: 'Sprechpraxis', bliss: 'Die ganze Einheit ist Sprechen', them: 'Sprechübungen innerhalb des Kurses', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android und Web' },
      { label: 'Übungszeit', bliss: 'Unbegrenzt mit Bliss Pro', them: 'Siehe aktuelle Abos des Anbieters', win: true },
    ],
    theirStrengths: [
      { title: 'Ein Kurs nach Niveau', body: 'Die Lektionen von Busuu sind nach Sprachniveau geordnet – hilfreich, wenn du auf eine Prüfung hinarbeitest.' },
      { title: 'Echte Menschen im Spiel', body: 'Dass Muttersprachler deine Übungen ansehen, ist eine schöne menschliche Note.' },
    ],
    blissDifference: [
      { title: 'Kein Warten', body: 'Dein Tutor korrigiert dich im Moment und lässt dich die richtige Version sofort sagen – solange der Satz noch in deinem Kopf ist.' },
      { title: 'Gespräch statt Übungen', body: 'Jede Bliss-Einheit ist ein echtes Hin und Her mit deinem Tutor, in einer von zehn Sprachen.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Busuu-Alternative?', a: 'Ja, vor allem fürs Sprechen. Busuu ist ein Kurs mit Community-Feedback; Bliss ist ein KI-Tutor, mit dem du sprichst und der dich sofort korrigiert.' },
      { q: 'Kann ich Bliss und Busuu zusammen nutzen?', a: 'Ja. Manche nutzen einen Kurs für die Struktur und Bliss, um das Gelernte laut zu üben.' },
      { q: 'Hat Bliss eine Community?', a: 'Nein – Bliss ist eins zu eins mit deinem Tutor, du wartest also nie darauf, dass jemand anderes deine Arbeit ansieht.' },
    ],
  },
  {
    slug: 'pimsleur',
    name: 'Pimsleur',
    title: 'Bliss vs Pimsleur: KI-Tutor-Gespräch vs Audio-Lektionen',
    description:
      'Bliss vs Pimsleur: vorgefertigte Audio-Lektionen oder ein Tutor, der auf das antwortet, was du wirklich sagst? Zwei Sprechmethoden im Vergleich – und für wen.',
    h1: 'Bliss vs Pimsleur: der Aufnahme nachsprechen oder mit einem Tutor reden?',
    intro:
      'Pimsleur ist die klassische Audio-Methode: Du hörst zu, antwortest laut, und die Aufnahme gibt dir die richtige Antwort. Das funktioniert – aber die Aufnahme kann dich nicht hören. Bliss ist ein Tutor, der hört, was du wirklich gesagt hast, und es korrigiert.',
    verdict:
      'Bliss ist die bessere Wahl, wenn du Feedback zu deinem eigenen Sprechen willst: Dein Tutor hört deinen Satz, korrigiert ihn, erklärt dir auf Deutsch, warum, und lässt dich ihn noch einmal sagen. Pimsleur passt vielleicht noch zu dir, wenn du freihändig auf dem Arbeitsweg zuhören willst oder deine Sprache nicht zu den zehn von Bliss gehört.',
    chooseBliss: [
      'Du willst, dass jemand wirklich hört und korrigiert, was du sagst',
      'Du willst eigene Sätze sagen, nicht nur vorgegebene Antworten',
      'Du willst Erklärungen, wenn etwas falsch ist',
      'Du willst einen Tutor, dessen Stimme und Persönlichkeit du wählst',
    ],
    chooseThem: [
      'Du willst freihändiges Audio fürs Autofahren oder Pendeln',
      'Deine Sprache gehört nicht zu den zehn von Bliss',
    ],
    rows: [
      { label: 'Format', bliss: 'Live-Sprachgespräch mit einem KI-Tutor', them: 'Vorab aufgenommene Audio-Lektionen mit Aufforderungen, laut zu antworten', win: true },
      { label: 'Feedback', bliss: 'Dein tatsächlicher Satz, korrigiert und wiederholt', them: 'Die Aufnahme spielt die richtige Antwort ab; sie hört dich nicht', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Deutlich mehr, in unterschiedlicher Tiefe' },
      { label: 'Erklärungen', bliss: 'Auf Deutsch, wenn du sie brauchst', them: 'Im Lektionsskript erzählt', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'iPhone, Android, Web, Auto-Audio' },
      { label: 'Übungszeit', bliss: 'Unbegrenzt mit Bliss Pro', them: 'Siehe aktuelle Abos des Anbieters', win: true },
    ],
    theirStrengths: [
      { title: 'Freihändig', body: 'Audio-Lektionen passen zu einer Autofahrt oder einem Lauf, wie es eine Gesprächs-App nicht tut.' },
      { title: 'Lange Erfolgsgeschichte', body: 'Die Audio-Methode mit zeitversetztem Abrufen hat vielen geholfen, Aussprache und Erinnerung aufzubauen.' },
    ],
    blissDifference: [
      { title: 'Ein Tutor, der zuhört', body: 'Bliss hört, was du gesagt hast – falsches Verb, falsche Wortstellung – und korrigiert genau diesen Satz.' },
      { title: 'Deine Sätze, kein Skript', body: 'Du kannst sagen, was du wirklich sagen willst, und dein Tutor folgt dem Gespräch.' },
    ],
    faq: [
      { q: 'Ist Bliss eine Pimsleur-Alternative?', a: 'Ja. Bei beiden sprichst du laut. Pimsleur nutzt vorgefertigtes Audio; Bliss ist ein Tutor, der hört und korrigiert, was du sagst.' },
      { q: 'Kann ich Bliss freihändig nutzen?', a: 'Bliss ist ein Sprachgespräch, du sprichst und hörst also hauptsächlich. Gedacht ist es aber für die Nutzung mit dem Handy in der Hand.' },
      { q: 'Welche Sprachen unterrichtet Bliss?', a: 'Spanisch, Französisch, Englisch, Mandarin, Italienisch, Deutsch, Portugiesisch, Japanisch, Koreanisch und Arabisch.' },
    ],
  },
  {
    slug: 'preply',
    name: 'Preply',
    title: 'Bliss vs Preply: KI-Tutor oder menschlichen Tutor buchen?',
    description:
      'Bliss vs Preply: einen menschlichen Tutor pro Stunde buchen und bezahlen oder jederzeit unbegrenzt mit einem KI-Tutor sprechen? Kosten, Flexibilität, Eignung.',
    h1: 'Bliss vs Preply: ein menschlicher Tutor nach Termin oder ein KI-Tutor jederzeit?',
    intro:
      'Preply ist ein Marktplatz für menschliche Tutoren: Du suchst eine Lehrkraft aus, buchst einen Termin und bezahlst pro Stunde. Bliss ist ein KI-Tutor, den du öffnest, wann du willst – um 7 Uhr morgens, in der Mittagspause, für fünf Minuten oder vierzig – unbegrenzt mit Bliss Pro.',
    verdict:
      'Fürs Sprechenüben bekommst du mit Bliss deutlich mehr davon: keine Buchung, keine Terminplanung, keine Kosten pro Stunde und kein unangenehmes Gefühl, wenn du denselben Fehler zum zehnten Mal machst. Ein menschlicher Tutor auf Preply passt vielleicht noch zu dir, wenn du dich auf eine Prüfung vorbereitest oder sehr spezielle berufliche Bedürfnisse hast – und viele kombinieren eine wöchentliche Stunde mit einem Menschen mit täglicher Übung in Bliss.',
    chooseBliss: [
      'Du willst jeden Tag üben, nicht einmal pro Woche',
      'Du willst keine Termine buchen und dich nicht nach Zeitzonen richten',
      'Du bist schüchtern beim Sprechen mit Fremden und willst einen Tutor, der nicht urteilt',
      'Du willst ein Abo statt Bezahlung pro Stunde',
    ],
    chooseThem: [
      'Du bereitest dich auf eine bestimmte Prüfung mit menschlichen Prüfern vor',
      'Du brauchst eine Lehrkraft für ein sehr spezielles Berufsfeld',
    ],
    rows: [
      { label: 'Format', bliss: 'KI-Tutor, jederzeit verfügbar', them: 'Menschliche Tutoren, gebuchte Stunden' },
      { label: 'Terminplanung', bliss: 'Keine – App öffnen und reden', them: 'Termin beim Tutor buchen', win: true },
      { label: 'Kostenmodell', bliss: 'Ein Abo – unbegrenztes Üben mit Bliss Pro', them: 'Bezahlung pro Stunde, Preis legt jeder Tutor selbst fest', win: true },
      { label: 'Sprachen', bliss: BLISS_LANGS, them: 'Sehr viele, je nach verfügbaren Tutoren' },
      { label: 'Wohlfühlfaktor', bliss: 'Kein Urteil, wiederhol einen Fehler so oft wie nötig', them: 'Ein echter Mensch, was manche Lernende einschüchtert', win: true },
      { label: 'Plattformen', bliss: BLISS_PLATFORM, them: 'Web, iPhone und Android' },
    ],
    theirStrengths: [
      { title: 'Ein echter Mensch', body: 'Ein menschlicher Tutor kann deine Stimmung lesen, dich auf eine bestimmte Prüfung vorbereiten und sich anpassen, wie es keine App kann.' },
      { title: 'Spezialisten', body: 'Du brauchst Business-Japanisch für einen Job in der Pharmabranche? Ein Marktplatz kann diese Person finden.' },
    ],
    blissDifference: [
      { title: 'Üben, wann immer du fünf Minuten hast', body: 'Kein Kalender, keine Zeitzonen: Dein Tutor ist bereit, sobald du die App öffnest.' },
      { title: 'Masse', body: 'Sprechen wird durch Wiederholung besser. Bliss Pro ist unbegrenzt: Üb jeden Tag, so lange du willst, ohne dass sich die Kosten Stunde für Stunde summieren.' },
      { title: 'Kein Lampenfieber', body: 'Sag es zehnmal falsch. Dein Tutor korrigiert dich geduldig, jedes Mal, auf Deutsch.' },
    ],
    faq: [
      { q: 'Ist ein KI-Tutor so gut wie ein menschlicher Tutor?', a: 'Für tägliches Sprechenüben bringt dir ein KI-Tutor deutlich mehr Wiederholungen, jederzeit. Für Prüfungsvorbereitung oder spezielle Bedürfnisse bringt ein menschlicher Tutor Dinge mit, die eine App nicht kann. Viele nutzen beides.' },
      { q: 'Ist Bliss günstiger als Preply?', a: 'Bliss Pro ist ein Abo mit unbegrenztem Üben statt eines Preises pro Stunde. Prüf die aktuellen Abos in der App und bei Preply, denn die Preise variieren je nach Tutor und Land.' },
      { q: 'Kann ich Bliss zwischen Preply-Stunden nutzen?', a: 'Ja – das ist eine starke Kombination: eine Stunde pro Woche mit einem Menschen, tägliche Sprechpraxis mit Bliss.' },
    ],
  },
];
