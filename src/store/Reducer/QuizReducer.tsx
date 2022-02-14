import { REQUEST_ACTION, TRANSECTION_ACTION } from "../../Types";
import { FetchData } from "../../Utils/FetchData";

export const quizReducer = async (state: any, action: any) => {
  let totalBalance: number = 0;
  switch (action.type) {
    case REQUEST_ACTION.LOADING:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: true,
        },
      };
    case REQUEST_ACTION.FAIL:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          error : action.payload.error
        },
      };
    case REQUEST_ACTION.SUCCESS:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          data : action.payload.data
        },
      };
    default:
      return state;
  }
};
