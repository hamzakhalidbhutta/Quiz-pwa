import { useReducer } from "react";
import {
  AMOUNT,
  DIFFICULTY,
  ERRORS_TYPE,
  REQUEST_ACTION,
  TYPE,
} from "../../Types";
import { FetchData } from "../../Utils/FetchData";

export const QuizDataDispatcher = async (
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE,
  dispatch: any
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
