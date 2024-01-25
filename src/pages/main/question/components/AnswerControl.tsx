import { Box, Stack } from "@chakra-ui/layout";
import { AnswerButton } from "./AnswerButton";

/**
 * 回答コントローラ
 *
 * @author nagisano33
 */
export function AnswerControl() {
  return (
    <Stack>
      <Box display={"flex"} gap={1}>
        <AnswerButton
          text={"ああああああああああああああああああああああああ"}
          answerId={"A"}
        />
        <AnswerButton text={"い"} answerId={"B"} />
      </Box>
      <Box display={"flex"} gap={1}>
        <AnswerButton text={"う"} answerId={"C"} />
        <AnswerButton text={"え"} answerId={"D"} />
      </Box>
    </Stack>
  );
}
