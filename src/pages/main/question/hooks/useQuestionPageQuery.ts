import { useQuestionQuery } from "../../../../repository/useQuestionQuery";
import { useQuestionPageParameter } from "./useQuestionPageParameter";

/**
 * 問題ページで使用する問題を取得するカスタムクエリ
 * 
 * @author nagisano33 
 */
export function useQuestionPageQuery() {
  const { id } = useQuestionPageParameter();

  return useQuestionQuery(id);
}
