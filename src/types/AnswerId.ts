const answerIds = ["A", "B", "C", "D"] as const;

/**
 * 回答 ID
 *
 * @author nagisano33
 */
export type AnswerId = (typeof answerIds)[number];

/**
 * AnswerId かどうかを返す
 * @param value 任意の値
 * @returns value が AnswerId型かどうか
 */
export function isAnswerId(value: unknown): value is AnswerId {
  if (!value || typeof value !== "string") {
    return false;
  }

  return answerIds.some((id) => id === value);
}
