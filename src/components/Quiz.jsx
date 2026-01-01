import { useState, useCallback } from "react";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summery from "./Summery.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;

  const quizIsFinished = userAnswers.length === Questions.length;

  const handleAnswerSelection = useCallback((answer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
  }, []);

  const handleTimeout = useCallback(() => {
    handleAnswerSelection(null);
  }, [handleAnswerSelection]);
  if (quizIsFinished) {
    return <Summery userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          QuestionIndex={currentQuestionIndex}
          key={currentQuestionIndex}
          onSelectAnswer={handleAnswerSelection}
          onSkipQuestion={handleTimeout}
        />
      </div>
    </div>
  );
}
