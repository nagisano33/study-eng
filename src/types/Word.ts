import { WordClass } from "./WordClass";

/**
 * 単語の定義
 * 
 * @author nagisano33
 */
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
