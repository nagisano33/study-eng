import { Question } from "../../types/Question";

/**
 * 問題の定義
 *
 * @author nagisano33
 */
export const questions: Question[] = [
  {
    id: 1,
    type: "MultipleChoice",
    sentence: ["I", "{{A}}", "from", "Japan", "."],
    answers: [
      {
        answerId: "A",
        text: "be",
      },
      {
        answerId: "B",
        text: "am",
        isCorrect: true,
      },
      {
        answerId: "C",
        text: "is",
      },
      {
        answerId: "D",
        text: "are",
      },
    ],
    explanation: "",
  },
];
