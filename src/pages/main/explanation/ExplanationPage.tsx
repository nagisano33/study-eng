import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { ContentBox } from "../../components/ContentBox";
import { UserResult } from "./components/UserResult";
import { useExplanationPageQuery } from "./hooks/useExplanationPageQuery";

/**
 * 解説ページ
 *
 * @returns コンポーネント
 *
 * @author nagisano33
 */
export function ExplanationPage() {
  const { correctAnswer, explanation, isCorrect, sentence, usersAnswer } =
    useExplanationPageQuery();

  return (
    <Stack gap={3}>
      <UserResult
        correctAnswer={correctAnswer}
        isCorrect={isCorrect}
        sentence={sentence}
        usersAnswer={usersAnswer}
      />
      <ContentBox>
        <Text fontSize={"2xl"} color={"orange"}>
          解説
        </Text>
        <Text>aaaaaaaa</Text>
      </ContentBox>
      <Box textAlign={"right"}>
        <Button colorScheme="blue">次の問題へ</Button>
      </Box>
    </Stack>
  );
}
