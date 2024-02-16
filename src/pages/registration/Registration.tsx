import { Text } from "@chakra-ui/react";
import { RegistrationForm } from "./components/RegistrationForm";
import { ContentBox } from "../components/ContentBox";

/**
 * 登録画面
 *
 * @author nagisano33
 */
export function Registration() {
  return (
    <ContentBox>
      <Text fontSize="4xl">新規登録</Text>
      <RegistrationForm />
    </ContentBox>
  );
}
