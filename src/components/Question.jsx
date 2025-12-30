import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions.js";
import { useState, useCallback } from "react";

export default function Question({ questionText }) {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswerSelection = useCallback(
    (answer) => {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

      setTimeout(() => {
        if (answer === currentQuestion.answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [currentQuestion]
  );
  const handleTimeout = useCallback(() => {
    handleAnswerSelection(null);
  }, [handleAnswerSelection]);
  return (
    <div id="question">
      <QuestionTimer
        key={currentQuestionIndex}
        timeout={10000}
        onTimeout={handleTimeout}
      />
      <h2>{currentQuestion?.text}</h2>
      <Answers
        key={currentQuestion.text}
        answers={currentQuestion?.answers}
        onAnswerSelect={handleAnswerSelection}
        answerState={answerState}
        userAnswer={userAnswers[currentQuestionIndex]}
      />
    </div>
  );
}
