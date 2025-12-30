import { useRef, useState } from "react";
export default function Answers({
  answers,
  onAnswerSelect,
  userAnswer,
  answerState,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = answerState !== "" && userAnswer === answer;
        let cssClass = "";
        if (isSelected) {
          cssClass = "selected";
        }
        if (answerState === "correct" && isSelected) {
          cssClass = "correct";
        }
        if (answerState === "wrong" && isSelected) {
          cssClass = "wrong";
        }

        return (
          <li key={answer} className="answer">
            <button className={cssClass} onClick={() => onAnswerSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
