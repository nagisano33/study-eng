import { PropsWithChildren } from "react";
import { Center, Stack } from "@chakra-ui/layout";

/**
 * 背景ボックス
 *
 * @author nagisano33
 */
export function ContentBox({ children }: PropsWithChildren) {
  return (
    <Center>
      <Stack
        display={"flex"}
        bg={"gray.50"}
        borderWidth={1}
        rounded={"10"}
        width={"100%"}
        p={3}
        gap={3}
      >
        {children}
      </Stack>
    </Center>
  );
}
