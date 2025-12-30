import { useState, useCallback } from "react";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  //   const [userAnswers, setUserAnswers] = useState([]);
  //   const [answerState, setAnswerState] = useState("");
  //   const currentQuestionIndex =
  //     answerState === "" ? userAnswers.length : userAnswers.length - 1;
  //   const currentQuestion = Questions[currentQuestionIndex];
  //   const quizIsFinished = userAnswers.length === Questions.length;

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
  //   if (quizIsFinished) {
  //     return (
  //       <div id="summary">
  //         <img src={quizCompleteImg} alt="quiz-finished" />
  //         <h2>Quiz Finished!</h2>
  //       </div>
  //     );
  //   }

  return (
    <div id="quiz">
      <div id="question">
        {/* <QuestionTimer
          key={currentQuestionIndex}
          timeout={10000}
          onTimeout={handleTimeout}
        />
        <h2>{currentQuestion?.text}</h2>
        <Answers
          answers={currentQuestion?.answers}
          onAnswerSelect={handleAnswerSelection}
          answerState={answerState}
          userAnswer={userAnswers[currentQuestionIndex]}
        /> */}
        <Question />
      </div>
    </div>
  );
}
