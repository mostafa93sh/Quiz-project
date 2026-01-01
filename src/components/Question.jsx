import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Question({
  QuestionIndex,
  onSelectAnswer,
  onSkipQuestion,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  const currentQuestion = QUESTIONS[QuestionIndex];

  const handleAnswerSelection = (selectedAnswer) => {
    setAnswer({
      selectedAnswer: selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: selectedAnswer,
        isCorrect: selectedAnswer === QUESTIONS[QuestionIndex].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer) {
    answerState =
      answer.isCorrect === null
        ? "answered"
        : answer.isCorrect
        ? "correct"
        : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={`timer-${answer.selectedAnswer}-${answer.isCorrect}`}
        timeout={timer}
        onTimeout={answer.selectedAnswer ? null : onSkipQuestion}
        mode={answerState}
      />
      <h2>{currentQuestion?.text}</h2>
      <Answers
        answers={currentQuestion?.answers}
        onAnswerSelect={handleAnswerSelection}
        answerState={answerState}
        userAnswer={answer.selectedAnswer}
      />
    </div>
  );
}
