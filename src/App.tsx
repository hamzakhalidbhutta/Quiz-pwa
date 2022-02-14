import { useContext, useEffect, useState } from "react";
import { quizContext } from "./store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "./Types";

function App() {
  const { quiz, GetQuizDataDispatcher }: any = useContext(quizContext);
  const [quizData, setQuizData] = useState<any>();
  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);

  console.log(quiz);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>

      <div>
        {quiz.loading ? (
          <h2>Loading</h2>
        ) : quiz.error ? (
          <h2>{quiz.quiz.error}</h2>
        ) : (
          <h2>
            {quiz.data
              ? quiz.data.map((v: any, i: any) => {
                  <h2>{i}</h2>;
                })
              : null}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
