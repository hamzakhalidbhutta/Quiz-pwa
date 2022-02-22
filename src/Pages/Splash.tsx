import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimerContext } from "../store/Context/TimerContext";

const Splash = () => {
  const { resetTimer }: any = useContext(TimerContext);
  useEffect(() => {
    resetTimer();
  }, []);
  return (
    <div>
      <h1>Welcome To Quiz</h1>
      <h2>
        You will be provided with 9 questions and 2 min's to attempt the quiz.
      </h2>
      <h3>Press Start to start the quiz.</h3>
      <Link to="/home">Go To Quiz</Link>
    </div>
  );
};

export default Splash;
