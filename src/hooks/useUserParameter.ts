import { useEffect, useState } from "react";
import { IUser, isUser } from "../types/IUser";

/**
 * localStorage からユーザ情報を取得して返す
 * @returns ユーザ情報
 * 
 * @author nagisano33
 */
export function useUserParameter() {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") ?? "{}");

    if (!isUser(user)) {
      setUser(null);
      return;
    }

    setUser(user);
  }, []);

  return user;
}
