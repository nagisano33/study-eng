import { PropsWithChildren } from "react";
import { Center, Stack } from "@chakra-ui/layout";

/**
 * 背景ボックス
 * 
 * @author nagisano33
 */
export function BackgroundBox({ children }: PropsWithChildren) {
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
        {children}
      </Stack>
    </Center>
  );
}
