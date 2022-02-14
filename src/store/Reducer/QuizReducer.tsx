import { REQUEST_ACTION } from "../../Types";

export const quizReducer = async (state: any, action: any) => {
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
          error: action.payload.error,
        },
      };
    case REQUEST_ACTION.SUCCESS:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};
