import { Text } from "@chakra-ui/react";

interface IProps {
  /**
   * 語句
   */
  word: string;
}

/**
 * 単語
 *
 * @returns React コンポーネント
 *
 * @author nagisano33
 */
export function Word({ word }: IProps) {
  return <Text display={"inline-flex"}>{word}</Text>;
}
