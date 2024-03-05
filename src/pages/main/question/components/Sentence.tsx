import { Box, Text } from "@chakra-ui/react";
import { TextWithUnderLine } from "./TextWithUnderLine";
import { Word } from "./Word";

interface IProps {
  /**
   * 単語リスト
   */
  words: string[];

  /**
   * 下線表示するテキスト
   */
  underLineText: string;
}

/**
 * word が空欄を意味するかどうかを返す
 * @param word 単語
 * @returns 空欄を意味するかどうか
 */
function isBlank(word: string) {
  return /{{A}}/.exec(word);
}

/**
 * 問題文
 *
 * @author nagisano33
 */
export function Sentence({ words, underLineText }: IProps) {
  return (
    <Box display={"flex"} gap={1}>
      {words.map((word, index) =>
        isBlank(word) ? (
          <TextWithUnderLine text={underLineText} key={index} />
        ) : (
          <Word key={index} word={word} />
        )
      )}
    </Box>
  );
}
