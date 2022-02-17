import { createContext } from "react";
import { INITIAL_QUIZ_STATE } from "../InitialState/QuizInitialState";

export const QuizContext: any = createContext(INITIAL_QUIZ_STATE);
