import { TIMER_ACTION } from "../../Types";

export const TimerReducer = (state: any, action: any) => {
  switch (action.type) {
    case TIMER_ACTION.START:
      console.log("The Quiz has stated");
      return {
        ...state,
        time: {
          ...state.time,
          start: true,
        },
      };

    case TIMER_ACTION.PAUSE:
      return {
        ...state,
        time: {
          ...state.time,
          pause: true,
        },
      };
    case TIMER_ACTION.STOP:
      return {
        ...state,
        time: {
          ...state.time,
          stop: true,
        },
      };
    case TIMER_ACTION.INCREMENT:
      return {
        ...state,
        time: {
          ...state.time,
          counter: state.payload.counter + 1,
        },
      };
    default:
      return state;
  }
};
