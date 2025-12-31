import quizCompleteImg from "../assets/quiz-complete.png";
import questions from "../questions";
export default function Summery({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );
  //   const wrongAnswers = 100 - skippedAnswers.length - correctAnswers.length;
  const skippedPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz-finished" />
      <h2>Quiz Finished!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else if (answer === null) {
            cssClass += " skipped";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
