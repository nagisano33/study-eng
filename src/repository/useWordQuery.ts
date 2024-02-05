import { useCallback } from "react";
import { words } from "./database/words";
import { Word } from "../types/Word";

/**
 * 単語を取得するクエリ提供する
 *
 * @author nagisano33
 */
export function useWordQuery() {
  /**
   * 単語を取得する
   *
   * @param spelling スペル
   * @returns Word または undefined
   */
  const get = useCallback(
    (spelling: string): Word | undefined =>
      words.find((word) => (word.spelling = spelling)),
    []
  );

  return { get };
}
