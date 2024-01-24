import { useCallback } from "react";
import { isUser } from "../types/IUser";

/**
 * localStorage からユーザ情報を取得して返す
 * @returns ユーザ情報
 *
 * @author nagisano33
 */
export function useUserParameter() {
  return useCallback(() => {
    const user = JSON.parse(localStorage.getItem("user") ?? "{}");

    return isUser(user) ? user : null;
  }, []);
}
