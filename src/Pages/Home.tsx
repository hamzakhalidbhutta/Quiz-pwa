const Home = ({ state: { loading, data, error } }: any) => {
  console.log(data);
  return (
    <div className="Home">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <h2>
          {data != null || data != undefined
            ? data.map((v: any, i: any) => {
                return <span key={i}>{v.quiz_question}</span>;
              })
            : null}
        </h2>
      )}
    </div>
  );
};

export default Home;
