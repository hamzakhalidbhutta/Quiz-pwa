import { useContext, useEffect, useState } from "react";
import { quizContext } from "./store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "./Types";

function App() {
  const { quiz, GetQuizDataDispatcher }: any = useContext(quizContext);
  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
    setQuizData(quiz);
  }, []);
  console.log(quizData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      {quizData ? (
        <div>
          {quizData.loading ? (
            <h2>Loading</h2>
          ) : quizData.error ? (
            <h2>{quizData.error}</h2>
          ) : (
            <h2>
              {quizData.data != null || quizData.data != undefined
                ? quizData.data.map((v: any, i: any) => {
                    return <h2 key={i}>{v.category}</h2>;
                  })
                : null}
            </h2>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
