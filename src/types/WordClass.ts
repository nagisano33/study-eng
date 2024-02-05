const wordClasses = [
  "Noun",
  "Pronoun",
  "Adjective",
  "Verb",
  "Adverb",
  "Preposition",
  "Conjuction",
  "Interjection",
] as const;

/**
 * 品詞
 *
 * @type {Noun} 名詞
 * @type {Pronoun} 代名詞
 * @type {Adjective} 形容詞
 * @type {Verb} 動詞
 * @type {Adverb} 副詞
 * @type {Preposition} 前置詞
 * @type {Conjunction} 接続詞
 * @type {Interjection} 間投詞
 */
export type WordClass = (typeof wordClasses)[number];

/**
 * 値が WordClass かどうかを返す
 *
 * @param value 判別する値
 * @returns WordClass かどうか
 */
export function isWordClass(value: unknown): value is WordClass {
  if (typeof value !== "string") {
    return false;
  }

  return wordClasses.some((wordClass) => wordClass === value);
}
