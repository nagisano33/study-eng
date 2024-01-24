import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { RegistrationForm } from "./components/RegistrationForm";

/**
 * 登録画面
 *
 * @author nagisano33
 */
export function Registration() {
  return (
    <Center mt={5}>
      <Stack
        bg={"gray.100"}
        boxShadow={"md"}
        rounded={"base"}
        width={["95%", "80%", "40%"]}
        p={10}
        gap={10}
      >
        <Text fontSize="4xl">ぶんぽーますたー</Text>
        <RegistrationForm />
      </Stack>
    </Center>
  );
}
