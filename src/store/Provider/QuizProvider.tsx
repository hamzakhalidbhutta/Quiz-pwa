import { useReducer } from "react";
import { AMOUNT, DIFFICULTY, TYPE } from "../../Types";
import { QuizContext } from "../Context/QuizContext";
import { QuizDataDispatcher } from "../Dispatchers/QuizDispatcher";
import { INITIAL_QUIZ_STATE } from "../InitialState/QuizInitialState";
import { QuizReducer } from "../Reducer/QuizReducer";
export const QuizProvider = ({ children }: any) => {
  const [QuizState, QuizDispatch]: any = useReducer(
    QuizReducer,
    INITIAL_QUIZ_STATE
  );

  const GetQuizDataDispatcher = (
    amount: AMOUNT,
    difficulty: DIFFICULTY,
    type: TYPE
  ) => {
    QuizDataDispatcher(amount, difficulty, type, QuizDispatch);
  };

  return (
    <QuizContext.Provider value={{ QuizState, GetQuizDataDispatcher }}>
      {children}
    </QuizContext.Provider>
  );
};
