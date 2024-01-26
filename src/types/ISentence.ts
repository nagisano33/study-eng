import { IWord } from "./IWord";

/**
 * 問題文
 * 
 * @author nagisano33
 */
export interface ISentence {
  /**
   * 単語
   */
  words: IWord[];
}
