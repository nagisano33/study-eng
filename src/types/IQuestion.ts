import { IAnswer } from "./IAnswer";
import { ISentence } from "./ISentence";
import { QuestionType } from "./QuestionType";

/**
 * 問題
 */
export interface IQuestion {
  /**
   * 問題形式
   */
  type: QuestionType;

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
