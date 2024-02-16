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
        boxShadow={"xl"}
        rounded={"10"}
        width={["95%", "95%", "80%", "50%"]}
        p={3}
        gap={10}
      >
        {children}
      </Stack>
    </Center>
  );
}
