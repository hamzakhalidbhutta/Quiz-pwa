const Quiz = ({ quizData }: any) => {
  console.log(quizData);
  return (
    <div className="Quiz">
      {quizData &&
        quizData.length &&
        quizData.map((v: any, i: any) => {
          return (
            <h2 key={i}>
              {v.quiz_question
                .replace(/&#039;/g, "'")
                .replace(/&quot;/g, '"')
                .replace(/&eacute;/g, "é")}
            </h2>
          );
        })}
    </div>
  );
};

export default Quiz;
