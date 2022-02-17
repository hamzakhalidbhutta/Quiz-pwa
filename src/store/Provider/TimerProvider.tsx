import { useReducer } from "react";
import { AMOUNT, DIFFICULTY, TYPE } from "../../Types";
import { TimerContext } from "../Context/TimerContext";
import { INITIAL_TIMER_STATE } from "../InitialState/TimerInitialState";

import { TimerReducer } from "../Reducer/TimerReducer";
export const TimerProvider = ({ children }: any) => {
  const [TimerState, TimerDispatch]: any = useReducer(
    TimerReducer,
    INITIAL_TIMER_STATE
  );

  const setTimerDispatcher = (
    amount: AMOUNT,
    difficulty: DIFFICULTY,
    type: TYPE
  ) => {
    TimerSetUnsetDispatcher(amount, difficulty, type, TimerDispatch);
  };

  return (
    <TimerContext.Provider value={{ TimerState, setTimerDispatcher }}>
      {children}
    </TimerContext.Provider>
  );
};
function TimerSetUnsetDispatcher(
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE,
  TimerDispatch: any
) {
  throw new Error("Function not implemented.");
}
