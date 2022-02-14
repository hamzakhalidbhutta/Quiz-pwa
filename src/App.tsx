import { useContext, useEffect } from "react";
import { quizContext } from "./store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "./Types";

function App() {
  const context: any = useContext(quizContext);
  useEffect(() => {
    async function getData() {
      await context.GetQuizDataDispatcher(
        AMOUNT.TEN,
        DIFFICULTY.EASY,
        TYPE.MULTIPLE
      );
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>

      <div>
        {context.quiz.loading ? (
          <h2>Loading</h2>
        ) : context.quiz.error ? (
          <h2>{context.quiz.error}</h2>
        ) : (
          <h2>Data</h2>
        )}
      </div>
    </div>
  );
}

export default App;
