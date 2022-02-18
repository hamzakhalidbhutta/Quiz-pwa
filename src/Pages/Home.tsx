import { useContext, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { QuizContext } from "../store/Context/QuizContext";
import { TimerContext } from "../store/Context/TimerContext";
import { AMOUNT, DIFFICULTY, TYPE } from "../Types";

const Home = () => {
  const {
    QuizState: { quiz },
    GetQuizDataDispatcher,
  }: any = useContext(QuizContext);
  const {
    TimerState: { time },
    startTimer,
  }: any = useContext(TimerContext);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);
  return (
    <div className="Home">
      {" "}
      <Header />
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          startTimer();
        }}
      >
        Start Quiz
      </button> */}
      <Main state={quiz} />
    </div>
  );
};

export default Home;
