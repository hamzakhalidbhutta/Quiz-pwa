import { useContext, useEffect, useRef, useState } from "react";
import { TimerContext } from "../store/Context/TimerContext";

const Quiz = ({ data }: any) => {
  const {
    TimerState: { time },
    stopTimer,
    checkTimer,
  }: any = useContext(TimerContext);
  useEffect(() => {
    setInterval(() => {
      checkTimer();
    }, 1000);
  }, []);
  useEffect(() => {
    if (time.counter > time.total_duration) {
      stopTimer();
    }
  });
  return (
    <section className="Quiz">
      <h5>
        {Math.floor(time.counter / 60)} : {time.counter} /{" "}
        {Math.ceil(time.total_duration / 60)} : 00
      </h5>

      {data &&
        data.length &&
        data.map((v: any, i: any) => {
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
        })}
    </section>
  );
};

export default Quiz;
