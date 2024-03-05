import { Link, Stack, Text } from "@chakra-ui/react";
import { ContentBox } from "../../../components/ContentBox";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { UseExplanationPageQueryReturn } from "../hooks/useExplanationPageQuery";
import { Sentence } from "../../question/components/Sentence";

type Props = Pick<
  UseExplanationPageQueryReturn,
  "isCorrect" | "sentence" | "correctAnswer" | "usersAnswer"
>;

/**
 * ユーザの選択結果を表示するコンポーネント
 * 
 * @param param0 プロパティ
 * @returns コンポーネント１
 * 
 * @author nagisano33
 */
export function UserResult({
  isCorrect,
  correctAnswer,
  sentence,
  usersAnswer,
}: Props) {
  return (
    <ContentBox>
      <Text fontSize={"2xl"} color={isCorrect ? "green" : "red"}>
        {isCorrect ? "⭕️ 正解！" : "❌ 不正解！"}
      </Text>
      <Stack gap={1}>
        <Text fontSize={"xl"} color={"orange"}>
          問題文
        </Text>
        <Sentence words={sentence} underLineText={correctAnswer} />
        <Link
          paddingX={3}
          href="https://www.deepl.com/ja/translator#en/ja/I am from Japan."
          isExternal
        >
          和訳を表示 <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>
      <Stack gap={1}>
        <Text fontSize={"xl"} color={"orange"}>
          あなたの答え
        </Text>
        <Text paddingX={3}>{usersAnswer}</Text>
      </Stack>
    </ContentBox>
  );
}
