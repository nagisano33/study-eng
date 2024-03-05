import { useQuestionQuery } from "../../../../repository/useQuestionQuery";
import { Question } from "../../../../types/Question";
import { useExplanationPageParameter } from "./useExplanationPageParameter";

/**
 * 戻り値
 */
export interface UseExplanationPageQueryReturn
  extends Pick<Question, "sentence" | "explanation"> {
  /**
   * 正答かどうか
   */
  isCorrect: boolean;

  /**
   * 正答
   */
  correctAnswer: string;

  /**
   * ユーザが選択した答え
   */
  usersAnswer: string;
}

/**
 * 解説ページのクエリ
 *
 * @author nagisano33
 */
export function useExplanationPageQuery(): UseExplanationPageQueryReturn {
  const { id, answerId } = useExplanationPageParameter();
  const { question } = useQuestionQuery(id);

  if (!question) {
    throw new Error("answerId が不正です");
  }

  // 正答
  const correctAnswer = question.answers.find((answer) => answer.isCorrect)!;

  // ユーザの答え
  const usersAnswer = question.answers.find(
    (answer) => answer.answerId === answerId
  )!;

  return {
    sentence: question.sentence,
    explanation: question.explanation,
    isCorrect: correctAnswer.answerId === answerId,
    correctAnswer: correctAnswer.text,
    usersAnswer: usersAnswer.text,
  };
}
