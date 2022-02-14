import { useReducer } from "react";
import { quizContext } from "../Context/QuizContext";
import { INITIAL_QUIZ_STATE } from "../InitialState/QuizInitialState";
import {
  AMOUNT,
  DIFFICULTY,
  ERRORS_TYPE,
  REQUEST_ACTION,
  TYPE,
} from "../../Types";
import { FetchData } from "../../Utils/FetchData";
import { quizReducer } from "../Reducer/QuizReducer";
export const GlobalProvider = ({ children }: any) => {
  const [quiz, dispatch]: any = useReducer(quizReducer, INITIAL_QUIZ_STATE);

  const GetQuizDataDispatcher = async (
    amount: AMOUNT,
    difficulty: DIFFICULTY,
    type: TYPE
  ) => {
    dispatch({
      type: REQUEST_ACTION.LOADING,
    });
    try {
      const response = await FetchData(amount, difficulty, type);
      if (response) {
        dispatch({
          type: REQUEST_ACTION.SUCCESS,
          payload: {
            data: await response,
          },
        });
      }
    } catch (error: any) {
      dispatch({
        type: REQUEST_ACTION.FAIL,
        payload: {
          error: error.response
            ? error.response.data
            : ERRORS_TYPE.CONNECTION_ERROR,
        },
      });
    }
  };
  return (
    <quizContext.Provider value={{ quiz, GetQuizDataDispatcher }}>
      { children }
    </quizContext.Provider>
  );
};
