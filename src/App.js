import React, { useState } from "react";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Stat = ({ text, count }) => {
  return (
    <span>
      {text} {count}
    </span>
  );
};

const Feedback = ({ counts }) => {
  return (
    <>
      <Stat text="good" count={counts[0]} />
      <br />
      <Stat text="neutral" count={counts[1]} />
      <br />
      <Stat text="bad" count={counts[2]} />
    </>
  );
};

const App = () => {
  const unicafe = {
    feedback: {
      title: "give feedback",
    },
    statistics: {
      title: "statistics",
    },
  };
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title={unicafe.feedback.title} />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Header title={unicafe.statistics.title} />
      <Feedback counts={[good, neutral, bad]} />
    </div>
  );
};

export default App;
