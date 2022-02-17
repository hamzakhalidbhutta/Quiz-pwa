import { TIMER_ACTION } from "../../Types";

export const TimerDispatcher = async (dispatch: any) => {
  dispatch({
    type: TIMER_ACTION.START,
  });
  try {
    dispatch({
      type: TIMER_ACTION.STOP,
    });
  } catch (error: any) {
    dispatch({
      type: TIMER_ACTION.PAUSE,
    });
  }
};
