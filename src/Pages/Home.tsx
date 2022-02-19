import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { QuizContext } from "../store/Context/QuizContext";
import { TimerContext } from "../store/Context/TimerContext";
import { AMOUNT, DIFFICULTY, TYPE } from "../Types";

const Home = (): any => {
  const [counter, setCounter] = useState(0);
  const count = useRef(0);
  const {
    QuizState: { quiz },
    GetQuizDataDispatcher,
  }: any = useContext(QuizContext);
  const {
    TimerState: { time },
    startTimer,
    stopTimer,
    pauseTimer,
    checkTimer,
  }: any = useContext(TimerContext);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);

  // useEffect(() => {
  //   if (time.start) {
  //     setInterval(() => {
  //       count.current = count.current + 1;
  //     }, 1000);
  //     setCounter(count.current);
  //   }
  // });

  console.log(count);
  // 60000
  // 180000
  // 18000000
  return (
    <div className="Home">
      {" "}
      <Header />
      <h5>{counter}</h5>
      {time.start && !time.stop && !time.pause ? (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              pauseTimer();
            }}
          >
            Pause Quiz
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              stopTimer();
            }}
          >
            End Quiz
          </button>

          <Main state={quiz} />
        </>
      ) : !time.start && !time.stop && time.pause ? (
        <>
          <h3>Click start to Resume quiz</h3>
          <button
            onClick={(e) => {
              e.preventDefault();
              startTimer();
            }}
          >
            Resume{" "}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              stopTimer();
            }}
          >
            End Quiz
          </button>
        </>
      ) : !time.start && time.stop && !time.pause ? (
        <h3> Quiz Ended</h3>
      ) : !time.start && !time.stop && !time.pause ? (
        <>
          <h3>Click start to start the quiz</h3>
          <button
            onClick={(e) => {
              e.preventDefault();
              startTimer();
            }}
          >
            Start Quiz
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              pauseTimer();
            }}
          >
            Pause Quiz
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              stopTimer();
            }}
          >
            End Quiz
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Home;
