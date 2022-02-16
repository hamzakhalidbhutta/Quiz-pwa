const Quiz = ({ quizData }: any) => {
  return (
    <div className="Quiz">
      {quizData &&
        quizData.length &&
        quizData.map((v: any, i: any) => {
          return (
            <div key={i}>
              <h2>
                {v.quiz_question
                  .replace(/&#039;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&eacute;/g, "é")}
              </h2>
              <button>
                {v.answers[0][0]
                  .replace(/&#039;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&eacute;/g, "é")}
              </button>
              <br /> <br />
              <button>
                {v.answers[0][1]
                  .replace(/&#039;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&eacute;/g, "é")}
              </button>
              <br /> <br />
              <button>
                {v.answers[0][2]
                  .replace(/&#039;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&eacute;/g, "é")}
              </button>
              <br /> <br />
              <button>
                {v.answers[0][3]
                  .replace(/&#039;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&eacute;/g, "é")}
              </button>
              <br /> <br />
            </div>
          );
        })}
    </div>
  );
};

export default Quiz;
