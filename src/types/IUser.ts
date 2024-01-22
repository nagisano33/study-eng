/**
 * ユーザ情報
 *
 * @author nagisano33
 */
export interface IUser {
  /**
   * 名前
   */
  name: string;

  /**
   * 登録日
   */
  registeredAt: Date;
}

export function isUser(value: unknown): value is IUser {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (!("name" in value)) {
    return false;
  }
  return true;
}
