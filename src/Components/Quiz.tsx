import { useContext, useEffect, useRef, useState } from "react";
import { ResultContext } from "../store/Context/ResultContext";
import { TimerContext } from "../store/Context/TimerContext";

const Quiz = ({ data }: any) => {
  const {
    TimerState: { time },
    stopTimer,
    checkTimer,
  }: any = useContext(TimerContext);

  const {
    ResultState: { result },
    SetAnswerDispatcher,
    CompileResultDispatcher,
  }: any = useContext(ResultContext);

  useEffect(() => {
    setInterval(
      () => {
        checkTimer();
      },
      1000,
      time.total_duration
    );
  }, []);
  useEffect(() => {
    if (
      time.counter > time.total_duration ||
      questionNumber.current >= data.length
    ) {
      stopTimer();
    }
  });
  const questionNumber = useRef(0);
  const [attempted, setAttempted] = useState(false);
  console.log(result);
  return (
    <section className="Quiz">
      <h5>
        {Math.floor(time.counter / 60)} : {time.counter} /{" "}
        {Math.ceil(time.total_duration / 60)} : 00
      </h5>

      {data &&
        data.length &&
        data.map((v: any, i: any) => {
          if (i == questionNumber.current) {
            return (
              <div key={i}>
                <h2>
                  {v.quiz_question
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </h2>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAttempted(true);
                    SetAnswerDispatcher(
                      v.quiz_question,
                      v.answers[0][0],
                      v.correct_answer
                    );
                  }}
                >
                  {v.answers[0][0]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAttempted(true);
                    SetAnswerDispatcher(
                      v.quiz_question,
                      v.answers[0][1],
                      v.correct_answer
                    );
                  }}
                >
                  {v.answers[0][1]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAttempted(true);
                    SetAnswerDispatcher(
                      v.quiz_question,
                      v.answers[0][2],
                      v.correct_answer
                    );
                  }}
                >
                  {v.answers[0][2]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAttempted(true);
                    SetAnswerDispatcher(
                      v.quiz_question,
                      v.answers[0][3],
                      v.correct_answer
                    );
                  }}
                >
                  {v.answers[0][3]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
              </div>
            );
          }
        })}

      <div>
        <button
          disabled={!attempted}
          onClick={(e) => {
            e.preventDefault();
            setAttempted(false);
            questionNumber.current = questionNumber.current + 1;
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Quiz;
