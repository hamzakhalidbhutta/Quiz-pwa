import { useContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import { quizContext } from "./store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "./Types";

function App() {
  const { quizState:{quiz}, GetQuizDataDispatcher }: any = useContext(quizContext);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      <Home state={quiz} />
    </div>
  );
}

export default App;
