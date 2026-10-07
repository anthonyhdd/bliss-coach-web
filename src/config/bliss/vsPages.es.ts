/**
 * `/es/bliss/vs/<competitor>/` — versión en español de las páginas « Bliss vs X ».
 *
 * Mismas reglas que `vsPages.ts` (leer su encabezado): posicionamiento pro-Bliss sin ninguna
 * afirmación falsa sobre el competidor, sin precios, sin calificaciones, sin número de usuarios;
 * los datos del competidor se limitan a su ficha de la tienda y se fechan « al momento de escribir
 * esto ». Mismas 12 entradas, mismo orden, mismos `slug` / `name` / banderas `win` que la versión
 * en inglés. Español latinoamericano neutro, tuteo. El lector habla español: aprender inglés es su
 * caso de uso principal (Emily), así que no se empuja « aprende español ».
 */
import type { VsPage } from './vsPages';

/** Filas idénticas en cada página: solo cambia el lado del competidor. */
const BLISS_LANGS = '10: español, francés, inglés, mandarín, italiano, alemán, portugués, japonés, coreano, árabe';
const BLISS_PLATFORM = 'iPhone (App Store)';
const BLISS_FREE = 'Descarga gratis con un primer profe; Bliss Pro = todos los profes, práctica ilimitada';

export const VS_PAGES_ES: readonly VsPage[] = [
  {
    slug: 'praktika',
    name: 'Praktika',
    title: 'Bliss vs Praktika: ¿qué profe de IA con avatar elegir?',
    description:
      'Bliss vs Praktika: dos apps de profe de IA con avatar comparadas en profes, idiomas y correcciones. Y por qué quienes empiezan de cero eligen Bliss.',
    h1: 'Bliss vs Praktika: dos profes de IA con avatar, dos ideas de lo que es una clase',
    intro:
      'A primera vista, Praktika y Bliss se parecen: le hablas en voz alta a un profe de IA con cara, y te responde. La diferencia está en todo lo que pasa alrededor de la conversación: cuánto te explica el profe, en qué idioma lo hace y cómo eliges quién te enseña.',
    verdict:
      'Para la mayoría, Bliss es la mejor opción: tu profe te explica en español, corrige la frase exacta que acabas de decir y te la hace repetir, y eliges —y cambias— entre ocho profes en una sola app. Si tu meta es el inglés, Emily, la profe nativa de Bliss, te lo enseña explicándote todo en español. Praktika puede convenirte si solo quieres conversación libre en inglés, necesitas ruso o usas Android.',
    chooseBliss: [
      'Estás empezando y necesitas que te expliquen en español, no solo en el idioma que aprendes',
      'Quieres que el profe corrija la frase exacta que acabas de decir y te la haga repetir',
      'Quieres aprender inglés con una profe nativa (Emily) que te explica en español cuando lo necesitas',
      'Quieres elegir a tu profe (y cambiarlo) sin cambiar de app',
      'Aprendes japonés, coreano, mandarín o árabe y quieres la romanización debajo de cada frase',
    ],
    chooseThem: [
      'Solo quieres conversación libre en inglés',
      'Necesitas ruso o Android',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con el profe de IA que tú eliges', them: 'Conversación por voz con profes de IA con avatar' },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Unos 12, entre ellos inglés, español, francés, alemán, japonés, coreano, chino, árabe y ruso (según su ficha de App Store)' },
      { label: 'Explicaciones', bliss: 'En español, con la frase para decir en el idioma que aprendes', them: 'Sobre todo en el idioma que aprendes, adaptadas a tu nivel', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Comentarios sobre gramática y vocabulario durante y después de la charla', win: true },
      { label: 'Elegir profe', bliss: 'Ocho profes, cualquiera para cualquier idioma, cambias cuando quieras', them: 'Un avatar asignado, con otros disponibles', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone y Android' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Descarga gratis, con suscripción de pago para el acceso completo' },
    ],
    theirStrengths: [
      { title: 'Ventaja en inglés', body: 'Praktika construyó su producto alrededor de quienes aprenden inglés y se nota: muchos escenarios, acentos y temas para quien ya habla algo de inglés y quiere soltarse.' },
      { title: 'Android y iPhone', body: 'Si alternas entre dispositivos o usas Android, Praktika está disponible donde Bliss todavía no.' },
      { title: 'Conversación primero, para nivel intermedio', body: 'Si ya puedes sostener una plática, una conversación libre con menos interrupciones puede sentirse más natural que una corrección guiada.' },
    ],
    blissDifference: [
      { title: 'Pensado para tus primeras cien frases', body: 'Los profes de Bliss te explican en español y te dan la frase exacta para decir. Si empiezas de cero, nunca te quedas trabado frente a una frase que no entiendes.' },
      { title: 'Una app, ocho profes', body: 'Sofia, Amélie, Emily, Meilin y cuatro más, cada uno con su personalidad. Todos enseñan todos los idiomas, así que puedes quedarte con el profe que te gusta cuando sumas un segundo idioma.' },
      { title: 'La corrección se dice en voz alta', body: 'Cuando te equivocas, tu profe te da la frase corregida y te pide que la repitas. La corrección pasa por tu boca, no solo por la pantalla.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Praktika?', a: 'Sí. Los dos son profes de IA a los que les hablas en voz alta. Bliss está más pensado para principiantes —explicaciones en español y frases corregidas que repites—, mientras que Praktika apuesta por la conversación libre, sobre todo en inglés.' },
      { q: '¿Cuál es mejor si empiezo de cero?', a: 'Bliss está diseñado justo para eso: tu profe te explica en español y te da la frase para decir. Las apps de conversación libre funcionan mejor cuando ya puedes armar frases sencillas.' },
      { q: '¿Bliss enseña inglés como Praktika?', a: 'Sí. El inglés es uno de los diez idiomas de Bliss y lo enseña Emily, profe nativa, o cualquier otro profe si lo prefieres. Y te explica en español cuando lo necesitas.' },
      { q: '¿Puedo probar Bliss gratis?', a: 'Sí. Bliss se descarga gratis con un primer profe. Los planes y precios aparecen en la app antes de que pagues nada.' },
    ],
    related: [{ href: '/sofia/blog/praktika-alternative/', label: 'Alternativa a Praktika para aprender español (Sofia, en inglés)' }],
  },
  {
    slug: 'speak',
    name: 'Speak',
    title: 'Bliss vs Speak: apps de IA para hablar un idioma, comparadas',
    description:
      'Bliss vs Speak: dos apps para aprender a hablar, comparadas en idiomas, lecciones, profes y correcciones. Cuál te conviene elegir, sin rodeos.',
    h1: 'Bliss vs Speak: ¿ejercicios de habla estructurados o un profe con quien conversar?',
    intro:
      'Speak y Bliss coinciden en la idea central: un idioma se aprende diciéndolo en voz alta, mucho. Difieren en la forma: Speak gira en torno a un curso estructurado de lecciones para hablar; Bliss, en torno a una conversación con el profe que tú eliges.',
    verdict:
      'Bliss gana para la mayoría de quienes quieren sostener una conversación de verdad: un profe que reacciona a lo que dijiste, te explica en español y te corrige en el momento, en diez idiomas, incluidos alemán, portugués y árabe, que Speak no ofrece. Y para el inglés tienes a Emily, profe nativa. Speak puede convenirte si buscas específicamente un curso de ejercicios lección por lección o necesitas Android.',
    chooseBliss: [
      'Quieres conversar con un personaje, no hacer una serie de ejercicios',
      'Aprendes alemán, portugués o árabe',
      'Quieres la explicación en español en cada paso',
      'Te gusta la idea de elegir —y cambiar— a tu profe',
    ],
    chooseThem: [
      'Prefieres un curso fijo de ejercicios a una conversación',
      'Necesitas Android',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación con un profe de IA', them: 'Lecciones estructuradas para hablar más práctica de conversación con IA' },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Español, francés, coreano, japonés, italiano, mandarín e inglés (al momento de escribir esto)', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Explicaciones de las lecciones en tu idioma', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Reconocimiento de voz sobre las frases de la lección y en los chats con IA', win: true },
      { label: 'Profes', bliss: 'Ocho personajes con voz y personalidad propias', them: 'Basado en el curso; el profe de IA es una función, no un personaje que eliges', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Lecciones gratis, con suscripción de pago para el acceso completo' },
    ],
    theirStrengths: [
      { title: 'Un curso con estructura real', body: 'Las lecciones de Speak siguen una secuencia diseñada. Si te gusta saber exactamente qué viene después, esa estructura es una ventaja real.' },
      { title: 'Mucha repetición', body: 'Decir muchas frases cortas seguidas crea respuestas automáticas. Speak lo hace bien.' },
      { title: 'Más plataformas', body: 'El acceso en Android y web facilita practicar en el dispositivo que tengas a mano.' },
    ],
    blissDifference: [
      { title: 'Un profe, no un temario', body: 'En Bliss hablas con Sofia, Amélie, Emily, Meilin u otro profe que reacciona a lo que dijiste, no a lo que una lección tenía planeado que dijeras.' },
      { title: 'Diez idiomas, los mismos profes', body: 'Incluye alemán, portugués y árabe, y puedes quedarte con el mismo profe cuando sumas un idioma.' },
      { title: 'Escrituras que se pueden leer', body: 'En japonés, coreano, mandarín y árabe, cada frase viene con su romanización para que puedas decirla antes de saber leerla.' },
    ],
    faq: [
      { q: '¿Bliss es parecido a Speak?', a: 'Los dos ponen el habla primero. Speak está organizado como un curso estructurado de lecciones para hablar; Bliss es una conversación con el profe de IA que eliges, que te explica en español y te corrige sobre la marcha.' },
      { q: '¿Qué app tiene más idiomas, Bliss o Speak?', a: 'Al momento de escribir esto, Bliss enseña diez idiomas, incluidos alemán, portugués y árabe, que Speak no ofrece. Speak cubre siete.' },
      { q: '¿Bliss sirve para aprender inglés?', a: 'Sí. Emily, la profe nativa de inglés de Bliss, conversa contigo en inglés y te explica en español cuando lo necesitas.' },
      { q: '¿Bliss sirve para coreano o japonés?', a: 'Sí. Los dos están entre los diez idiomas de Bliss, y cada frase en coreano o japonés viene con su romanización para que puedas decirla desde el primer día.' },
      { q: '¿Puedo usar Bliss en Android?', a: 'Todavía no. Bliss está disponible en iPhone a través de App Store.' },
    ],
  },
  {
    slug: 'learna',
    name: 'Learna',
    title: 'Bliss vs Learna: apps de profe de IA para hablar, comparadas',
    description:
      'Bliss vs Learna: Learna es un profe de inglés con IA; Bliss enseña diez idiomas con ocho profes. Comparación justa de formato, correcciones y para quién es cada una.',
    h1: 'Bliss vs Learna: ¿un coach de inglés o un profe para cualquiera de diez idiomas?',
    intro:
      'Learna es un profe de inglés con IA: chateas con un personaje virtual y haces ejercicios de gramática, vocabulario, lectura y pronunciación. Bliss es un profe con quien hablas en cualquiera de diez idiomas, inglés incluido. Si aprendes inglés, las dos son opción. Si no, solo una.',
    verdict:
      'Bliss es la mejor opción para casi todos: diez idiomas en lugar de solo inglés, ocho profes para elegir y cada sesión dedicada a hablar en vez de pasar pantallas de ejercicios. Para el inglés tienes a Emily, profe nativa que te explica en español. Learna puede convenirte si el inglés es tu única meta y quieres ejercicios de gramática y ortografía junto al chat.',
    chooseBliss: [
      'Quieres aprender inglés hablando, con una profe nativa que te explica en español',
      'También te interesa el francés, el mandarín, el japonés o cualquier otro idioma además del inglés',
      'Quieres pasar tu tiempo hablando, no haciendo pantallas de ejercicios',
      'Quieres elegir a tu profe entre ocho personajes',
    ],
    chooseThem: [
      'El inglés es tu única meta y quieres ejercicios de gramática y ortografía',
      'Necesitas Android',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Chat con un personaje de IA más ejercicios de gramática, lectura, vocabulario y pronunciación', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Inglés', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Centradas en el inglés, con ejercicios por habilidad', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Comentarios en tiempo real durante la práctica', win: true },
      { label: 'Profes', bliss: 'Ocho personajes, eliges el que quieras', them: 'Un personaje virtual de chat', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Descarga gratis con compras dentro de la app' },
    ],
    theirStrengths: [
      { title: 'Todo el inglés en un solo lugar', body: 'Los módulos de gramática, ortografía, lectura y vocabulario están junto a la conversación, algo útil si quieres trabajar el inglés en todos sus frentes.' },
      { title: 'Texto y voz', body: 'Si no siempre estás en un lugar donde puedas hablar en voz alta, practicar escribiendo te permite seguir.' },
    ],
    blissDifference: [
      { title: 'Diez idiomas', body: 'Español, francés, inglés, mandarín, italiano, alemán, portugués, japonés, coreano y árabe, con los mismos profes.' },
      { title: 'Hablar es la clase', body: 'Bliss no divide el aprendizaje en pantallas de ejercicios. Hablas, tu profe corrige la frase que dijiste y la vuelves a decir.' },
      { title: 'Una profe nativa para el inglés', body: 'Emily, la profe californiana de Bliss, enseña inglés y te explica en español cuando lo necesitas.' },
    ],
    faq: [
      { q: '¿Learna enseña otros idiomas además del inglés?', a: 'Al momento de escribir esto, Learna se presenta como un profe de inglés. Bliss enseña diez idiomas, inglés incluido.' },
      { q: '¿Cuál es mejor para practicar la conversación?', a: 'Bliss gira por completo alrededor del habla: cada sesión es una conversación con tu profe. Learna combina la conversación con ejercicios de gramática, lectura y vocabulario.' },
      { q: '¿Bliss me ayuda a aprender inglés?', a: 'Sí. Emily es la profe nativa de inglés, y te explica en español cuando lo necesitas.' },
      { q: '¿Bliss es gratis?', a: 'Bliss se descarga gratis con un primer profe. Los planes y precios aparecen en la app antes de que pagues.' },
    ],
  },
  {
    slug: 'duolingo',
    name: 'Duolingo',
    title: 'Bliss vs Duolingo: hablar con un profe o un curso con juegos',
    description:
      'Bliss vs Duolingo: ¿un curso con rachas y juegos o un profe de IA al que le hablas en voz alta? Una alternativa a Duolingo para hablar de verdad.',
    h1: 'Bliss vs Duolingo: ¿rachas y lecciones, o un profe con quien hablar?',
    intro:
      'Duolingo es la app con la que casi todos empiezan: lecciones cortas en forma de juego, rachas, ligas y una lista enorme de idiomas. Su punto débil, según los propios usuarios, es hablar: puedes completar meses de lecciones y aun así quedarte en blanco en una conversación real. Bliss está hecho justo para ese hueco.',
    verdict:
      'Si tu meta es hablar, Bliss es la mejor app: desde tu primera sesión dices frases completas en voz alta, y tu profe corrige la frase que tú armaste y te explica en español por qué. Si es el inglés lo que no te sale, Emily, profe nativa, conversa contigo todos los días. Duolingo está muy bien para el hábito diario de vocabulario, pero no es donde aprendes a sostener una conversación. Quédate con él por las rachas si te gusta; usa Bliss para hablar.',
    chooseBliss: [
      'Ya hiciste lecciones pero te quedas en blanco cuando tienes que hablar',
      'Quieres correcciones sobre frases que armaste tú, no sobre respuestas de opción múltiple',
      'Quieres un profe con voz y personalidad en lugar de un juego',
      'Tu idioma está entre los diez de Bliss (inglés incluido)',
    ],
    chooseThem: [
      'Sobre todo quieres rachas y ligas para crear un hábito diario',
      'Tu idioma no está entre los diez de Bliss',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Lecciones cortas con juegos; funciones de conversación con IA en algunos planes de pago', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Decenas de cursos' },
      { label: 'Práctica oral', bliss: 'Toda la sesión es hablar', them: 'Ejercicios de habla dentro de las lecciones; conversación libre limitada a algunos planes e idiomas', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Correcto/incorrecto en los ejercicios', win: true },
      { label: 'Motivación', bliss: 'Un profe que te conoce', them: 'Rachas, XP, ligas' },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Gratis con anuncios; los planes de pago quitan anuncios y suman funciones' },
    ],
    theirStrengths: [
      { title: 'Crear el hábito', body: 'Pocas apps logran tan bien que las abras todos los días. Las rachas y las ligas le funcionan a mucha gente.' },
      { title: 'Amplitud', body: 'Decenas de idiomas, con ejercicios de lectura, comprensión auditiva y vocabulario en todos.' },
      { title: 'Curso básico gratis', body: 'Puedes avanzar bastante sin pagar.' },
    ],
    blissDifference: [
      { title: 'Hablar desde el inicio, no algún día', body: 'Desde tu primera sesión dices frases completas en voz alta a un profe que te contesta.' },
      { title: 'Tus errores, corregidos', body: 'Bliss corrige la frase que de verdad dijiste —tu orden de palabras, tu verbo— y te hace decir la versión correcta.' },
      { title: 'Explicado como lo haría una persona', body: 'Cuando algo está mal, tu profe te dice por qué, en español.' },
    ],
    faq: [
      { q: '¿Bliss puede reemplazar a Duolingo?', a: 'Para hablar, sí: para eso existe Bliss. Mucha gente conserva Duolingo para vocabulario y lectura y usa un profe para hablar, como Bliss, para la conversación.' },
      { q: '¿Por qué no puedo hablar después de meses de Duolingo?', a: 'Reconocer la respuesta correcta y armar tú mismo una frase son habilidades distintas. El habla mejora más rápido cuando construyes frases en voz alta y te las corrigen, que es justo lo que pasa en una sesión con un profe.' },
      { q: '¿Cuál es la mejor alternativa a Duolingo para hablar inglés?', a: 'Una app en la que hables de verdad. En Bliss, Emily, profe nativa de inglés, conversa contigo, corrige lo que dices y te explica en español cuando hace falta.' },
      { q: '¿Bliss tiene juegos?', a: 'No al estilo de Duolingo. No hay ligas; la motivación es un profe que conversa contigo y recuerda lo que practicaron.' },
      { q: '¿Qué idiomas enseña Bliss?', a: 'Español, francés, inglés, mandarín, italiano, alemán, portugués, japonés, coreano y árabe.' },
    ],
  },
  {
    slug: 'babbel',
    name: 'Babbel',
    title: 'Bliss vs Babbel: conversación con IA o lecciones estructuradas',
    description:
      'Bliss vs Babbel: ¿lecciones de gramática y clases en vivo, o un profe de IA al que le hablas en voz alta? Para quién es cada app, sin rodeos.',
    h1: 'Bliss vs Babbel: ¿un curso estructurado o una conversación?',
    intro:
      'Babbel enseña con lecciones bien diseñadas que construyen la gramática y el vocabulario paso a paso, pensadas para hablantes de tu idioma. Bliss pone la conversación primero: hablas con un profe, y la gramática se explica en el momento en que aparece en algo que dijiste.',
    verdict:
      'Si quieres hablar, Bliss te lleva más rápido: hablas desde el primer día y la gramática se explica en el momento en que aparece en tu propia frase, con un profe que te corrige en vivo y te explica en español. Babbel puede convenirte si prefieres estudiar la gramática en pantalla antes de decir nada, o si quieres clases en vivo de pago con personas.',
    chooseBliss: [
      'Quieres empezar a hablar de inmediato, no después de una unidad de lecciones',
      'Aprendes mandarín, japonés, coreano o árabe y quieres la romanización debajo de cada frase',
      'Quieres un profe con una personalidad que tú eliges',
      'Te aburren las pantallas de ejercicios',
    ],
    chooseThem: [
      'Prefieres lecciones de gramática en pantalla antes de hablar',
      'Quieres clases en vivo de pago con profes humanos',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Lecciones estructuradas, repasos y pódcasts; clases en vivo opcionales' },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Sobre todo idiomas europeos y algunos otros (varía según tu propio idioma)', win: true },
      { label: 'Gramática', bliss: 'Se explica cuando aparece en tu frase', them: 'Se enseña de forma explícita, lección por lección', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Comentarios en los ejercicios y reconocimiento de voz en las frases de la lección', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Primera lección gratis; suscripción para el curso' },
    ],
    theirStrengths: [
      { title: 'Gramática bien hecha', body: 'Las lecciones de Babbel explican las reglas con claridad y en orden. Si te gusta entender antes de hablar, eso vale mucho.' },
      { title: 'Profes humanos disponibles', body: 'Las clases en vivo te dan un profe de carne y hueso cuando lo quieres.' },
    ],
    blissDifference: [
      { title: 'Hablar desde el primer día', body: 'Tu primera sesión en Bliss es una conversación. Dices frases reales desde el inicio.' },
      { title: 'Idiomas asiáticos y árabe', body: 'Mandarín, japonés, coreano y árabe se enseñan con romanización para que puedas hablar antes de saber leer la escritura.' },
      { title: 'Elige a tu profe', body: 'Ocho profes, cada uno con su voz y su estilo; cambias cuando quieras.' },
    ],
    faq: [
      { q: '¿Bliss es mejor que Babbel?', a: 'Hacen trabajos distintos. Babbel es un curso estructurado; Bliss es un profe con quien hablas. Si lo que te falta es hablar, Bliss es lo que más te conviene.' },
      { q: '¿Puedo usar Bliss y Babbel juntos?', a: 'Sí, y funciona bien: Babbel para la estructura, Bliss para practicar en voz alta y que te corrijan.' },
      { q: '¿Bliss explica la gramática?', a: 'Sí, cuando aparece. Si te equivocas, tu profe te explica por qué en español y luego te hace repetir la frase.' },
    ],
    related: [{ href: '/sofia/blog/babbel-alternative/', label: 'Alternativa a Babbel para aprender español (Sofia, en inglés)' }],
  },
  {
    slug: 'talkpal',
    name: 'TalkPal',
    title: 'Bliss vs TalkPal: ¿qué app de conversación con IA elegir?',
    description:
      'Bliss vs TalkPal: ¿más de 80 idiomas por texto y voz, o diez idiomas con ocho profes a los que les hablas? Comparación honesta de las dos apps de idiomas con IA.',
    h1: 'Bliss vs TalkPal: ¿cantidad de idiomas o un profe de verdad?',
    intro:
      'TalkPal es un compañero de conversación con IA para una lista larguísima de idiomas, por texto o por voz, con juegos de rol y puntajes de pronunciación. Bliss enseña diez idiomas, con la voz primero, y ocho profes que te explican en español.',
    verdict:
      'En cualquiera de los diez idiomas que enseña Bliss, Bliss es mejor profe: sesiones guiadas, explicaciones en español, frases corregidas que repites y ocho profes con personalidad propia en lugar de un chatbot genérico. TalkPal puede convenirte si tu idioma no está entre los diez de Bliss.',
    chooseBliss: [
      'Estás empezando y necesitas guía, no solo alguien con quien conversar',
      'Quieres explicaciones en español',
      'Quieres un profe con cara, voz y personalidad',
      'Aprendes uno de los diez idiomas que enseña Bliss, como el inglés con Emily',
    ],
    chooseThem: [
      'Tu idioma no está entre los diez de Bliss',
      'Prefieres escribir a hablar',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Chats por texto y voz, juegos de rol, debates' },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Más de 80 (según TalkPal)' },
      { label: 'Explicaciones', bliss: 'En español', them: 'Configurables; sobre todo en el idioma que aprendes', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Correcciones de gramática y puntajes de pronunciación', win: true },
      { label: 'Profes', bliss: 'Ocho personajes para elegir', them: 'Personajes de IA según el escenario', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Tiempo de práctica', bliss: 'Ilimitado con Bliss Pro', them: 'Consulta sus planes actuales', win: true },
    ],
    theirStrengths: [
      { title: 'Una lista enorme de idiomas', body: 'Si aprendes algo como suajili o finés, es probable que TalkPal lo tenga y Bliss no.' },
      { title: 'Muchos modos de práctica', body: 'Juegos de rol, debates, chats con personajes y práctica escrita dan mucha variedad.' },
    ],
    blissDifference: [
      { title: 'Un profe, no solo un compañero', body: 'Los profes de Bliss llevan la sesión: explican, te dan la frase, la corrigen y te la hacen repetir. Eso pesa más que nada en los primeros meses.' },
      { title: 'Personajes que llegas a conocer', body: 'Sofia, Amélie, Emily, Meilin y cuatro más mantienen la misma personalidad entre sesiones e idiomas.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a TalkPal?', a: 'Sí, para los diez idiomas que enseña Bliss. Bliss pone la voz primero y es más guiado; TalkPal cubre más idiomas y permite practicar escribiendo.' },
      { q: '¿Cuál es mejor para principiantes?', a: 'Bliss, porque tu profe te explica en español y te da la frase exacta para decir.' },
      { q: '¿Bliss califica la pronunciación?', a: 'Bliss te corrige dentro de la conversación y te hace repetir la versión correcta, en lugar de darte un puntaje.' },
    ],
  },
  {
    slug: 'langua',
    name: 'Langua',
    title: 'Bliss vs Langua: profes de IA comparados para hablar de verdad',
    description:
      'Bliss vs Langua: ¿comentarios detallados después del chat y profes humanos, o ocho profes de IA que te corrigen en vivo en diez idiomas? Una mirada justa.',
    h1: 'Bliss vs Langua: ¿la corrección después del chat o durante la conversación?',
    intro:
      'Langua (de LanguaTalk) es conocida por sus conversaciones con IA que suenan naturales y por los comentarios detallados que da al terminar, con transcripciones interactivas y vocabulario guardado, además de un catálogo de profes humanos. Bliss te corrige mientras hablas y te hace decir la corrección en el momento.',
    verdict:
      'Bliss es lo que más le conviene a la mayoría: te corrige mientras hablas, con la explicación en español, así la corrección se vuelve algo que dijiste y no un informe que lees después. Langua puede convenirte si tienes nivel avanzado y quieres análisis largos después del chat, o si quieres reservar profes humanos.',
    chooseBliss: [
      'Quieres correcciones sobre la marcha, no un informe al final',
      'Necesitas explicaciones en español',
      'Quieres elegir a un profe con personaje',
      'Aprendes mandarín, japonés, coreano o árabe y quieres la romanización en cada frase',
    ],
    chooseThem: [
      'Tienes nivel avanzado y quieres informes largos después del chat',
      'Quieres profes humanos',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Conversaciones con IA por voz y texto con transcripciones; profes humanos disponibles' },
      { label: 'Comentarios', bliss: 'En vivo: la frase que acabas de decir, corregida y repetida', them: 'Listas detalladas de errores después de la conversación', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Sobre todo en el idioma que aprendes', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'Web y móvil' },
      { label: 'Tiempo de práctica', bliss: 'Ilimitado con Bliss Pro', them: 'Consulta sus planes actuales', win: true },
    ],
    theirStrengths: [
      { title: 'Repaso a fondo', body: 'Los errores clasificados y las transcripciones interactivas son excelentes si te gusta estudiar tus errores después.' },
      { title: 'Personas cuando las quieres', body: 'Poder pasar de la práctica con IA a un profe humano dentro del mismo servicio es un plus real.' },
    ],
    blissDifference: [
      { title: 'Corregido en caliente', body: 'Bliss te corrige en el momento y te hace decir la versión correcta enseguida: la corrección se vuelve algo que dijiste, no algo que leíste.' },
      { title: 'A prueba de principiantes', body: 'Con explicaciones en español puedes empezar desde cero.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Langua?', a: 'Sí. Los dos son profes de IA con quienes hablas. Bliss te corrige durante la conversación y te explica en español; Langua se centra en comentarios detallados al final y ofrece profes humanos.' },
      { q: '¿Cuál le conviene a un nivel intermedio?', a: 'Los dos pueden servir. El análisis posterior de Langua es fuerte para nivel intermedio; Bliss es más fuerte si quieres corrección en vivo o vas más al inicio.' },
      { q: '¿Bliss tiene profes humanos?', a: 'No. Los ocho profes de Bliss son de IA y están disponibles a cualquier hora.' },
    ],
  },
  {
    slug: 'univerbal',
    name: 'Univerbal',
    title: 'Bliss vs Univerbal: apps de profe de IA de idiomas, comparadas',
    description:
      'Bliss vs Univerbal: ¿un curso con IA y examen de nivel, u ocho profes de IA a los que les hablas en diez idiomas? Formato, correcciones y para quién es cada una.',
    h1: 'Bliss vs Univerbal: ¿un curso con compañero de IA o el profe que tú eliges?',
    intro:
      'Univerbal combina compañeros de conversación con IA con un curso estructurado y un examen de nivel, con temas que van del cine a la política, por texto y audio. Bliss es un profe que eliges entre ocho, con la voz primero, y que te explica en español.',
    verdict:
      'Bliss es el camino más corto para empezar a hablar: sin examen de nivel ni módulos, abres la app, eliges a tu profe y hablas, con correcciones explicadas en español. Univerbal puede convenirte si quieres un temario de curso y chat por escrito.',
    chooseBliss: [
      'Quieres practicar con la voz primero, no mezclando texto y audio',
      'Quieres explicaciones en español',
      'Quieres elegir un profe con personaje y quedarte con él',
    ],
    chooseThem: [
      'Quieres un examen de nivel y un temario de curso',
      'Prefieres chatear por escrito',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Compañeros de conversación con IA más un curso estructurado; texto y audio', win: true },
      { label: 'Nivel', bliss: 'Tu profe se adapta mientras hablas', them: 'Examen de nivel', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Explicaciones del curso y comentarios en el chat', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Tiempo de práctica', bliss: 'Ilimitado con Bliss Pro', them: 'Consulta sus planes actuales', win: true },
    ],
    theirStrengths: [
      { title: 'Curso más conversación', body: 'Un examen de nivel y un curso te dan un camino claro, con conversación para practicarlo.' },
      { title: 'Variedad de temas', body: 'Muchos temas de discusión mantienen interesantes las conversaciones para el nivel intermedio.' },
    ],
    blissDifference: [
      { title: 'Directo a hablar', body: 'Sin examen de nivel ni módulos: empiezas a hablar y tu profe se ajusta a lo que puedes decir.' },
      { title: 'Ocho profes, diez idiomas', body: 'Elige al profe cuyo estilo te guste y quédate con él en todos tus idiomas.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Univerbal?', a: 'Sí. Los dos usan la conversación con IA para aprender idiomas. Univerbal suma un curso estructurado; Bliss es un profe con quien hablas, con la voz primero.' },
      { q: '¿Bliss tiene examen de nivel?', a: 'No. Tu profe se adapta a tu nivel mientras hablas, y te explica en español siempre que lo necesites.' },
    ],
  },
  {
    slug: 'emma',
    name: 'Emma',
    title: 'Bliss vs Emma: apps de profe de IA de idiomas, comparadas',
    description:
      'Bliss vs Emma: ¿una profe de IA para seis idiomas u ocho profes para diez? Cómo se comparan en habla, correcciones y opciones, y por qué eligen Bliss.',
    h1: 'Bliss vs Emma: ¿una sola profe de IA o el profe que tú eliges?',
    intro:
      'Emma es una app de profe de IA que empezó con el inglés y hoy ofrece seis idiomas, combinando chats por texto y voz con lecciones y ejercicios de vocabulario. Bliss pone la voz primero, con ocho profes y diez idiomas, y todos te explican en español.',
    verdict:
      'Bliss es la mejor opción para la mayoría: más idiomas (incluidos mandarín, japonés, coreano y árabe), ocho profes con personalidad propia en lugar de una sola, y sesiones dedicadas a hablar, con cada error corregido y repetido. Para el inglés, Emily, profe nativa, te explica en español cuando lo necesitas. Emma puede convenirte si quieres escribir tanto como hablar.',
    chooseBliss: [
      'Aprendes mandarín, japonés, coreano o árabe, que Emma no ofrece',
      'Quieres aprender inglés hablando con una profe nativa que te explica en español',
      'Quieres elegir a tu profe y cambiarlo cuando quieras',
      'Quieres que cada sesión sea práctica oral',
      'Quieres la romanización debajo de cada frase en escrituras no latinas',
    ],
    chooseThem: [
      'Prefieres escribirle a tu profe tanto como hablarle',
      'Quieres un plan de lecciones con ejercicios de vocabulario junto al chat',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Chat por texto y voz con una profe de IA más lecciones y ejercicios', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Inglés, español, francés, italiano, portugués y alemán (según su ficha de App Store)', win: true },
      { label: 'Profes', bliss: 'Ocho personajes, cualquiera para cualquier idioma', them: 'Una profe, Emma', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Adaptadas a tu nivel', win: true },
      { label: 'Correcciones', bliss: 'Corrige la frase que acabas de decir y te la hace repetir', them: 'Correcciones en tiempo real en el chat', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone' },
      { label: 'Opción gratis', bliss: BLISS_FREE, them: 'Descarga gratis con compras dentro de la app' },
    ],
    theirStrengths: [
      { title: 'Texto cuando no puedes hablar', body: 'Los chats escritos te permiten seguir practicando en el camión, el metro o una oficina abierta.' },
      { title: 'Un plan guiado', body: 'Un plan personalizado con ejercicios de vocabulario le va bien a quien disfruta de una lista de tareas.' },
    ],
    blissDifference: [
      { title: 'Ocho profes, no una', body: 'Sofia, Amélie, Emily, Meilin y cuatro más, cada uno con su voz y su estilo. Quédate con el que conectas en todos tus idiomas.' },
      { title: 'Diez idiomas', body: 'Incluidos mandarín, japonés, coreano y árabe, cada uno con romanización para que puedas decirlo antes de saber leerlo.' },
      { title: 'Toda la sesión es hablar', body: 'Hablas, tu profe corrige la frase exacta que dijiste y la vuelves a decir. Ese ciclo es lo que construye el habla.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Emma?', a: 'Sí. Las dos son profes de IA. Bliss pone la voz primero, enseña diez idiomas y te deja elegir entre ocho profes; Emma es una sola profe con chat por texto y voz en seis idiomas.' },
      { q: '¿Cuál es mejor para aprender inglés?', a: 'Si quieres hablar, Bliss: Emily, profe nativa de inglés, conversa contigo, corrige la frase que dijiste y te explica en español cuando lo necesitas.' },
      { q: '¿Cuál es mejor para aprender japonés o coreano?', a: 'Bliss: al momento de escribir esto, Emma no los ofrece, y Bliss agrega la romanización debajo de cada frase.' },
      { q: '¿Puedo probar Bliss gratis?', a: 'Sí. Bliss se descarga gratis con un primer profe. Los planes y precios aparecen en la app antes de que pagues nada.' },
    ],
  },
  {
    slug: 'busuu',
    name: 'Busuu',
    title: 'Bliss vs Busuu: conversación con IA o curso con comunidad',
    description:
      'Bliss vs Busuu: ¿un curso con correcciones de la comunidad o un profe de IA que te corrige en vivo mientras hablas? Comparación honesta y cuál elegir.',
    h1: 'Bliss vs Busuu: ¿esperar una corrección o recibirla mientras hablas?',
    intro:
      'Busuu combina un curso estructurado en unos catorce idiomas con una comunidad de hablantes nativos que corrigen tus ejercicios escritos y orales, además de práctica de conversación con IA en algunos idiomas. Bliss te da la corrección en el momento en que dices algo, de la mano del profe que eliges.',
    verdict:
      'Si tu meta es hablar, Bliss es la mejor herramienta: la corrección llega al instante, explicada en español, y dices la frase corregida enseguida, sin esperar a que un desconocido revise una grabación. Busuu puede convenirte si quieres un curso por niveles al estilo del MCER y disfrutas la parte de comunidad.',
    chooseBliss: [
      'Quieres que te corrijan en el momento en que hablas, no después',
      'Quieres una conversación completa en cada sesión, en cualquiera de diez idiomas',
      'Aprendes mandarín, coreano o árabe y quieres la romanización en cada frase',
      'Quieres un profe con una personalidad que tú eliges',
    ],
    chooseThem: [
      'Quieres un curso estructurado por niveles',
      'Te gusta recibir comentarios de otros estudiantes y de hablantes nativos',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz con un profe de IA', them: 'Curso estructurado, comentarios de la comunidad, conversaciones con IA en algunos idiomas', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Unos 14 cursos' },
      { label: 'Correcciones', bliss: 'Al instante: la frase que acabas de decir, corregida y repetida', them: 'Correcciones de la comunidad sobre los ejercicios enviados; comentarios de IA donde está disponible', win: true },
      { label: 'Explicaciones', bliss: 'En español', them: 'Explicaciones del curso en tu idioma' },
      { label: 'Práctica oral', bliss: 'Toda la sesión es hablar', them: 'Ejercicios de habla dentro del curso', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android y web' },
      { label: 'Tiempo de práctica', bliss: 'Ilimitado con Bliss Pro', them: 'Consulta sus planes actuales', win: true },
    ],
    theirStrengths: [
      { title: 'Un curso por niveles', body: 'Las lecciones de Busuu están organizadas por nivel, lo que ayuda si te preparas para un examen.' },
      { title: 'Personas reales en el proceso', body: 'Que hablantes nativos revisen tus ejercicios es un buen toque humano.' },
    ],
    blissDifference: [
      { title: 'Sin esperas', body: 'Tu profe te corrige en el momento y te hace decir la versión correcta enseguida, mientras la frase sigue fresca en tu cabeza.' },
      { title: 'Conversación, no ejercicios', body: 'Cada sesión de Bliss es un ida y vuelta real con tu profe, en cualquiera de diez idiomas.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Busuu?', a: 'Sí, sobre todo para hablar. Busuu es un curso con comentarios de la comunidad; Bliss es un profe de IA con quien hablas y que te corrige al instante.' },
      { q: '¿Puedo usar Bliss y Busuu juntos?', a: 'Sí. Hay quien usa un curso para la estructura y Bliss para practicarlo en voz alta.' },
      { q: '¿Bliss tiene comunidad?', a: 'No: en Bliss es uno a uno con tu profe, así que nunca esperas a que alguien más revise tu trabajo.' },
    ],
  },
  {
    slug: 'pimsleur',
    name: 'Pimsleur',
    title: 'Bliss vs Pimsleur: conversación con un profe de IA o audios',
    description:
      'Bliss vs Pimsleur: ¿lecciones de audio grabadas o un profe que responde a lo que de verdad dices? Cómo se comparan los dos métodos y para quién es cada uno.',
    h1: 'Bliss vs Pimsleur: ¿repetir después de la grabación o hablar con un profe?',
    intro:
      'Pimsleur es el método de audio clásico: escuchas, respondes en voz alta y la grabación te da la respuesta correcta. Funciona, pero la grabación no te oye. Bliss es un profe que escucha lo que de verdad dijiste y lo corrige.',
    verdict:
      'Bliss es la mejor opción si quieres comentarios sobre tu propia forma de hablar: tu profe oye tu frase, la corrige, te explica en español por qué y te la hace repetir. Pimsleur puede convenirte para escuchar sin usar las manos mientras te trasladas, o si tu idioma no está entre los diez de Bliss.',
    chooseBliss: [
      'Quieres que alguien de verdad oiga y corrija lo que dices',
      'Quieres decir tus propias frases, no solo respuestas guionadas',
      'Quieres explicaciones cuando algo está mal',
      'Quieres un profe con una voz y una personalidad que tú eliges',
    ],
    chooseThem: [
      'Quieres audio sin usar las manos para manejar o trasladarte',
      'Tu idioma no está entre los diez de Bliss',
    ],
    rows: [
      { label: 'Formato', bliss: 'Conversación por voz en vivo con un profe de IA', them: 'Lecciones de audio grabadas con pausas para responder en voz alta', win: true },
      { label: 'Comentarios', bliss: 'Tu propia frase, corregida y repetida', them: 'La grabación da la respuesta correcta; no te oye', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Muchos más, con distinta profundidad' },
      { label: 'Explicaciones', bliss: 'En español, cuando las necesitas', them: 'Narradas en el guion de la lección', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'iPhone, Android, web, audio del auto' },
      { label: 'Tiempo de práctica', bliss: 'Ilimitado con Bliss Pro', them: 'Consulta sus planes actuales', win: true },
    ],
    theirStrengths: [
      { title: 'Sin usar las manos', body: 'Las lecciones de audio encajan en un trayecto en auto o una carrera de una forma que una app de conversación no.' },
      { title: 'Una larga trayectoria', body: 'El método de audio con repaso espaciado ha ayudado a mucha gente a mejorar la pronunciación y la memoria.' },
    ],
    blissDifference: [
      { title: 'Un profe que escucha', body: 'Bliss oye lo que dijiste —el verbo equivocado, el orden de palabras— y corrige esa frase en concreto.' },
      { title: 'Tus frases, no un guion', body: 'Puedes decir lo que de verdad quieres decir, y tu profe sigue la conversación.' },
    ],
    faq: [
      { q: '¿Bliss es una alternativa a Pimsleur?', a: 'Sí. Los dos te ponen a hablar en voz alta. Pimsleur usa audio guionado; Bliss es un profe que oye y corrige lo que dices.' },
      { q: '¿Puedo usar Bliss sin las manos?', a: 'Bliss es una conversación por voz, así que sobre todo hablas y escuchas. Aun así, está pensado para usarse con el teléfono en la mano.' },
      { q: '¿Qué idiomas enseña Bliss?', a: 'Español, francés, inglés, mandarín, italiano, alemán, portugués, japonés, coreano y árabe.' },
    ],
  },
  {
    slug: 'preply',
    name: 'Preply',
    title: 'Bliss vs Preply: profe de IA o reservar un profe humano',
    description:
      'Bliss vs Preply: ¿pagar un profe humano por clase o hablar con un profe de IA cuando quieras, todo lo que quieras? Costo, flexibilidad y para quién es cada uno.',
    h1: 'Bliss vs Preply: ¿un profe humano con cita o un profe de IA a cualquier hora?',
    intro:
      'Preply es un catálogo de profes humanos: eliges a un profe, reservas un horario y pagas por clase. Bliss es un profe de IA que abres cuando quieras —a las 7 de la mañana, en tu hora de comida, cinco minutos o cuarenta—, ilimitado con Bliss Pro.',
    verdict:
      'Para practicar la conversación, Bliss te da mucho más: sin reservas, sin agendar, sin costo por clase y sin la pena de cometer el mismo error por décima vez. Si practicas inglés, Emily, profe nativa, está lista en cuanto abres la app. Un profe humano en Preply puede convenirte para preparar un examen o para necesidades profesionales muy específicas, y mucha gente combina una clase semanal con una persona y práctica diaria con Bliss.',
    chooseBliss: [
      'Quieres practicar todos los días, no una vez por semana',
      'No quieres reservar horarios ni lidiar con husos horarios',
      'Te da pena hablar con un desconocido y quieres un profe que no te juzgue',
      'Quieres una sola suscripción en lugar de pagar por clase',
    ],
    chooseThem: [
      'Te preparas para un examen específico con un examinador humano',
      'Necesitas un profe para un campo profesional muy especializado',
    ],
    rows: [
      { label: 'Formato', bliss: 'Profe de IA, disponible a cualquier hora', them: 'Profes humanos, clases con reserva' },
      { label: 'Horarios', bliss: 'Ninguno: abres la app y hablas', them: 'Reservas un horario con tu profe', win: true },
      { label: 'Modelo de pago', bliss: 'Una suscripción: práctica ilimitada con Bliss Pro', them: 'Pago por clase, con el precio que fija cada profe', win: true },
      { label: 'Idiomas', bliss: BLISS_LANGS, them: 'Muchísimos, según los profes disponibles' },
      { label: 'Comodidad', bliss: 'Sin juicios, repites un error todas las veces que haga falta', them: 'Una persona real, algo que a algunos les intimida', win: true },
      { label: 'Plataformas', bliss: BLISS_PLATFORM, them: 'Web, iPhone y Android' },
    ],
    theirStrengths: [
      { title: 'Una persona real', body: 'Un profe humano puede leer tu estado de ánimo, prepararte para un examen concreto y adaptarse como ninguna app.' },
      { title: 'Especialistas', body: '¿Necesitas japonés de negocios para un trabajo en farmacéutica? Un catálogo de profes puede encontrar a esa persona.' },
    ],
    blissDifference: [
      { title: 'Practica cuando tengas cinco minutos', body: 'Sin agenda ni husos horarios: tu profe está listo en cuanto abres la app.' },
      { title: 'Volumen', body: 'El habla mejora con la repetición. Bliss Pro es ilimitado: practica todos los días, todo lo que quieras, sin que el costo suba clase por clase.' },
      { title: 'Sin miedo escénico', body: 'Dilo mal diez veces. Tu profe te corrige con paciencia, cada vez, en español.' },
    ],
    faq: [
      { q: '¿Un profe de IA es tan bueno como uno humano?', a: 'Para la práctica oral diaria, un profe de IA te da muchísimas más repeticiones, a cualquier hora. Para preparar exámenes o necesidades especializadas, un profe humano aporta cosas que una app no puede. Mucha gente usa los dos.' },
      { q: '¿Bliss es más barato que Preply?', a: 'Bliss Pro es una sola suscripción con práctica ilimitada, en lugar de un precio por clase. Revisa los planes actuales en la app y en Preply, porque los precios varían según el profe y el país.' },
      { q: '¿Puedo usar Bliss entre clases de Preply?', a: 'Sí, y es una gran combinación: una clase semanal con una persona y práctica oral diaria con Bliss.' },
    ],
  },
];
