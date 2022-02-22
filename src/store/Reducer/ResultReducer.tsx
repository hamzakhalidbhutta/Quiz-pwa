import { resultingClientExists } from "workbox-core/_private";
import { RESULT_ACTION } from "../../Types";

export const ResultReducer = (state: any, action: any) => {
  switch (action.type) {
    case RESULT_ACTION.ATTEMPT:
      let isPresent = false;
      state.result.map((v: any, i: number) => {
        if (v.question == action.payload.question) {
          isPresent = true;
        }
      });
      if (isPresent) {
        return {
          ...state,
          result: state.result.map((v: any, i: number) => {
            if (v.question == action.payload.question) {
              return { ...v, attempt: action.payload.attempt };
            } else {
              return v;
            }
          }),
        };
      } else {
        return {
          ...state,
          result: [...state.result, action.payload],
        };
      }

    case RESULT_ACTION.COMPILE:
      return {
        ...state,
        result: {
          ...state.result,
        },
      };

    default:
      return state;
  }
};