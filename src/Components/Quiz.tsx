const Quiz = ({ data }: any) => {
  
  return (
    <section className="Quiz">
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
