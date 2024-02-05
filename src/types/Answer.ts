import { AnswerId } from "./AnswerId";

/**
 * 回答
 *
 * @author nagisano33
 */
export interface Answer {
  /**
   * 回答 ID
   */
  answerId: AnswerId;

  /**
   * テキスト
   */
  text: string;

  /**
   * 正答かどうか
   */
  isCorrect?: boolean;
}
