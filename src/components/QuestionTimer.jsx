import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const end = Date.now() + timeout;

    const interval = setInterval(() => {
      const remaining = Math.max(0, end - Date.now());
      setRemainingTime(remaining);
      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 100);

    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  return (
    <progress
      value={remainingTime}
      max={timeout}
      id="question-timer"
      className={mode}
    />
  );
}
