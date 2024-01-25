import { Button } from "@chakra-ui/button";
import { useCallback } from "react";
import { AnswerId } from "../../../../types/AnswerId";

/**
 * 回答ボタンプロパティ
 */
export interface IAnswerButtonProperty {
  /**
   * テキスト
   */
  text: string;

  /**
   * 回答 ID
   */
  answerId: AnswerId;

  /**
   * クリック時のコールバック
   */
  onClick?: () => void;
}

/**
 * 回答ボタン
 *
 * @author nagisano33
 */
export function AnswerButton({
  text,
  answerId,
  onClick = () => undefined,
}: IAnswerButtonProperty) {
  const getColor = useCallback(() => {
    switch (answerId) {
      case "A":
        return "blue";
      case "B":
        return "orange";
      case "C":
        return "teal";
      case "D":
        return "purple";
    }
  }, [answerId]);

  return (
    <Button
      flex={1}
      whiteSpace={"unset"}
      overflowWrap={"break-word"}
      wordBreak={"break-word"}
      variant={"outline"}
      height={"inherit"}
      minHeight={"2.5em"}
      colorScheme={getColor()}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
