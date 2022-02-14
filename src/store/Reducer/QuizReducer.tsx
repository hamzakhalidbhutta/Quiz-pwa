import { REQUEST_ACTION } from "../../Types";
import { shuffleArray } from "../../Utils/shuffleArray";

export const quizReducer = (state: any, action: any) => {
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
      const data = action.payload.data.map((v: any, i: number) => ({
        quiz_question: v.question,
        correct_answer: v.correct_answer,
        answers: [shuffleArray([...v.incorrect_answers, v.correct_answer])],
      }));

      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          data,
        },
      };

    default:
      return state;
  }
};
