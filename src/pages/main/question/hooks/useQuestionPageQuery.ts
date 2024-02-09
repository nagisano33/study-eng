import { useQuestionQuery } from "../../../../repository/useQuestionQuery";
import { useQuestionPageParameter } from "./useQuestionPageParameter";

/**
 * 問題ページで使用する問題を取得するカスタムクエリ
 *
 * @author nagisano33
 */
export function useQuestionPageQuery() {
  const { id } = useQuestionPageParameter();

  const { question } = useQuestionQuery(id);
  if (!question) {
    throw new Error("問題が見つかりません");
  }

  return { question };
}
