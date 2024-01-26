import { ITranslation } from "./ITranslation";

/**
 * 単語
 *
 * @author nagisano33
 */
export interface IWord {
  /**
   * 単語
   */
  word: string;

  /**
   * 翻訳
   */
  translations: ITranslation[];
}
