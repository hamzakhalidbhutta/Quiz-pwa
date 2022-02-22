import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../store/Context/TimerContext";

const Quiz = ({ data }: any) => {
  const {
    TimerState: { time },
    stopTimer,
    checkTimer,
  }: any = useContext(TimerContext);
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

  let questionNumber = useRef(0);
  return (
    <section className="Quiz">
      <h5>
        {Math.floor(time.counter / 60)} : {time.counter} /{" "}
        {Math.ceil(time.total_duration / 60)} : 00
      </h5>

      {data &&
        data.length &&
        data.map((v: any, i: any) => {
          //   return (
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
                <button>
                  {v.answers[0][0]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button>
                  {v.answers[0][1]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button>
                  {v.answers[0][2]
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")
                    .replace(/&shy;/g, " ")}
                </button>
                <br /> <br />
                <button>
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
          onClick={(e) => {
            e.preventDefault();
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
