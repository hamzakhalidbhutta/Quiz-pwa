import { AMOUNT, DIFFICULTY, TYPE } from "../Types";

function constructApi(
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE
): string {
  return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
}

export const fetchApi = (
  amount: AMOUNT,
  difficulty: DIFFICULTY,
  type: TYPE
): string => {
  return constructApi(amount, difficulty, type);
};
