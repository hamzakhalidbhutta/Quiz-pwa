import { useContext, useEffect, useState } from "react";
import { quizContext } from "./store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "./Types";


function App() {
  const context: any = useContext(quizContext);
  const [quizData, setQuiz] = useState({});
  useEffect(() => {
    async function getData() {
      setQuiz(
        await context.GetQuizDataDispatcher(
          AMOUNT.TEN,
          DIFFICULTY.EASY,
          TYPE.MULTIPLE
        )
      );
      
    console.log(await context.quiz)
    }
    getData();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Quiz App</h1>

      </header>

    <div>
      {
         context.quiz.loading? <h2>Loading</h2>  :   <h2>Data</h2>   }
    </div>
    </div>
  );
}

export default App;
