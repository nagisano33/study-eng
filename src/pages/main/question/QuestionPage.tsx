import { AnswerControl } from "./components/AnswerControl";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuestionPageQuery } from "./hooks/useQuestionPageQuery";
import { TextWithUnderLine } from "./components/TextWithUnderLine";
import { Sentence } from "./components/Sentence";
import { ContentBox } from "../../components/ContentBox";

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
    <Stack gap={3}>
      <ContentBox>
        <Text fontSize={"2xl"} color={"orange"}>
          問題
        </Text>
        <Text fontSize={"xl"}>
          <TextWithUnderLine text="A" /> に入る語句は次のうちどれか？
        </Text>
        <Sentence words={question.sentence} underLineText="A" />
      </ContentBox>
      <ContentBox>
        <AnswerControl questionId={question.id} answers={question.answers} />
      </ContentBox>
    </Stack>
  );
}
