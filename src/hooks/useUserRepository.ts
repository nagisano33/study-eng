import { useCallback } from "react";
import { IUser } from "../types/IUser";

/**
 * ユーザ情報のストアを使用するカスタムフック
 *
 * @author nagisano33
 */
export function useUserRepository() {
  /**
   * ユーザを新規登録する
   *
   * @author nagisano33
   */
  const register = useCallback((userName: string) => {
    const user: IUser = {
      name: userName,
      registeredAt: new Date(),
    };
    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  return { register };
}
