import { Stack } from "@chakra-ui/layout";
import { AnswerButton } from "./AnswerButton";
import { Answer } from "../../../../types/Answer";

interface Props {
  /**
   * 質問 ID
   */
  questionId: number;

  /**
   * 問題リスト
   */
  answers: Answer[];
}

/**
 * 回答コントローラ
 *
 * @author nagisano33
 */
export function AnswerControl({ questionId, answers }: Props) {
  return (
    <Stack>
      {answers.map((answer) => (
        <AnswerButton
          key={answer.answerId}
          questionId={questionId}
          answerId={answer.answerId}
          text={answer.text}
        />
      ))}
    </Stack>
  );
}
