import { useSearchParams } from "react-router-dom";

/**
 * useQuestionPageParameter の戻り値
 *
 * @author nagisano33
 */
interface UseQuestionPageParameterReturn {
  /**
   * ID
   */
  id: number;
}

/**
 * 問題ページのパラメータを取得するカスタムフック
 *
 * @returns UseQuestionPageParameterReturn
 */
export function useQuestionPageParameter(): UseQuestionPageParameterReturn {
  const [searchParams] = useSearchParams();

  const parameter = searchParams.get("id");

  return { id: Number(parameter) };
}
