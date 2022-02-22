import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div>
      <h1>Welcome To Quiz</h1>
      <h2>
        You will be provided with 9 questions and 2 minsto attempt the quiz.
      </h2>
      <h3>Press Start to start the quiz.</h3>
      <Link to="/home">Go To Quiz</Link>
    </div>
  );
};

export default Splash;
