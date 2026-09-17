/**
 * The Bliss vocabulary probe — « tap the words you understand ».
 *
 * ⚠️ MIRRORED, NOT SHARED. Copied verbatim from the APPSOFIA repo, `src/config/vocabularyProbe.ts`,
 * on 2026-09-17, so the web funnel measures a level the way the app does and the number it shows
 * ("you already recognise ~340 words") is the number the app would have shown. Only the `CefrLevel`
 * import changed: it is declared locally here. Keep the two in step — a drifting grid does not
 * break anything, it quietly grades two learners on two different tests.
 *
 * WHY IT EXISTS (from the original header)
 * Asking « what is your level? » gets an opinion; this measures one. Each tier samples one frequency
 * band: `basic` the first ~1 000 lemmas, `mid` the 1 000–5 000 band, `high` the 5 000–15 000 band.
 * The share ticked in a tier is read as the share of that band the learner holds. It is an ESTIMATE
 * with a wide error bar — honest enough to show, never precise enough to gate content on.
 */

/** `GUIDED_CEFR_LEVELS` in the app. */
export const CEFR_LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2'] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

// ─── Shape ──────────────────────────────────────────────────────────────────────

export const VOCAB_TIERS = ['basic', 'mid', 'high'] as const;
export type VocabTier = (typeof VOCAB_TIERS)[number];

/** `hint` carries the pronunciation when the script alone would test reading instead of vocabulary. */
export type VocabWord = { word: string; hint?: string };

/** How many lemmas each tier stands for. Used only by the size estimate. */
export const TIER_BAND_SIZE: Readonly<Record<VocabTier, number>> = {
  basic: 1000,
  mid: 4000,
  high: 10000,
};

/** One grid the learner answered. */
export type ProbeResult = { tier: VocabTier; picked: number; total: number };

// ─── The grids ──────────────────────────────────────────────────────────────────

const w = (word: string, hint?: string): VocabWord => (hint ? { word, hint } : { word });

/**
 * 16 words per tier per taught language. They are ordinary lemmas of their band, not curiosities:
 * a learner must be able to tick them honestly. Never shown with a translation — the question is
 * « do you understand this », and a translation answers it for them.
 */
export const VOCABULARY_PROBE: Readonly<Record<string, Readonly<Record<VocabTier, readonly VocabWord[]>>>> = {
  es: {
    basic: ['agua', 'casa', 'gracias', 'comer', 'noche', 'trabajo', 'hermano', 'siempre', 'ayer', 'ciudad', 'dinero', 'camino', 'mañana', 'buscar', 'verde', 'amigo'].map((x) => w(x)),
    mid: ['aprovechar', 'alcanzar', 'desafío', 'lograr', 'mezcla', 'paisaje', 'promedio', 'recurso', 'señalar', 'mantener', 'mejorar', 'evitar', 'medida', 'fuente', 'valorar', 'negocio'].map((x) => w(x)),
    high: ['abrumador', 'acérrimo', 'efímero', 'anacrónico', 'apaciguar', 'conjetura', 'enrevesado', 'idiosincrasia', 'ineludible', 'intransigente', 'lacónico', 'perentorio', 'sagaz', 'atolladero', 'prolijo', 'ofuscar'].map((x) => w(x)),
  },
  en: {
    basic: ['water', 'house', 'thanks', 'eat', 'night', 'job', 'sister', 'always', 'yesterday', 'city', 'money', 'road', 'tomorrow', 'green', 'friend', 'learn'].map((x) => w(x)),
    mid: ['achieve', 'afford', 'blend', 'challenge', 'average', 'resource', 'point out', 'keep', 'improve', 'avoid', 'measure', 'source', 'value', 'landscape', 'deal', 'issue'].map((x) => w(x)),
    high: ['overwhelming', 'staunch', 'ephemeral', 'anachronistic', 'appease', 'conjecture', 'convoluted', 'idiosyncrasy', 'inescapable', 'uncompromising', 'laconic', 'peremptory', 'shrewd', 'quandary', 'long-winded', 'obfuscate'].map((x) => w(x)),
  },
  fr: {
    basic: ['eau', 'maison', 'merci', 'manger', 'nuit', 'travail', 'frère', 'toujours', 'hier', 'ville', 'argent', 'chemin', 'demain', 'chercher', 'vert', 'ami'].map((x) => w(x)),
    mid: ['profiter', 'atteindre', 'défi', 'réussir', 'mélange', 'paysage', 'moyenne', 'ressource', 'signaler', 'garder', 'améliorer', 'éviter', 'mesure', 'source', 'valoriser', 'enjeu'].map((x) => w(x)),
    high: ['accablant', 'acharné', 'éphémère', 'anachronique', 'apaiser', 'conjecture', 'alambiqué', 'idiosyncrasie', 'incontournable', 'intransigeant', 'laconique', 'péremptoire', 'sagace', 'impasse', 'prolixe', 'obscurcir'].map((x) => w(x)),
  },
  it: {
    basic: ['acqua', 'casa', 'grazie', 'mangiare', 'notte', 'lavoro', 'fratello', 'sempre', 'ieri', 'città', 'soldi', 'strada', 'domani', 'cercare', 'verde', 'amico'].map((x) => w(x)),
    mid: ['sfruttare', 'raggiungere', 'sfida', 'riuscire', 'miscela', 'paesaggio', 'media', 'risorsa', 'segnalare', 'mantenere', 'migliorare', 'evitare', 'misura', 'fonte', 'valorizzare', 'affare'].map((x) => w(x)),
    high: ['opprimente', 'accanito', 'effimero', 'anacronistico', 'placare', 'congettura', 'contorto', 'idiosincrasia', 'ineludibile', 'intransigente', 'laconico', 'perentorio', 'sagace', 'dilemma', 'prolisso', 'offuscare'].map((x) => w(x)),
  },
  de: {
    basic: ['Wasser', 'Haus', 'danke', 'essen', 'Nacht', 'Arbeit', 'Bruder', 'immer', 'gestern', 'Stadt', 'Geld', 'Weg', 'morgen', 'suchen', 'grün', 'Freund'].map((x) => w(x)),
    mid: ['nutzen', 'erreichen', 'Herausforderung', 'gelingen', 'Mischung', 'Landschaft', 'Durchschnitt', 'Ressource', 'hinweisen', 'behalten', 'verbessern', 'vermeiden', 'Maßnahme', 'Quelle', 'schätzen', 'Geschäft'].map((x) => w(x)),
    high: ['überwältigend', 'erbittert', 'flüchtig', 'anachronistisch', 'besänftigen', 'Mutmaßung', 'verworren', 'Eigenart', 'unumgänglich', 'unnachgiebig', 'lakonisch', 'gebieterisch', 'scharfsinnig', 'Zwickmühle', 'weitschweifig', 'verschleiern'].map((x) => w(x)),
  },
  pt: {
    basic: ['água', 'casa', 'obrigado', 'comer', 'noite', 'trabalho', 'irmão', 'sempre', 'ontem', 'cidade', 'dinheiro', 'caminho', 'amanhã', 'procurar', 'verde', 'amigo'].map((x) => w(x)),
    mid: ['aproveitar', 'alcançar', 'desafio', 'conseguir', 'mistura', 'paisagem', 'média', 'recurso', 'apontar', 'manter', 'melhorar', 'evitar', 'medida', 'fonte', 'valorizar', 'negócio'].map((x) => w(x)),
    high: ['avassalador', 'ferrenho', 'efêmero', 'anacrônico', 'apaziguar', 'conjectura', 'intrincado', 'idiossincrasia', 'incontornável', 'intransigente', 'lacônico', 'peremptório', 'sagaz', 'impasse', 'prolixo', 'ofuscar'].map((x) => w(x)),
  },
  /**
   * Mandarin carries its pinyin: without it the grid would measure whether the learner reads
   * characters, which is a different question from whether they know the word.
   */
  zh: {
    basic: [
      w('水', 'shuǐ'), w('家', 'jiā'), w('谢谢', 'xièxie'), w('吃', 'chī'), w('晚上', 'wǎnshang'), w('工作', 'gōngzuò'),
      w('哥哥', 'gēge'), w('总是', 'zǒngshì'), w('昨天', 'zuótiān'), w('城市', 'chéngshì'), w('钱', 'qián'), w('路', 'lù'),
      w('明天', 'míngtiān'), w('找', 'zhǎo'), w('绿', 'lǜ'), w('朋友', 'péngyou'),
    ],
    mid: [
      w('利用', 'lìyòng'), w('达到', 'dádào'), w('挑战', 'tiǎozhàn'), w('成功', 'chénggōng'), w('风景', 'fēngjǐng'),
      w('平均', 'píngjūn'), w('资源', 'zīyuán'), w('指出', 'zhǐchū'), w('保持', 'bǎochí'), w('改善', 'gǎishàn'),
      w('避免', 'bìmiǎn'), w('措施', 'cuòshī'), w('来源', 'láiyuán'), w('重视', 'zhòngshì'), w('生意', 'shēngyi'), w('环境', 'huánjìng'),
    ],
    high: [
      w('压倒性', 'yādǎoxìng'), w('顽固', 'wángù'), w('短暂', 'duǎnzàn'), w('过时', 'guòshí'), w('安抚', 'ānfǔ'),
      w('推测', 'tuīcè'), w('错综复杂', 'cuòzōng fùzá'), w('特质', 'tèzhì'), w('不可避免', 'bùkě bìmiǎn'), w('固执', 'gùzhí'),
      w('简练', 'jiǎnliàn'), w('强硬', 'qiángyìng'), w('精明', 'jīngmíng'), w('困境', 'kùnjìng'), w('冗长', 'rǒngcháng'), w('掩盖', 'yǎngài'),
    ],
  },
  /**
   * Japanese, Korean, Arabic (2026-09-17): same bands as the other languages, each word with its
   * romanization for the same reason as Mandarin — Hepburn rōmaji, Revised Romanization, a simple
   * Arabic transliteration (Modern Standard Arabic). ⚠️ To be re-read by a native speaker.
   */
  ja: {
    basic: [
      w('水', 'mizu'), w('家', 'ie'), w('ありがとう', 'arigatō'), w('食べる', 'taberu'), w('夜', 'yoru'), w('仕事', 'shigoto'),
      w('兄', 'ani'), w('いつも', 'itsumo'), w('昨日', 'kinō'), w('町', 'machi'), w('お金', 'okane'), w('道', 'michi'),
      w('明日', 'ashita'), w('探す', 'sagasu'), w('緑', 'midori'), w('友達', 'tomodachi'),
    ],
    mid: [
      w('利用', 'riyō'), w('達成', 'tassei'), w('挑戦', 'chōsen'), w('成功', 'seikō'), w('風景', 'fūkei'),
      w('平均', 'heikin'), w('資源', 'shigen'), w('指摘', 'shiteki'), w('維持', 'iji'), w('改善', 'kaizen'),
      w('避ける', 'sakeru'), w('対策', 'taisaku'), w('原因', "gen'in"), w('重視', 'jūshi'), w('商売', 'shōbai'), w('環境', 'kankyō'),
    ],
    high: [
      w('圧倒的', 'attōteki'), w('頑固', 'ganko'), w('儚い', 'hakanai'), w('時代遅れ', 'jidai okure'), w('なだめる', 'nadameru'),
      w('推測', 'suisoku'), w('入り組んだ', 'irikunda'), w('特質', 'tokushitsu'), w('不可避', 'fukahi'), w('強情', 'gōjō'),
      w('簡潔', 'kanketsu'), w('高圧的', 'kōatsuteki'), w('抜け目ない', 'nukeme nai'), w('窮地', 'kyūchi'), w('冗長', 'jōchō'), w('隠蔽', "inpei"),
    ],
  },
  ko: {
    basic: [
      w('물', 'mul'), w('집', 'jip'), w('고마워요', 'gomawoyo'), w('먹다', 'meokda'), w('밤', 'bam'), w('일', 'il'),
      w('형', 'hyeong'), w('항상', 'hangsang'), w('어제', 'eoje'), w('도시', 'dosi'), w('돈', 'don'), w('길', 'gil'),
      w('내일', 'naeil'), w('찾다', 'chatda'), w('초록색', 'choroksaek'), w('친구', 'chingu'),
    ],
    mid: [
      w('활용', 'hwaryong'), w('달성', 'dalseong'), w('도전', 'dojeon'), w('성공', 'seonggong'), w('풍경', 'punggyeong'),
      w('평균', 'pyeonggyun'), w('자원', 'jawon'), w('지적', 'jijeok'), w('유지', 'yuji'), w('개선', 'gaeseon'),
      w('피하다', 'pihada'), w('대책', 'daechaek'), w('원인', 'wonin'), w('중시', 'jungsi'), w('사업', 'saeop'), w('환경', 'hwangyeong'),
    ],
    high: [
      w('압도적', 'apdojeok'), w('완고하다', 'wangohada'), w('덧없다', 'deoteopda'), w('시대착오', 'sidaechago'), w('달래다', 'dallaeda'),
      w('추측', 'chucheuk'), w('복잡다단', 'bokjapdadan'), w('특성', 'teukseong'), w('불가피', 'bulgapi'), w('고집불통', 'gojipbultong'),
      w('간결', 'gangyeol'), w('고압적', 'goapjeok'), w('약삭빠르다', 'yaksakppareuda'), w('곤경', 'gongyeong'), w('장황하다', 'janghwanghada'), w('은폐', 'eunpye'),
    ],
  },
  ar: {
    basic: [
      w('ماء', "ma'"), w('بيت', 'bayt'), w('شكرًا', 'shukran'), w('أكل', 'akala'), w('ليل', 'layl'), w('عمل', "'amal"),
      w('أخ', 'akh'), w('دائمًا', "da'iman"), w('أمس', 'ams'), w('مدينة', 'madina'), w('نقود', 'nuqud'), w('طريق', 'tariq'),
      w('غدًا', 'ghadan'), w('بحث', 'bahth'), w('أخضر', 'akhdar'), w('صديق', 'sadiq'),
    ],
    mid: [
      w('استغلال', 'istighlal'), w('تحقيق', 'tahqiq'), w('تحدٍّ', 'tahaddin'), w('نجاح', 'najah'), w('منظر', 'manzar'),
      w('متوسط', 'mutawassit'), w('مورد', 'mawrid'), w('أشار', 'ashara'), w('حافظ', 'hafaza'), w('تحسين', 'tahsin'),
      w('تجنّب', 'tajannub'), w('إجراء', "ijra'"), w('مصدر', 'masdar'), w('قيمة', 'qima'), w('تجارة', 'tijara'), w('بيئة', "bi'a"),
    ],
    high: [
      w('ساحق', 'sahiq'), w('عنيد', "'anid"), w('زائل', "za'il"), w('متقادم', 'mutaqadim'), w('استرضاء', "istirda'"),
      w('تخمين', 'takhmin'), w('متشعّب', "mutasha''ib"), w('خصوصية', 'khususiyya'), w('حتمي', 'hatmi'), w('متصلّب', 'mutasallib'),
      w('مقتضب', 'muqtadab'), w('قاطع', "qati'"), w('داهية', 'dahiya'), w('مأزق', "ma'ziq"), w('مسهب', 'mushib'), w('طمس', 'tams'),
    ],
  },
};

/** `[]` for a language we have no grid for — the caller then skips the step rather than inventing one. */
export function probeWordsFor(taughtLanguage: string | null, tier: VocabTier): readonly VocabWord[] {
  if (!taughtLanguage) return [];
  return VOCABULARY_PROBE[taughtLanguage]?.[tier] ?? [];
}

export function hasVocabularyProbe(taughtLanguage: string | null): boolean {
  return !!taughtLanguage && !!VOCABULARY_PROBE[taughtLanguage];
}

// ─── The adaptive walk ──────────────────────────────────────────────────────────

/** Where the first grid starts: the level the learner just claimed. */
export function firstProbeTier(declared: CefrLevel): VocabTier {
  if (declared === 'A0' || declared === 'A1') return 'basic';
  if (declared === 'B2') return 'high';
  return 'mid';
}

/** Ticking most of a grid earns a harder one; ticking almost none earns an easier one. */
export const PROBE_STEP_UP_RATIO = 0.6;
export const PROBE_STEP_DOWN_RATIO = 0.25;
/** Two grids. Praktika shows three; the third one buys nothing and costs a screen. */
export const MAX_PROBE_GRIDS = 2;

/**
 * The tier to show after `results`, or `null` when the probe is over — because we already showed
 * `MAX_PROBE_GRIDS`, because the answer sat in the middle (the first grid was the right one), or
 * because the next tier in that direction does not exist.
 */
export function nextProbeTier(results: readonly ProbeResult[]): VocabTier | null {
  if (results.length === 0 || results.length >= MAX_PROBE_GRIDS) return null;
  const last = results[results.length - 1];
  const ratio = ratioOf(last);
  const index = VOCAB_TIERS.indexOf(last.tier);
  const seen = new Set(results.map((r) => r.tier));
  let next: VocabTier | null = null;
  if (ratio >= PROBE_STEP_UP_RATIO) next = VOCAB_TIERS[index + 1] ?? null;
  else if (ratio <= PROBE_STEP_DOWN_RATIO) next = VOCAB_TIERS[index - 1] ?? null;
  return next && !seen.has(next) ? next : null;
}

function ratioOf(result: ProbeResult): number {
  if (!result.total || result.total <= 0) return 0;
  return Math.min(1, Math.max(0, result.picked / result.total));
}

// ─── The estimate ───────────────────────────────────────────────────────────────

export type VocabularyEstimate = {
  /** What the grids say, on their own. */
  measuredCefr: CefrLevel;
  /** Rounded to the nearest 10 — a number with a unit digit would claim a precision we don't have. */
  knownWords: number;
  /** The tiers that were actually answered, in order. */
  tiers: readonly VocabTier[];
};

/** Below this share, a tier tells us nothing about the bands underneath it. */
const CREDIT_LOWER_BANDS_ABOVE = 0.5;

export function estimateVocabulary(results: readonly ProbeResult[]): VocabularyEstimate | null {
  if (results.length === 0) return null;
  const byTier = new Map<VocabTier, number>();
  results.forEach((r) => byTier.set(r.tier, ratioOf(r)));

  const lowestMeasured = VOCAB_TIERS.find((tier) => byTier.has(tier)) ?? 'basic';
  const lowestRatio = byTier.get(lowestMeasured) ?? 0;

  let words = 0;
  VOCAB_TIERS.forEach((tier) => {
    const measured = byTier.get(tier);
    if (measured !== undefined) {
      words += TIER_BAND_SIZE[tier] * measured;
      return;
    }
    const below = VOCAB_TIERS.indexOf(tier) < VOCAB_TIERS.indexOf(lowestMeasured);
    if (below && lowestRatio >= CREDIT_LOWER_BANDS_ABOVE) words += TIER_BAND_SIZE[tier];
  });

  return {
    measuredCefr: measuredCefrFrom(byTier),
    knownWords: Math.max(10, Math.round(words / 10) * 10),
    tiers: results.map((r) => r.tier),
  };
}

function measuredCefrFrom(byTier: ReadonlyMap<VocabTier, number>): CefrLevel {
  const high = byTier.get('high');
  const mid = byTier.get('mid');
  const basic = byTier.get('basic');
  if (high !== undefined && high >= 0.35) return 'B2';
  // Only the hardest grid was answered, and it came back weak. In the flow that is always followed
  // by an easier grid (the walk steps down), so this is the case where the learner stopped early:
  // they reached for C1 words and missed, which places them under B2 — not at the bottom.
  if (high !== undefined && mid === undefined && basic === undefined) return 'B1';
  if (mid !== undefined) {
    if (mid >= 0.6) return 'B2';
    if (mid >= 0.35) return 'B1';
    if (mid >= 0.15) return 'A2';
    return basic !== undefined && basic < 0.4 ? 'A1' : 'A2';
  }
  if (basic !== undefined) {
    if (basic >= 0.7) return 'A2';
    if (basic >= 0.4) return 'A1';
    return 'A0';
  }
  return 'A1';
}

const CEFR_ORDER: readonly CefrLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2'];

/**
 * The level the tutor actually teaches at: the gentler of what the learner claimed and what the
 * grids measured. See the header — the two mistakes do not cost the same.
 */
export function teachingCefrLevel(declared: CefrLevel, estimate: VocabularyEstimate | null): CefrLevel {
  if (!estimate) return declared;
  const a = CEFR_ORDER.indexOf(declared);
  const b = CEFR_ORDER.indexOf(estimate.measuredCefr);
  if (a < 0 || b < 0) return declared;
  return CEFR_ORDER[Math.min(a, b)];
}

/** `true` when the grids put the learner above their own guess — the result screen says so. */
export function beatsOwnGuess(declared: CefrLevel, estimate: VocabularyEstimate | null): boolean {
  if (!estimate) return false;
  return CEFR_ORDER.indexOf(estimate.measuredCefr) > CEFR_ORDER.indexOf(declared);
}
