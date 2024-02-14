import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedObject = window.localStorage.getItem("key");
    return savedObject !== null
      ? JSON.parse(savedObject)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  const handleReset = () => {
    setClicks({
      ...clicks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "key",
      JSON.stringify({
        good: good,
        neutral: neutral,
        bad: bad,
      })
    );
  }, [clicks]);

  // const startFeedback = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const good = clicks.good;
  const neutral = clicks.neutral;
  const bad = clicks.bad;
  const totalFeedback = good + neutral + bad;
  const calcFeedback = Math.round(((good + neutral) / totalFeedback) * 100);
  const positiveClick = good > 0 || bad > 0 ? calcFeedback : 0;

  return (
    <>
      <Description />
      <Options
        updateValues={updateFeedback}
        feedbackReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveClick}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
