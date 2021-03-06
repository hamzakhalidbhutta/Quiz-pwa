import { TIMER_ACTION } from "../../Types";

export const TimerReducer = (state: any, action: any) => {
  switch (action.type) {
    case TIMER_ACTION.START:
      return {
        ...state,
        time: {
          ...state.time,
          start: true,
          pause: false,
          stop: false,
        },
      };

    case TIMER_ACTION.PAUSE:
      return {
        ...state,
        time: {
          ...state.time,
          start: false,
          pause: true,
          stop: false,
        },
      };
    case TIMER_ACTION.STOP:
      return {
        ...state,
        time: {
          ...state.time,
          start: false,
          pause: false,
          stop: true,
        },
      };
    case TIMER_ACTION.INTERVAL:
      return {
        ...state,
        time: {
          ...state.time,
          counter: state.time.counter + 1,
        },
      };
    case TIMER_ACTION.RESET:
      return {
        time: {
          start: false,
          pause: false,
          stop: false,
          counter: 0,
          total_duration: 120, // secs equal to 1.5 mins
          started_at: null,
          ended_at: null,
        }
      }
    default:
      return state;
  }
};
