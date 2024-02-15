import { Box, Text } from "@chakra-ui/react";
import { Blank } from "./Blank";
import { Word } from "./Word";

interface IProps {
  /**
   * 単語リスト
   */
  words: string[];
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
export function Sentence({ words }: IProps) {
  return (
    <Box display={"flex"} gap={1}>
      {words.map((word, index) =>
        isBlank(word) ? <Blank key={index} /> : <Word key={index} word={word} />
      )}
    </Box>
  );
}
