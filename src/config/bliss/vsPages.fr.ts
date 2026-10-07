/**
 * `/fr/bliss/vs/<competitor>/` — version française des pages « Bliss vs X ».
 *
 * Mêmes règles que `vsPages.ts` (lire son en-tête) : positionnement pro-Bliss sans fausse
 * affirmation sur le concurrent, ni prix, ni notes, ni nombre d’utilisateurs, faits concurrents
 * limités à leur fiche store et datés « au moment où nous écrivons ». Mêmes 13 entrées, même
 * ordre, mêmes `slug` / `name` / drapeaux `win` que la version anglaise.
 */
import type { VsPage } from './vsPages';

/** Lignes identiques sur chaque page — seul le côté concurrent change. */
const BLISS_LANGS = '10 : espagnol, français, anglais, mandarin, italien, allemand, portugais, japonais, coréen, arabe';
const BLISS_PLATFORM = 'iPhone (App Store)';
const BLISS_FREE = 'Téléchargement gratuit avec un premier prof ; Bliss Pro = tous les profs, pratique illimitée';

export const VS_PAGES_FR: readonly VsPage[] = [
  {
    slug: 'praktika',
    name: 'Praktika',
    title: 'Bliss vs Praktika : quel prof IA avec avatar choisir ?',
    description:
      'Bliss vs Praktika : deux applis de prof IA avec avatar comparées (profs, langues, corrections). Et pourquoi les débutants choisissent Bliss.',
    h1: 'Bliss vs Praktika : deux profs IA avec avatar, deux idées de la leçon',
    intro:
      'À première vue, Praktika et Bliss se ressemblent : vous parlez à voix haute à un prof IA qui a un visage, et il vous répond. La différence se joue autour de la conversation : ce que le prof explique, dans quelle langue, et la façon dont vous choisissez qui vous enseigne.',
    verdict:
      'Pour la plupart des apprenants, Bliss est le meilleur choix : votre prof explique en français, corrige la phrase exacte que vous venez de dire puis vous la fait répéter, et vous choisissez — et changez — parmi huit profs dans une seule appli. Praktika peut encore vous convenir si vous voulez uniquement de la conversation libre en anglais, si vous avez besoin du russe ou si vous êtes sur Android.',
    chooseBliss: [
      'Vous êtes débutant et avez besoin d’explications en français, pas seulement dans la langue que vous apprenez',
      'Vous voulez que le prof corrige la phrase exacte que vous venez de dire, puis vous la fasse répéter',
      'Vous voulez choisir votre prof (et en changer) sans changer d’appli',
      'Vous apprenez le japonais, le coréen, le mandarin ou l’arabe et voulez la romanisation sous chaque phrase',
    ],
    chooseThem: [
      'Vous voulez uniquement de la conversation libre en anglais',
      'Vous avez besoin du russe ou d’Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec le prof IA de votre choix', them: 'Conversation vocale avec des profs IA en avatar' },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Environ 12, dont l’anglais, l’espagnol, le français, l’allemand, le japonais, le coréen, le chinois, l’arabe et le russe (selon sa fiche App Store)' },
      { label: 'Explications', bliss: 'En français, avec la phrase à dire dans la langue apprise', them: 'Surtout dans la langue cible, adaptées à votre niveau', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Retours sur la grammaire et le vocabulaire pendant et après l’échange', win: true },
      { label: 'Choix du prof', bliss: 'Huit profs, n’importe lequel pour n’importe quelle langue, changement à tout moment', them: 'Un avatar attribué, d’autres disponibles', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone et Android' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Téléchargement gratuit, abonnement payant pour l’accès complet' },
    ],
    theirStrengths: [
      { title: 'Une longueur d’avance en anglais', body: 'Praktika a construit son produit autour de l’anglais et ça se voit : beaucoup de scénarios, d’accents et de sujets pour qui parle déjà un peu anglais et veut gagner en aisance.' },
      { title: 'Android et iPhone', body: 'Si vous jonglez entre plusieurs appareils ou utilisez Android, Praktika est disponible là où Bliss ne l’est pas encore.' },
      { title: 'La conversation d’abord, pour les intermédiaires', body: 'Si vous tenez déjà une discussion, une conversation libre avec moins d’interruptions peut sembler plus naturelle qu’une correction guidée.' },
    ],
    blissDifference: [
      { title: 'Pensé pour vos cent premières phrases', body: 'Les profs Bliss expliquent en français et vous donnent la phrase exacte à dire. Un vrai débutant ne reste jamais bloqué devant une phrase qu’il ne comprend pas.' },
      { title: 'Une appli, huit profs', body: 'Sofia, Amélie, Emily, Meilin et quatre autres, chacun avec sa personnalité. Chaque prof enseigne chaque langue : vous gardez celui que vous aimez quand vous ajoutez une deuxième langue.' },
      { title: 'Une correction qui passe par la bouche', body: 'Quand vous vous trompez, votre prof vous donne la phrase corrigée et vous demande de la redire. La correction se fait à l’oral, pas seulement à l’écran.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Praktika ?', a: 'Oui. Ce sont deux profs IA à qui l’on parle à voix haute. Bliss s’adresse davantage aux débutants — explications en français, phrases corrigées que vous répétez — tandis que Praktika mise sur la conversation libre, surtout en anglais.' },
      { q: 'Lequel est le mieux pour un vrai débutant ?', a: 'Bliss est conçu pour ce cas : votre prof explique en français et vous donne la phrase à dire. Les applis centrées sur la conversation libre fonctionnent mieux une fois que vous savez déjà formuler des phrases simples.' },
      { q: 'Bliss enseigne-t-il l’anglais comme Praktika ?', a: 'Oui. L’anglais fait partie des dix langues de Bliss, enseigné par Emily, prof native — ou par n’importe quel autre prof si vous préférez. Et elle vous explique tout en français quand il le faut.' },
      { q: 'Peut-on essayer Bliss gratuitement ?', a: 'Oui. Bliss se télécharge gratuitement avec un premier prof. Les formules et les prix sont affichés dans l’appli avant tout paiement.' },
    ],
    related: [{ href: '/sofia/blog/praktika-alternative/', label: 'Alternative à Praktika pour apprendre l’espagnol (Sofia, en anglais)' }],
  },
  {
    slug: 'speak',
    name: 'Speak',
    title: 'Bliss vs Speak : quelle appli IA pour parler une langue ?',
    description:
      'Bliss vs Speak : deux applis pour apprendre à parler, comparées sur les langues, les leçons, les profs et les corrections. Laquelle choisir, franchement.',
    h1: 'Bliss vs Speak : des exercices oraux structurés, ou un prof avec qui parler ?',
    intro:
      'Speak et Bliss partagent la même idée : on apprend une langue en la parlant à voix haute, beaucoup. Ils divergent sur la forme : Speak repose sur un parcours structuré de leçons orales, Bliss sur une conversation avec le prof que vous choisissez.',
    verdict:
      'Bliss l’emporte pour la plupart de ceux qui veulent vraiment tenir une conversation : un prof qui réagit à ce que vous dites, explique en français et vous corrige en direct — dans dix langues, dont l’allemand, le portugais et l’arabe, que Speak ne propose pas. Speak peut encore vous convenir si vous voulez précisément un cours d’exercices leçon par leçon, ou si vous êtes sur Android.',
    chooseBliss: [
      'Vous voulez une conversation avec un personnage, pas une suite d’exercices',
      'Vous apprenez l’allemand, le portugais ou l’arabe',
      'Vous voulez des explications en français à chaque étape',
      'Vous aimez l’idée de choisir — et de changer — de prof',
    ],
    chooseThem: [
      'Vous préférez un cours d’exercices fixe à une conversation',
      'Vous avez besoin d’Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation avec un prof IA', them: 'Leçons orales structurées plus pratique de conversation avec l’IA' },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Espagnol, français, coréen, japonais, italien, mandarin et anglais (au moment où nous écrivons)', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Explications des leçons dans votre langue', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Retours par reconnaissance vocale sur les phrases des leçons et dans les échanges IA', win: true },
      { label: 'Profs', bliss: 'Huit personnages avec leur voix et leur personnalité', them: 'Guidé par le cours ; le prof IA est une fonction, pas un personnage que l’on choisit', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Leçons gratuites, abonnement payant pour l’accès complet' },
    ],
    theirStrengths: [
      { title: 'Un vrai parcours de cours', body: 'Les leçons de Speak suivent une progression pensée. Si vous aimez savoir exactement ce qui vient ensuite, cette structure est un vrai avantage.' },
      { title: 'Beaucoup de répétitions', body: 'Enchaîner de nombreuses phrases courtes crée des automatismes. Speak le fait bien.' },
      { title: 'Plus de plateformes', body: 'Android et le web permettent de pratiquer sur l’appareil que vous avez sous la main.' },
    ],
    blissDifference: [
      { title: 'Un prof, pas un programme', body: 'Dans Bliss, vous parlez avec Sofia, Amélie, Emily, Meilin ou un autre prof qui réagit à ce que vous avez dit, pas à ce qu’une leçon avait prévu que vous disiez.' },
      { title: 'Dix langues, les mêmes profs', body: 'L’allemand, le portugais et l’arabe sont inclus, et vous gardez le même prof quand vous ajoutez une langue.' },
      { title: 'Des écritures rendues lisibles', body: 'En japonais, coréen, mandarin et arabe, chaque phrase est accompagnée de sa romanisation : vous pouvez la dire avant de savoir la lire.' },
    ],
    faq: [
      { q: 'Bliss ressemble-t-il à Speak ?', a: 'Les deux misent sur l’oral. Speak est organisé comme un cours structuré de leçons orales ; Bliss est une conversation avec le prof IA de votre choix, qui explique en français et vous corrige au fil de l’échange.' },
      { q: 'Quelle appli propose le plus de langues, Bliss ou Speak ?', a: 'Au moment où nous écrivons, Bliss enseigne dix langues, dont l’allemand, le portugais et l’arabe, que Speak ne propose pas. Speak en couvre sept.' },
      { q: 'Bliss est-il bien pour le coréen ou le japonais ?', a: 'Oui. Les deux font partie des dix langues de Bliss, et chaque phrase en coréen ou en japonais est accompagnée de sa romanisation pour que les débutants puissent la dire tout de suite.' },
      { q: 'Peut-on utiliser Bliss sur Android ?', a: 'Pas encore. Bliss est disponible sur iPhone via l’App Store.' },
    ],
  },
  {
    slug: 'learna',
    name: 'Learna',
    title: 'Bliss vs Learna : comparatif honnête des profs IA pour parler',
    description:
      'Bliss vs Learna : Learna est un prof IA d’anglais, Bliss enseigne dix langues avec huit profs. Format, corrections et à qui chaque appli convient.',
    h1: 'Bliss vs Learna : un coach d’anglais, ou un prof pour dix langues ?',
    intro:
      'Learna est un prof IA d’anglais : vous discutez avec un personnage virtuel et enchaînez des exercices de grammaire, de vocabulaire, de lecture et de prononciation. Bliss est un prof avec qui vous parlez, dans l’une des dix langues proposées. Si vous apprenez l’anglais, les deux sont envisageables. Sinon, un seul l’est.',
    verdict:
      'Bliss est le meilleur choix pour presque tout le monde : dix langues au lieu de l’anglais seul, huit profs au choix, et des séances passées à parler plutôt qu’à tapoter des écrans d’exercices. Même pour l’anglais, Emily vous fait parler dès la première séance et vous explique tout en français. Learna peut encore vous convenir si l’anglais est votre seul objectif et que vous voulez des exercices de grammaire et d’orthographe à côté de la discussion.',
    chooseBliss: [
      'Vous apprenez l’espagnol, le mandarin, le japonais ou une autre langue que l’anglais',
      'Vous voulez passer votre temps à parler, pas à faire des exercices à l’écran',
      'Vous voulez une explication en français pour chaque correction',
      'Vous voulez choisir votre prof parmi huit personnages',
    ],
    chooseThem: [
      'L’anglais est votre seul objectif et vous voulez des exercices de grammaire et d’orthographe',
      'Vous avez besoin d’Android',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Discussion avec un personnage IA, plus des exercices de grammaire, lecture, vocabulaire et prononciation', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Anglais', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Centrées sur l’anglais, avec des exercices par compétence', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Retours en temps réel pendant la pratique', win: true },
      { label: 'Profs', bliss: 'Huit personnages, au choix', them: 'Un personnage de discussion virtuel', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Téléchargement gratuit avec achats intégrés' },
    ],
    theirStrengths: [
      { title: 'Tout l’anglais au même endroit', body: 'Les modules de grammaire, d’orthographe, de lecture et de vocabulaire côtoient la conversation, ce qui convient à ceux qui veulent travailler l’anglais sous tous les angles.' },
      { title: 'Texte et voix', body: 'Si vous n’êtes pas toujours dans un endroit où parler à voix haute, la pratique écrite vous permet de continuer.' },
    ],
    blissDifference: [
      { title: 'Dix langues', body: 'Espagnol, français, anglais, mandarin, italien, allemand, portugais, japonais, coréen et arabe — avec les mêmes profs.' },
      { title: 'Parler, c’est la leçon', body: 'Bliss ne découpe pas l’apprentissage en écrans d’exercices. Vous parlez, votre prof corrige la phrase que vous avez dite, vous la redites.' },
      { title: 'Une prof native pour l’anglais', body: 'Emily, la prof californienne de Bliss, enseigne l’anglais — et explique en français quand vous en avez besoin.' },
    ],
    faq: [
      { q: 'Learna enseigne-t-il d’autres langues que l’anglais ?', a: 'Au moment où nous écrivons, Learna se présente comme un prof d’anglais. Bliss enseigne dix langues, dont l’anglais.' },
      { q: 'Lequel est le mieux pour pratiquer l’oral ?', a: 'Bliss est entièrement construit autour de l’oral : chaque séance est une conversation avec votre prof. Learna mélange conversation et exercices de grammaire, de lecture et de vocabulaire.' },
      { q: 'Bliss peut-il m’aider à apprendre l’anglais ?', a: 'Oui. Emily est la prof d’anglais native de Bliss, et elle vous explique tout en français.' },
      { q: 'Bliss est-il gratuit ?', a: 'Bliss se télécharge gratuitement avec un premier prof. Les formules et les prix sont affichés dans l’appli avant tout paiement.' },
    ],
  },
  {
    slug: 'duolingo',
    name: 'Duolingo',
    title: 'Bliss vs Duolingo : parler à un prof ou jouer à un cours ?',
    description:
      'Bliss vs Duolingo : un cours ludique avec séries, ou un prof IA à qui parler à voix haute ? Ce que chacun fait le mieux — et pourquoi beaucoup utilisent les deux.',
    h1: 'Bliss vs Duolingo : séries et leçons, ou un prof à qui parler ?',
    intro:
      'Duolingo est l’appli par laquelle presque tout le monde commence : de courtes leçons ludiques, des séries, des ligues et une liste de langues énorme. Son point faible, de l’aveu même des apprenants, c’est l’oral : on peut enchaîner des mois de leçons et rester bloqué dans une vraie conversation. Bliss est fait exactement pour combler ce manque.',
    verdict:
      'Si votre objectif est de parler, Bliss est la meilleure appli : dès la première séance, vous dites des phrases complètes à voix haute, et votre prof corrige la phrase que vous avez réellement prononcée en vous expliquant pourquoi, en français. Duolingo est très bien pour une habitude quotidienne de vocabulaire — mais ce n’est pas là qu’on apprend à tenir une conversation. Gardez-le pour vos séries si vous voulez ; utilisez Bliss pour parler.',
    chooseBliss: [
      'Vous avez fait des leçons mais vous bloquez dès qu’il faut parler',
      'Vous voulez des corrections sur des phrases que vous avez construites, pas sur des QCM',
      'Vous voulez un prof avec une voix et une personnalité plutôt qu’un jeu',
      'Votre langue fait partie des dix de Bliss',
    ],
    chooseThem: [
      'Vous voulez surtout des séries et des ligues pour prendre une habitude quotidienne',
      'Votre langue n’est pas parmi les dix de Bliss',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Leçons courtes et ludiques ; conversation IA sur certaines formules payantes', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Des dizaines de cours' },
      { label: 'Pratique de l’oral', bliss: 'Toute la séance se passe à l’oral', them: 'Exercices oraux dans les leçons ; conversation libre limitée à certaines formules et langues', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Juste / faux sur les exercices', win: true },
      { label: 'Motivation', bliss: 'Un prof qui vous connaît', them: 'Séries, XP, ligues' },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Gratuit avec publicités ; les formules payantes retirent les pubs et ajoutent des fonctions' },
    ],
    theirStrengths: [
      { title: 'Créer une habitude', body: 'Peu d’applis savent aussi bien vous faire revenir chaque jour. Les séries et les ligues fonctionnent pour beaucoup de gens.' },
      { title: 'L’étendue', body: 'Des dizaines de langues, avec de la lecture, de l’écoute et du vocabulaire pour chacune.' },
      { title: 'Un cours de base gratuit', body: 'On peut aller assez loin sans payer.' },
    ],
    blissDifference: [
      { title: 'L’oral d’abord, pas « un jour »', body: 'Dès votre première séance, vous dites des phrases complètes à voix haute à un prof qui vous répond.' },
      { title: 'Vos erreurs, corrigées', body: 'Bliss corrige la phrase que vous avez réellement dite — votre ordre des mots, votre verbe — et vous fait redire la version corrigée.' },
      { title: 'Expliqué comme le ferait une personne', body: 'Quand quelque chose ne va pas, votre prof vous dit pourquoi, en français.' },
    ],
    faq: [
      { q: 'Bliss peut-il remplacer Duolingo ?', a: 'Pour l’oral, oui — c’est précisément son rôle. Beaucoup d’apprenants gardent Duolingo pour le vocabulaire et la lecture, et utilisent un prof comme Bliss pour la conversation.' },
      { q: 'Pourquoi je n’arrive pas à parler après des mois de Duolingo ?', a: 'Reconnaître la bonne réponse et construire soi-même une phrase sont deux compétences différentes. L’oral progresse le plus vite quand on formule des phrases à voix haute et qu’on les fait corriger, ce qu’apporte une séance avec un prof.' },
      { q: 'Bliss est-il ludique ?', a: 'Pas au sens de Duolingo. Il n’y a pas de ligues ; la motivation vient d’un prof qui parle avec vous et se souvient de ce que vous avez travaillé.' },
      { q: 'Quelles langues Bliss enseigne-t-il ?', a: 'Espagnol, français, anglais, mandarin, italien, allemand, portugais, japonais, coréen et arabe.' },
    ],
  },
  {
    slug: 'babbel',
    name: 'Babbel',
    title: 'Bliss vs Babbel : conversation avec un prof IA ou cours structuré ?',
    description:
      'Bliss vs Babbel : des leçons de grammaire structurées et des cours en direct, ou un prof IA à qui parler à voix haute ? À qui convient chaque appli, honnêtement.',
    h1: 'Bliss vs Babbel : un cours structuré, ou une conversation ?',
    intro:
      'Babbel enseigne avec des leçons soigneusement conçues qui construisent la grammaire et le vocabulaire pas à pas, rédigées pour les locuteurs de votre langue. Bliss met la conversation en premier : vous parlez avec un prof, et la grammaire est expliquée au moment où elle apparaît dans ce que vous avez dit.',
    verdict:
      'Si vous voulez parler, Bliss vous y amène plus vite : vous parlez dès le premier jour, et la grammaire est expliquée au moment où elle apparaît dans votre propre phrase, par un prof qui vous corrige en direct. Babbel peut encore vous convenir si vous préférez étudier la grammaire à l’écran avant de dire quoi que ce soit, ou si vous voulez des cours payants en direct avec des humains.',
    chooseBliss: [
      'Vous voulez parler tout de suite, pas après une unité de leçons',
      'Vous apprenez le mandarin, le japonais, le coréen ou l’arabe et voulez la romanisation sous chaque phrase',
      'Vous voulez un prof dont vous choisissez la personnalité',
      'Les écrans d’exercices vous ennuient',
    ],
    chooseThem: [
      'Vous préférez des leçons de grammaire à l’écran avant de parler',
      'Vous voulez des cours payants en direct avec des profs humains',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Leçons structurées, révisions et podcasts ; cours en direct en option' },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Surtout des langues européennes, plus quelques autres (selon votre langue maternelle)', win: true },
      { label: 'Grammaire', bliss: 'Expliquée quand elle apparaît dans votre phrase', them: 'Enseignée explicitement, leçon par leçon', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Retours sur les exercices et reconnaissance vocale sur les phrases des leçons', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Première leçon gratuite ; abonnement pour le cours' },
    ],
    theirStrengths: [
      { title: 'Une grammaire bien faite', body: 'Les leçons de Babbel expliquent les règles clairement et dans l’ordre. Si vous aimez comprendre avant de parler, c’est précieux.' },
      { title: 'Des profs humains disponibles', body: 'Les cours en direct vous donnent un vrai prof quand vous en voulez un.' },
    ],
    blissDifference: [
      { title: 'Parler dès le premier jour', body: 'Votre première séance Bliss est une conversation. Vous dites de vraies phrases dès le départ.' },
      { title: 'Langues asiatiques et arabe', body: 'Le mandarin, le japonais, le coréen et l’arabe sont enseignés avec la romanisation : vous parlez avant de savoir lire l’écriture.' },
      { title: 'Choisissez votre prof', body: 'Huit profs, chacun avec sa voix et son style — vous changez quand vous voulez.' },
    ],
    faq: [
      { q: 'Bliss est-il meilleur que Babbel ?', a: 'Ils ne font pas le même travail. Babbel est un cours structuré ; Bliss est un prof avec qui vous parlez. Si c’est l’oral qui vous manque, Bliss est le plus adapté.' },
      { q: 'Peut-on utiliser Bliss et Babbel ensemble ?', a: 'Oui, et ça marche bien : Babbel pour la structure, Bliss pour s’entraîner à le dire à voix haute et se faire corriger.' },
      { q: 'Bliss explique-t-il la grammaire ?', a: 'Oui, quand elle se présente. Si vous faites une erreur, votre prof vous explique pourquoi en français, puis vous fait redire la phrase.' },
    ],
    related: [{ href: '/sofia/blog/babbel-alternative/', label: 'Alternative à Babbel pour apprendre l’espagnol (Sofia, en anglais)' }],
  },
  {
    slug: 'talkpal',
    name: 'TalkPal',
    title: 'Bliss vs TalkPal : quelle appli de conversation IA choisir ?',
    description:
      'Bliss vs TalkPal : plus de 80 langues à l’écrit et à l’oral, ou dix langues enseignées par huit profs à qui parler ? Comparatif honnête des deux applis IA.',
    h1: 'Bliss vs TalkPal : le nombre de langues, ou la qualité d’un prof ?',
    intro:
      'TalkPal est un partenaire de conversation IA pour une très longue liste de langues, à l’écrit ou à l’oral, avec des jeux de rôle et des scores de prononciation. Bliss enseigne dix langues, à l’oral d’abord, avec huit profs qui expliquent en français.',
    verdict:
      'Pour chacune des dix langues qu’enseigne Bliss, Bliss est le meilleur prof : des séances guidées, des explications en français, des phrases corrigées que vous redites, et huit profs avec une vraie personnalité au lieu d’un chatbot générique. TalkPal peut encore vous convenir si votre langue ne fait pas partie des dix de Bliss.',
    chooseBliss: [
      'Vous êtes débutant et avez besoin d’être guidé, pas seulement d’un partenaire de conversation',
      'Vous voulez des explications en français',
      'Vous voulez un prof avec un visage, une voix et une personnalité',
      'Vous apprenez l’une des dix langues enseignées par Bliss',
    ],
    chooseThem: [
      'Votre langue ne fait pas partie des dix de Bliss',
      'Vous préférez écrire plutôt que parler',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Échanges écrits et oraux, jeux de rôle, débats' },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Plus de 80 (selon TalkPal)' },
      { label: 'Explications', bliss: 'En français', them: 'Paramétrables ; surtout dans la langue cible', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Corrections de grammaire et scores de prononciation', win: true },
      { label: 'Profs', bliss: 'Huit personnages au choix', them: 'Des personnages IA selon le scénario', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Temps de pratique', bliss: 'Illimité avec Bliss Pro', them: 'Voir leurs formules actuelles', win: true },
    ],
    theirStrengths: [
      { title: 'Une liste de langues immense', body: 'Si vous apprenez par exemple le swahili ou le finnois, TalkPal le propose sans doute, Bliss non.' },
      { title: 'Beaucoup de modes de pratique', body: 'Jeux de rôle, débats, discussions avec des personnages et pratique écrite apportent beaucoup de variété.' },
    ],
    blissDifference: [
      { title: 'Un prof, pas juste un partenaire', body: 'Les profs Bliss mènent la séance : ils expliquent, vous donnent la phrase, la corrigent et vous la font redire. C’est ce qui compte le plus les premiers mois.' },
      { title: 'Des personnages que vous apprenez à connaître', body: 'Sofia, Amélie, Emily, Meilin et quatre autres gardent la même personnalité d’une séance à l’autre et d’une langue à l’autre.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à TalkPal ?', a: 'Oui, pour les dix langues qu’enseigne Bliss. Bliss mise sur l’oral et guide davantage ; TalkPal couvre plus de langues et permet la pratique écrite.' },
      { q: 'Lequel est le mieux pour les débutants ?', a: 'Bliss, parce que votre prof explique en français et vous donne la phrase exacte à dire.' },
      { q: 'Bliss note-t-il la prononciation ?', a: 'Bliss vous corrige au fil de la conversation et vous fait répéter la bonne version, plutôt que de vous donner une note chiffrée.' },
    ],
  },
  {
    slug: 'langua',
    name: 'Langua',
    title: 'Bliss vs Langua : quel prof IA pour vraiment parler ?',
    description:
      'Bliss vs Langua : un retour détaillé après la conversation et des profs humains, ou huit profs IA qui vous corrigent en direct dans dix langues ? Comparatif.',
    h1: 'Bliss vs Langua : la correction après l’échange, ou pendant ?',
    intro:
      'Langua (de LanguaTalk) est connu pour ses conversations IA naturelles et ses retours détaillés une fois l’échange terminé, avec transcriptions interactives et vocabulaire sauvegardé — ainsi qu’une plateforme de profs humains à côté. Bliss vous corrige pendant que vous parlez et vous fait redire la correction tout de suite.',
    verdict:
      'Bliss convient mieux à la plupart des apprenants : il vous corrige pendant que vous parlez — avec l’explication en français — pour que la correction devienne une phrase que vous avez dite, pas un rapport que vous lisez plus tard. Langua peut encore vous convenir si vous êtes avancé et voulez de longues analyses après la conversation, ou réserver des profs humains.',
    chooseBliss: [
      'Vous voulez être corrigé au fil de l’échange, pas par un rapport à la fin',
      'Vous avez besoin d’explications en français',
      'Vous voulez choisir un personnage de prof',
      'Vous apprenez le mandarin, le japonais, le coréen ou l’arabe et voulez la romanisation sous chaque phrase',
    ],
    chooseThem: [
      'Vous êtes avancé et voulez de longs rapports après la conversation',
      'Vous voulez des profs humains',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Conversations IA à l’oral et à l’écrit avec transcriptions ; profs humains disponibles' },
      { label: 'Retours', bliss: 'En direct : la phrase que vous venez de dire, corrigée et répétée', them: 'Listes d’erreurs détaillées après la conversation', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Surtout dans la langue cible', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'Web et mobile' },
      { label: 'Temps de pratique', bliss: 'Illimité avec Bliss Pro', them: 'Voir leurs formules actuelles', win: true },
    ],
    theirStrengths: [
      { title: 'Une analyse approfondie', body: 'Erreurs classées par catégorie et transcriptions interactives : idéal pour ceux qui aiment étudier leurs erreurs après coup.' },
      { title: 'Des humains quand vous en voulez', body: 'Pouvoir passer de la pratique avec l’IA à un prof humain au sein du même service est un vrai plus.' },
    ],
    blissDifference: [
      { title: 'Corrigé à chaud', body: 'Bliss vous corrige sur le moment et vous fait dire la bonne version tout de suite : la correction devient une phrase que vous avez prononcée, pas un texte que vous avez lu.' },
      { title: 'À l’épreuve des débutants', body: 'Les explications en français permettent de partir de zéro.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Langua ?', a: 'Oui. Ce sont deux profs IA avec qui l’on parle. Bliss vous corrige pendant la conversation et explique en français ; Langua met l’accent sur des retours détaillés après coup et propose des profs humains.' },
      { q: 'Lequel convient aux apprenants intermédiaires ?', a: 'Les deux. L’analyse post-conversation de Langua est solide pour les intermédiaires ; Bliss est plus fort si vous voulez être corrigé en direct ou si vous débutez.' },
      { q: 'Bliss propose-t-il des profs humains ?', a: 'Non. Les huit profs de Bliss sont des IA, disponibles à toute heure.' },
    ],
  },
  {
    slug: 'univerbal',
    name: 'Univerbal',
    title: 'Bliss vs Univerbal : comparatif des applis de prof IA',
    description:
      'Bliss vs Univerbal : un cours IA complet avec test de niveau, ou huit profs IA à qui parler dans dix langues ? Format, corrections et à qui chacun convient.',
    h1: 'Bliss vs Univerbal : un cours avec un partenaire IA, ou le prof de votre choix ?',
    intro:
      'Univerbal associe des partenaires de conversation IA à un cours structuré et à un test de niveau, sur des sujets allant du cinéma à la politique, à l’écrit comme à l’oral. Bliss est un prof qui privilégie l’oral, que vous choisissez parmi huit, et qui explique en français.',
    verdict:
      'Bliss est le chemin le plus court vers l’oral : pas de test de niveau, pas de modules — vous ouvrez l’appli, choisissez votre prof et parlez, avec des corrections expliquées en français. Univerbal peut encore vous convenir si vous voulez un programme de cours et la discussion écrite.',
    chooseBliss: [
      'Vous voulez pratiquer à l’oral d’abord plutôt qu’un mélange d’écrit et d’audio',
      'Vous voulez des explications en français',
      'Vous voulez choisir un personnage de prof et le garder',
    ],
    chooseThem: [
      'Vous voulez un test de niveau et un programme de cours',
      'Vous préférez la discussion écrite',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Partenaires de conversation IA plus un cours structuré ; écrit et audio', win: true },
      { label: 'Niveau', bliss: 'Votre prof s’adapte pendant que vous parlez', them: 'Test de niveau', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Explications du cours et retours dans la discussion', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Temps de pratique', bliss: 'Illimité avec Bliss Pro', them: 'Voir leurs formules actuelles', win: true },
    ],
    theirStrengths: [
      { title: 'Cours plus conversation', body: 'Un test de niveau et un cours tracent un chemin clair, avec de la conversation pour mettre en pratique.' },
      { title: 'Des sujets variés', body: 'De nombreux thèmes de discussion gardent les conversations intéressantes pour les intermédiaires.' },
    ],
    blissDifference: [
      { title: 'Directement à l’oral', body: 'Pas de test de niveau, pas de modules : vous commencez à parler et votre prof s’ajuste à ce que vous savez dire.' },
      { title: 'Huit profs, dix langues', body: 'Choisissez le prof dont le style vous plaît et gardez-le d’une langue à l’autre.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Univerbal ?', a: 'Oui. Les deux utilisent la conversation avec une IA pour apprendre une langue. Univerbal y ajoute un cours structuré ; Bliss est un prof avec qui l’on parle, à l’oral d’abord.' },
      { q: 'Bliss a-t-il un test de niveau ?', a: 'Non. Votre prof s’adapte à votre niveau pendant que vous parlez, et vous explique en français dès que vous en avez besoin.' },
    ],
  },
  {
    slug: 'emma',
    name: 'Emma',
    title: 'Bliss vs Emma : comparatif des applis de prof de langue IA',
    description:
      'Bliss vs Emma : une prof IA pour six langues, ou huit profs pour dix ? Oral, corrections et choix du prof comparés — et pourquoi les apprenants choisissent Bliss.',
    h1: 'Bliss vs Emma : une seule prof IA, ou le prof de votre choix ?',
    intro:
      'Emma est une appli de prof IA qui a commencé par l’anglais et propose aujourd’hui six langues, en mêlant discussions écrites et orales, leçons et exercices de vocabulaire. Bliss privilégie l’oral, avec huit profs et dix langues — et chacun explique en français.',
    verdict:
      'Bliss est le meilleur choix pour la plupart des apprenants : plus de langues (dont le mandarin, le japonais, le coréen et l’arabe), huit profs avec chacun sa personnalité au lieu d’une seule, et des séances passées à parler — chaque erreur étant corrigée puis redite. Pour l’anglais aussi, Emily vous fait parler dès la première séance. Emma peut encore vous convenir si vous voulez écrire autant que parler.',
    chooseBliss: [
      'Vous apprenez le mandarin, le japonais, le coréen ou l’arabe — Emma ne les propose pas',
      'Vous voulez choisir votre prof, et en changer quand vous voulez',
      'Vous voulez que chaque séance soit de la pratique orale',
      'Vous voulez la romanisation sous chaque phrase d’une écriture non latine',
    ],
    chooseThem: [
      'Vous préférez écrire à votre prof autant que lui parler',
      'Vous voulez un plan de leçons avec des exercices de vocabulaire à côté de la discussion',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Discussion écrite et orale avec une prof IA, plus des leçons et des exercices', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Anglais, espagnol, français, italien, portugais et allemand (selon sa fiche App Store)', win: true },
      { label: 'Profs', bliss: 'Huit personnages, n’importe lequel pour n’importe quelle langue', them: 'Une seule prof, Emma', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Adaptées à votre niveau', win: true },
      { label: 'Corrections', bliss: 'Corrige la phrase que vous venez de dire et vous la fait répéter', them: 'Corrections en temps réel dans la discussion', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Offre gratuite', bliss: BLISS_FREE, them: 'Téléchargement gratuit avec achats intégrés' },
    ],
    theirStrengths: [
      { title: 'L’écrit quand on ne peut pas parler', body: 'Les discussions écrites permettent de continuer à pratiquer dans le bus ou en open space.' },
      { title: 'Un plan guidé', body: 'Un plan personnalisé avec des exercices de vocabulaire convient à ceux qui aiment cocher des cases.' },
    ],
    blissDifference: [
      { title: 'Huit profs, pas une seule', body: 'Sofia, Amélie, Emily, Meilin et quatre autres, chacun avec sa voix et son style. Gardez celui avec qui le courant passe, dans toutes les langues.' },
      { title: 'Dix langues', body: 'Dont le mandarin, le japonais, le coréen et l’arabe, chacune avec la romanisation pour pouvoir la dire avant de savoir la lire.' },
      { title: 'Toute la séance à l’oral', body: 'Vous parlez, votre prof corrige la phrase exacte que vous avez dite, vous la redites. C’est cette boucle qui fait progresser à l’oral.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Emma ?', a: 'Oui. Ce sont deux profs IA. Bliss privilégie l’oral, enseigne dix langues et vous laisse choisir parmi huit profs ; Emma est une seule prof, avec discussion écrite et orale, sur six langues.' },
      { q: 'Lequel est le mieux pour apprendre le japonais ou le coréen ?', a: 'Bliss — Emma ne les propose pas au moment où nous écrivons, et Bliss ajoute la romanisation sous chaque phrase.' },
      { q: 'Peut-on essayer Bliss gratuitement ?', a: 'Oui. Bliss se télécharge gratuitement avec un premier prof. Les formules et les prix sont affichés dans l’appli avant tout paiement.' },
    ],
  },
  {
    slug: 'busuu',
    name: 'Busuu',
    title: 'Bliss vs Busuu : prof IA ou cours avec communauté ?',
    description:
      'Bliss vs Busuu : un cours corrigé par la communauté, ou un prof IA qui vous corrige en direct pendant que vous parlez ? Comparatif honnête et lequel choisir.',
    h1: 'Bliss vs Busuu : attendre une correction, ou l’avoir en parlant ?',
    intro:
      'Busuu associe un cours structuré dans environ quatorze langues à une communauté de locuteurs natifs qui corrigent vos exercices écrits et oraux, plus de la conversation avec une IA dans certaines langues. Bliss vous donne la correction dès que vous dites quelque chose, par le prof que vous avez choisi.',
    verdict:
      'Si votre objectif est de parler, Bliss est le meilleur outil : la correction est immédiate, expliquée en français, et vous redites la phrase corrigée dans la foulée — sans attendre qu’un inconnu écoute votre enregistrement. Busuu peut encore vous convenir si vous voulez un cours organisé par niveaux du CECRL et appréciez le côté communautaire.',
    chooseBliss: [
      'Vous voulez être corrigé au moment où vous parlez, pas plus tard',
      'Vous voulez une vraie conversation à chaque séance, dans l’une des dix langues',
      'Vous apprenez le mandarin, le coréen ou l’arabe et voulez la romanisation sous chaque phrase',
      'Vous voulez un prof dont vous choisissez la personnalité',
    ],
    chooseThem: [
      'Vous voulez un cours structuré organisé par niveau',
      'Vous aimez recevoir des retours d’autres apprenants et de natifs',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale avec un prof IA', them: 'Cours structuré, retours de la communauté, conversations IA dans certaines langues', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Environ 14 cours' },
      { label: 'Corrections', bliss: 'Immédiates : la phrase que vous venez de dire, corrigée et répétée', them: 'Corrections de la communauté sur les exercices envoyés ; retours IA quand disponibles', win: true },
      { label: 'Explications', bliss: 'En français', them: 'Explications du cours dans votre langue' },
      { label: 'Pratique de l’oral', bliss: 'Toute la séance se passe à l’oral', them: 'Exercices oraux dans le cours', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android et web' },
      { label: 'Temps de pratique', bliss: 'Illimité avec Bliss Pro', them: 'Voir leurs formules actuelles', win: true },
    ],
    theirStrengths: [
      { title: 'Un cours par niveau', body: 'Les leçons de Busuu sont organisées par niveau, ce qui aide si vous préparez un examen.' },
      { title: 'De vraies personnes dans la boucle', body: 'Des natifs qui relisent vos exercices, c’est une touche humaine appréciable.' },
    ],
    blissDifference: [
      { title: 'Aucune attente', body: 'Votre prof vous corrige sur le moment et vous fait dire la bonne version tout de suite — pendant que la phrase est encore dans votre tête.' },
      { title: 'De la conversation, pas des exercices', body: 'Chaque séance Bliss est un vrai échange avec votre prof, dans l’une des dix langues.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Busuu ?', a: 'Oui, surtout pour l’oral. Busuu est un cours avec retours de la communauté ; Bliss est un prof IA avec qui vous parlez et qui vous corrige instantanément.' },
      { q: 'Peut-on utiliser Bliss et Busuu ensemble ?', a: 'Oui. Certains apprenants utilisent un cours pour la structure et Bliss pour s’entraîner à le dire à voix haute.' },
      { q: 'Bliss a-t-il une communauté ?', a: 'Non — Bliss, c’est vous et votre prof en tête-à-tête : vous n’attendez jamais que quelqu’un d’autre relise votre travail.' },
    ],
  },
  {
    slug: 'pimsleur',
    name: 'Pimsleur',
    title: 'Bliss vs Pimsleur : prof IA ou leçons audio ?',
    description:
      'Bliss vs Pimsleur : des leçons audio scriptées, ou un prof qui répond à ce que vous dites vraiment ? Les deux méthodes orales comparées, et à qui chacune convient.',
    h1: 'Bliss vs Pimsleur : répéter après l’enregistrement, ou parler avec un prof ?',
    intro:
      'Pimsleur, c’est la méthode audio classique : vous écoutez, vous répondez à voix haute, l’enregistrement vous donne la bonne réponse. Ça marche — mais l’enregistrement ne vous entend pas. Bliss est un prof qui écoute ce que vous avez réellement dit et le corrige.',
    verdict:
      'Bliss est le meilleur choix si vous voulez un retour sur votre propre façon de parler : votre prof entend votre phrase, la corrige, vous explique pourquoi en français et vous la fait redire. Pimsleur peut encore vous convenir pour une écoute mains libres dans les transports, ou pour une langue hors des dix de Bliss.',
    chooseBliss: [
      'Vous voulez que quelqu’un entende vraiment ce que vous dites et le corrige',
      'Vous voulez dire vos propres phrases, pas seulement des réponses scriptées',
      'Vous voulez des explications quand quelque chose ne va pas',
      'Vous voulez un prof dont vous choisissez la voix et la personnalité',
    ],
    chooseThem: [
      'Vous voulez de l’audio mains libres en voiture ou dans les transports',
      'Votre langue n’est pas parmi les dix de Bliss',
    ],
    rows: [
      { label: 'Format', bliss: 'Conversation vocale en direct avec un prof IA', them: 'Leçons audio préenregistrées avec des invites auxquelles répondre à voix haute', win: true },
      { label: 'Retours', bliss: 'Votre phrase réelle, corrigée et répétée', them: 'L’enregistrement donne la bonne réponse ; il ne vous entend pas', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Beaucoup plus, avec une profondeur variable' },
      { label: 'Explications', bliss: 'En français, quand vous en avez besoin', them: 'Narrées dans le script de la leçon', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'iPhone, Android, web, audio en voiture' },
      { label: 'Temps de pratique', bliss: 'Illimité avec Bliss Pro', them: 'Voir leurs formules actuelles', win: true },
    ],
    theirStrengths: [
      { title: 'Mains libres', body: 'Les leçons audio s’intègrent à un trajet en voiture ou à un footing, ce qu’une appli de conversation ne permet pas.' },
      { title: 'Une longue expérience', body: 'La méthode audio à rappel espacé a aidé beaucoup de gens à travailler leur prononciation et leur mémorisation.' },
    ],
    blissDifference: [
      { title: 'Un prof qui écoute', body: 'Bliss entend ce que vous avez dit — mauvais verbe, mauvais ordre des mots — et corrige cette phrase-là précisément.' },
      { title: 'Vos phrases, pas un script', body: 'Vous pouvez dire ce que vous voulez vraiment dire, et votre prof suit la conversation.' },
    ],
    faq: [
      { q: 'Bliss est-il une alternative à Pimsleur ?', a: 'Oui. Les deux vous font parler à voix haute. Pimsleur utilise de l’audio scripté ; Bliss est un prof qui entend et corrige ce que vous dites.' },
      { q: 'Peut-on utiliser Bliss en mains libres ?', a: 'Bliss est une conversation vocale : vous parlez et écoutez surtout. L’appli est toutefois pensée pour être utilisée téléphone en main.' },
      { q: 'Quelles langues Bliss enseigne-t-il ?', a: 'Espagnol, français, anglais, mandarin, italien, allemand, portugais, japonais, coréen et arabe.' },
    ],
  },
  {
    slug: 'preply',
    name: 'Preply',
    title: 'Bliss vs Preply : prof IA ou réserver un prof humain ?',
    description:
      'Bliss vs Preply : réserver et payer un prof humain à la leçon, ou parler à un prof IA quand vous voulez, autant que vous voulez ? Coût, souplesse, profil idéal.',
    h1: 'Bliss vs Preply : un prof humain sur rendez-vous, ou un prof IA à toute heure ?',
    intro:
      'Preply est une plateforme de profs humains : vous choisissez un prof, réservez un créneau et payez à la leçon. Bliss est un prof IA que vous ouvrez quand vous voulez — à 7 h, à la pause déjeuner, pour cinq minutes ou quarante — en illimité avec Bliss Pro.',
    verdict:
      'Pour pratiquer l’oral, Bliss vous en donne bien plus : pas de réservation, pas d’agenda, pas de coût par leçon, et aucune gêne à refaire la même erreur pour la dixième fois. Un prof humain sur Preply peut encore vous convenir pour préparer un examen ou pour un besoin professionnel très précis — et beaucoup d’apprenants combinent une leçon humaine par semaine avec Bliss au quotidien.',
    chooseBliss: [
      'Vous voulez pratiquer tous les jours, pas une fois par semaine',
      'Vous ne voulez pas réserver de créneaux ni jongler avec les fuseaux horaires',
      'Vous êtes intimidé à l’idée de parler à un inconnu et voulez un prof qui ne juge pas',
      'Vous préférez un abonnement unique plutôt que de payer à la leçon',
    ],
    chooseThem: [
      'Vous préparez un examen précis avec un examinateur humain',
      'Vous avez besoin d’un prof pour un domaine professionnel très spécialisé',
    ],
    rows: [
      { label: 'Format', bliss: 'Prof IA, disponible à toute heure', them: 'Profs humains, leçons sur réservation' },
      { label: 'Planning', bliss: 'Aucun — ouvrez l’appli et parlez', them: 'Réservez un créneau avec votre prof', win: true },
      { label: 'Modèle de prix', bliss: 'Un seul abonnement — pratique illimitée avec Bliss Pro', them: 'Paiement à la leçon, tarif fixé par chaque prof', win: true },
      { label: 'Langues', bliss: BLISS_LANGS, them: 'Très nombreuses, selon les profs disponibles' },
      { label: 'Confort', bliss: 'Aucun jugement, refaites une erreur autant de fois qu’il le faut', them: 'Une vraie personne, ce que certains apprenants trouvent intimidant', win: true },
      { label: 'Plateformes', bliss: BLISS_PLATFORM, them: 'Web, iPhone et Android' },
    ],
    theirStrengths: [
      { title: 'Un vrai humain', body: 'Un prof humain peut percevoir votre humeur, vous préparer à un examen précis et s’adapter comme aucune appli ne le fait.' },
      { title: 'Des spécialistes', body: 'Besoin de japonais des affaires pour un poste dans l’industrie pharmaceutique ? Une plateforme peut trouver cette personne.' },
    ],
    blissDifference: [
      { title: 'Pratiquer dès que vous avez cinq minutes', body: 'Pas d’agenda, pas de fuseaux horaires : votre prof est prêt dès que vous ouvrez l’appli.' },
      { title: 'Le volume', body: 'L’oral progresse avec la répétition. Bliss Pro est illimité : pratiquez tous les jours, aussi longtemps que vous voulez, sans que le coût s’additionne leçon après leçon.' },
      { title: 'Pas de trac', body: 'Trompez-vous dix fois. Votre prof vous corrige patiemment, à chaque fois, en français.' },
    ],
    faq: [
      { q: 'Un prof IA vaut-il un prof humain ?', a: 'Pour la pratique orale quotidienne, un prof IA vous offre bien plus de répétitions, à toute heure. Pour préparer un examen ou des besoins spécialisés, un prof humain apporte ce qu’une appli ne peut pas. Beaucoup d’apprenants utilisent les deux.' },
      { q: 'Bliss est-il moins cher que Preply ?', a: 'Bliss Pro est un abonnement unique avec pratique illimitée, plutôt qu’un prix par leçon. Consultez les formules actuelles dans l’appli et sur Preply, les prix variant selon le prof et le pays.' },
      { q: 'Peut-on utiliser Bliss entre deux leçons Preply ?', a: 'Oui — c’est une excellente combinaison : une leçon par semaine avec un humain, de la pratique orale quotidienne avec Bliss.' },
    ],
  },
];
