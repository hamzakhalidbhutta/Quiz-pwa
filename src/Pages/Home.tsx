import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { QuizContext } from "../store/Context/QuizContext";
import { ResultContext } from "../store/Context/ResultContext";
import { TimerContext } from "../store/Context/TimerContext";
import { AMOUNT, DIFFICULTY, TYPE } from "../Types";

const Home = (): any => {
  const {
    QuizState: { quiz },
    GetQuizDataDispatcher,
  }: any = useContext(QuizContext);
  const {
    TimerState: { time },
    startTimer,
    stopTimer,
    pauseTimer,
  }: any = useContext(TimerContext);
  const {
    ResultState: { result },
  }: any = useContext(ResultContext);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);

  return (
    <div className="Home">
      {" "}
      <Header />
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
        <>
          <h2>Your score is {result.score}</h2>
          <h3> Quiz Ended</h3>
        </>
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
