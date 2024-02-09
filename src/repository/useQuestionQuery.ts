import { useRef } from "react";
import { questions } from "./database/questions";
import { Question } from "../types/Question";

/**
 * useQuestionQuery の戻り値
 *
 * @author nagisano33
 */
interface UseQuestionQueryReturn {
  /**
   * 問題
   */
  question: Question | undefined;
}

/**
 * 問題を扱うカスタムフック
 * @param {number} questionId 問題 ID
 *
 * @autnor nagisano33
 */
export function useQuestionQuery(questionId: number): UseQuestionQueryReturn {
  const question = useRef(
    questions.find((question) => question.id === questionId)
  );

  return { question: question.current };
}
