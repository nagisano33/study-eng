import { WordClass } from "./WordClass";

/**
 * 翻訳
 *
 * @author nagisano33
 */
export interface ITranslation {
  /**
   * 品詞
   */
  wordClass: WordClass;

  /**
   * 日本語
   */
  japanese: string;
}
