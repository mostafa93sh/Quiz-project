import { useState } from "react";
import Question from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = Question[currentQuestionIndex];

  function handleAnswerSelection(answer) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{currentQuestion?.text}</h2>
        <ul id="answers">
          {currentQuestion?.answers.map((answer) => (
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
