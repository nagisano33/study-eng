import { AnswerControl } from "./components/AnswerControl";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuestionPageQuery } from "./hooks/useQuestionPageQuery";
import { Blank } from "./components/Blank";
import { Sentence } from "./components/Sentence";

/**
 * 問題画面
 *
 * @author nagisano33
 */
export function QuestionPage() {
  const { question } = useQuestionPageQuery();

  useEffect(() => {
    console.log(question.explanation);
  }, []);

  return (
    <Stack>
      <Text fontSize={"2xl"} color={"orange"}>
        問題
      </Text>
      <Text fontSize={"xl"}>
        次の <Blank /> に入る語句を選択せよ
      </Text>
      <Sentence words={question.sentence} />
      <AnswerControl questionId={question.id} answers={question.answers} />
    </Stack>
  );
}
