import { Answer } from "./Answer";
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
  answers: Answer[];

  /**
   * 解説
   */
  explanation: string;
}
