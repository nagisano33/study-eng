import { Text } from "@chakra-ui/layout";
import { useUserParameter } from "../../hooks/useUserParameter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundBox } from "../components/BackgroundBox";
import { AnswerControl } from "./question/components/AnswerControl";

/**
 * メイン画面
 *
 * @author nagisano33
 */
export function Main() {
  const getUser = useUserParameter();

  const navigate = useNavigate();

  useEffect(() => {
    if (getUser() !== null) {
      return;
    }

    navigate("registration");
  }, []);

  return (
    <BackgroundBox>
      <Text>Hello {getUser()?.name}</Text>
      <AnswerControl />
    </BackgroundBox>
  );
}
