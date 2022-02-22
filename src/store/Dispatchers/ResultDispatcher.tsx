import { RESULT_ACTION } from "../../Types";

export const AnserAttemptDispatcher = async (
  dispatch: any,
  question: string,
  attempt: string,
  correct: string
) => {
  dispatch({
    type: RESULT_ACTION.ATTEMPT,
    payload: {
      question,
      attempt,
      correct,
    },
  });
};
export const resultCompileDispatcher = async (dispatch: any) => {
  dispatch({
    type: RESULT_ACTION.COMPILE,
  });
};

