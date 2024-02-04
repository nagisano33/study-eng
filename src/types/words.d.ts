import { WordClass } from "./WordClass";

export interface Word {
  /**
   * スペル
   */
  spelling: string;

  /**
   * 品詞
   */
  wordClass: WordClass;

  /**
   * 日本語訳
   */
  japanese: string;
}

declare module '../repository/database/words.json' {
  const data: Word[];

  export default data;
}