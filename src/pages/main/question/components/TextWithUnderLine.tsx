import { Text } from "@chakra-ui/react";

interface IProps {
  text: string;
}

/**
 * 問題文の空欄
 *
 * @author nagisano33
 */
export function TextWithUnderLine({ text }: IProps) {
  return <Text as={"u"}>&emsp;{text}&emsp;</Text>;
}
