const Home = ({ state: { loading, data, error } }: any) => {
  // console.log(data);
  return (
    <div className="Home">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <h2>
          {data &&
            data.length &&
            data.map((v: any, i: any) => {
              return (
                <span key={i}>
                  {v.quiz_question
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&eacute;/g, "é")}
                </span>
              );
            })}
        </h2>
      )}
    </div>
  );
};

export default Home;
