import { IAnswer } from "./IAnswer";
import { QuestionType } from "./QuestionType";

/**
 * 問題
 */
export interface Question {
  /**
   * ID
   */
  id: number;

  /**
   * 問題形式
   */
  type: QuestionType;

  /**
   * 問題文
   */
  sentence: string[];

  /**
   * 回答
   */
  answers: IAnswer[];

  /**
   * 解説
   */
  explanation: string;
}
