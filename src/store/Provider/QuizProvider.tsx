import { useReducer } from "react";
import { AMOUNT, DIFFICULTY, TYPE } from "../../Types";
import { quizContext } from "../Context/QuizContext";

import { QuizDataDispatcher } from "../Dispatchers/QuizDispatcher";
import { INITIAL_QUIZ_STATE } from "../InitialState/QuizInitialState";
import { quizReducer } from "../Reducer/QuizReducer";
export const GlobalProvider = ({ children }: any) => {
  const [quiz, dispatch]: any = useReducer(quizReducer, INITIAL_QUIZ_STATE);

  const GetQuizDataDispatcher = (
    amount: AMOUNT,
    difficulty: DIFFICULTY,
    type: TYPE
  ) => {
    QuizDataDispatcher(amount, difficulty, type, dispatch);
  };

 
  return (
    <quizContext.Provider value={{ quiz, GetQuizDataDispatcher }}>
      {children}
    </quizContext.Provider>
  );
};

