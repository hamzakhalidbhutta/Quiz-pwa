import { useReducer } from "react";
import { AMOUNT, DIFFICULTY, TYPE } from "../../Types";
import { ResultContext } from "../Context/ResultContext";
import {
  AnserAttemptDispatcher,
  resultCompileDispatcher,
} from "../Dispatchers/ResultDispatcher";
import { INITIAL_RESULT_STATE } from "../InitialState/ResultInitialState";
import { ResultReducer } from "../Reducer/ResultReducer";
export const ResultProvider = ({ children }: any) => {
  const [ResultState, ResultDispatch]: any = useReducer(
    ResultReducer,
    INITIAL_RESULT_STATE
  );

  const SetAnswerDispatcher = (
    question: string,
    attempt: string,
    correct: string
  ) => {
    AnserAttemptDispatcher(ResultDispatch, question, attempt, correct);
  };

  const CompileResultDispatcher = () => {
    resultCompileDispatcher(ResultDispatch);
  };
  return (
    <ResultContext.Provider
      value={{ ResultState, SetAnswerDispatcher, CompileResultDispatcher }}
    >
      {children}
    </ResultContext.Provider>
  );
};
