import { useContext, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { QuizContext } from "../store/Context/QuizContext";
import { AMOUNT, DIFFICULTY, TYPE } from "../Types";

const Home = () => {
  const {
    QuizState: { quiz },
    GetQuizDataDispatcher,
  }: any = useContext(QuizContext);

  useEffect(() => {
    GetQuizDataDispatcher(AMOUNT.TEN, DIFFICULTY.EASY, TYPE.MULTIPLE);
  }, []);
  return (
    <div className="Home">
      {" "}
      <Header />
      <Main state={quiz} />
    </div>
  );
};

export default Home;
