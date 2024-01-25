import { Text } from "@chakra-ui/react";
import { RegistrationForm } from "./components/RegistrationForm";
import { BackgroundBox } from "../components/BackgroundBox";

/**
 * 登録画面
 *
 * @author nagisano33
 */
export function Registration() {
  return (
    <BackgroundBox>
      <Text fontSize="4xl">ぶんぽーますたー</Text>
      <RegistrationForm />
    </BackgroundBox>
  );
}
