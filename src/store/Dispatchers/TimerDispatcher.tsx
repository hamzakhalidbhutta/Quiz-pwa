import { TIMER_ACTION } from "../../Types";

export const startTimerDispatcher = async (dispatch: any) => {
  dispatch({
    type: TIMER_ACTION.START,
  });
};
export const pauseTimerDispatcher = async (dispatch: any) => {
  dispatch({
    type: TIMER_ACTION.PAUSE,
  });
};
export const stopTimerDispatcher = async (dispatch: any) => {
  dispatch({
    type: TIMER_ACTION.STOP,
  });
};
export const checkTimerDispatcher = async (dispatch: any, counter: number) => {
  dispatch({
    type: TIMER_ACTION.INTERVAL,
    payload: {
      counter,
    },
  });
};

export const resetTimerDispatcher = async (dispatch: any) => {
  dispatch({
    type: TIMER_ACTION.RESET,
  });
};
