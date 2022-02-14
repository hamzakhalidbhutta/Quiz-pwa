import axios from "axios";
import { fetchApi } from "../Api";
import { AMOUNT, DIFFICULTY, TYPE } from "../Types";
export const FetchData = async (
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE
) => {
  
  try {
    const QUIZ_API = await fetchApi(amount, difficulty, type);
    return await HttpRequest(QUIZ_API);
    
  } catch (error) {
    console.log(error);
  }
};

const HttpRequest = async (url: string) => {

  const {
    data: { results: questions },
  } = await axios.get(url);

  return questions;
};


