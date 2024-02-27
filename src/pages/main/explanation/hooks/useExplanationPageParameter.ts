import { useSearchParams } from "react-router-dom";

/**
 * useExplanationPageParameter の戻り値
 *
 * @author nagisano33
 */
interface UseExplanationPageParameterReturn {
  /**
   * ID
   */
  id: number;

  /**
   * 回答 ID
   */
  answerId: string;
}

/**
 * 解説ページのパラメータを取得するカスタムフック
 *
 * @returns UseQuestionPageParameterReturn
 */
export function useExplanationPageParameter(): UseExplanationPageParameterReturn {
  const [searchParams] = useSearchParams();

  const id = Number(searchParams.get("id"));
  const answerId = searchParams.get("answer");

  if (!answerId) {
    throw new Error();
  }

  return {
    id,
    answerId,
  };
}
