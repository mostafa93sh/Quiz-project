import { useState, useCallback } from "react";
import Question from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = Question[currentQuestionIndex];
  const quizIsFinished = userAnswers.length === Question.length;

  const handleAnswerSelection = useCallback((answer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
  }, []);
  const handleTimeout = useCallback(() => {
    handleAnswerSelection(null);
  }, [handleAnswerSelection]);
  if (quizIsFinished) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz-finished" />
        <h2>Quiz Finished!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...currentQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={currentQuestionIndex}
          timeout={10000}
          onTimeout={handleTimeout}
        />
        <h2>{currentQuestion?.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswerSelection(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
