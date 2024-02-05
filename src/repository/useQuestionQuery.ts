import { useCallback } from "react";
import { questions } from "./database/questions";
import { Question } from "../types/Question";

/**
 * 問題を扱うカスタムフック
 *
 * @autnor nagisano33
 */
export function useQuestionQuery() {
  /**
   * Id で問題を取得する
   *
   * @param {number} questionId 問題 ID
   * @returns 問題 または undefined
   */
  const get = useCallback((questionId: number): Question | undefined => {
    return questions.find((question) => question.id === questionId);
  }, []);

  return { get };
}
