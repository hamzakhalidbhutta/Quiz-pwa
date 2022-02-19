import { createContext } from "react";
import { INITIAL_TIMER_STATE } from "../InitialState/TimerInitialState";

export const TimerContext: any = createContext(INITIAL_TIMER_STATE);
