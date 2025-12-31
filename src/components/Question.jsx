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
  //   const [answerState, setAnswerState] = useState("");
  //   const [userAnswers, setUserAnswers] = useState([]);
  //   const currentQuestionIndex =
  //     answerState === "" ? userAnswers.length : userAnswers.length - 1;
  //   const currentQuestion = QUESTIONS[currentQuestionIndex];

  //   const handleAnswerSelection = useCallback(
  //     (answer) => {
  //       setAnswerState("answered");
  //       setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

  //       setTimeout(() => {
  //         if (answer === currentQuestion.answers[0]) {
  //           setAnswerState("correct");
  //         } else {
  //           setAnswerState("wrong");
  //         }
  //         setTimeout(() => {
  //           setAnswerState("");
  //         }, 2000);
  //       }, 1000);
  //     },
  //     [currentQuestion]
  //   );
  //   const handleTimeout = useCallback(() => {
  //     handleAnswerSelection(null);
  //   }, [handleAnswerSelection]);
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipQuestion} />
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
