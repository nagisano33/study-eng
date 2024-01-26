import { IAnswer } from "./IAnswer";
import { ISentence } from "./ISentence";

/**
 * 問題
 */
export interface IQuestion {
  /**
   * 問題文
   */
  sentence: ISentence;

  /**
   * 回答
   */
  answers: IAnswer[];

  /**
   * 解説
   */
  explanation: string;
}
