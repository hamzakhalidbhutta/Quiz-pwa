import axios from "axios";
import { fetchApi } from "../Api";
import {
  AMOUNT,
  DIFFICULTY,
  ERRORS_TYPE,
  REQUEST_ACTION,
  TYPE,
} from "../Types";
export const FetchData = async (
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE,
  dispatch: any
) => {
  try {
    const QUIZ_API = await fetchApi(amount, difficulty, type);
    return await HttpRequest(QUIZ_API);
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

const HttpRequest = async (url: string) => {
  const {
    data: { results: questions },
  } = await axios.get(url);

  return questions;
};
