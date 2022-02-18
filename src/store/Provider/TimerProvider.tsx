import { useReducer } from "react";
import { TimerContext } from "../Context/TimerContext";
import {
  checkTimerDispatcher,
  pauseTimerDispatcher,
  startTimerDispatcher,
  stopTimerDispatcher,
} from "../Dispatchers/TimerDispatcher";
import { INITIAL_TIMER_STATE } from "../InitialState/TimerInitialState";
import { TimerReducer } from "../Reducer/TimerReducer";
export const TimerProvider = ({ children }: any) => {
  const [TimerState, TimerDispatch]: any = useReducer(
    TimerReducer,
    INITIAL_TIMER_STATE
  );

  const startTimer = () => {
    startTimerDispatcher(TimerDispatch);
  };
  const pauseTimer = () => {
    pauseTimerDispatcher(TimerDispatch);
  };
  const stopTimer = () => {
    stopTimerDispatcher(TimerDispatch);
  };
  const checkTimer = (counter:number) => {
    checkTimerDispatcher(TimerDispatch, counter);
  };
  return (
    <TimerContext.Provider
      value={{ TimerState, startTimer, pauseTimer, stopTimer, checkTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};
