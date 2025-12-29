import { useState } from "react";
import Question from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = Question[currentQuestionIndex];
  const quizIsFinished = userAnswers.length === Question.length;

  function handleAnswerSelection(answer) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
  }

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
