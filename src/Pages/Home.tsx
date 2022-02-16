import Quiz from "../Components/Quiz";

const Home = ({ state: { loading, data, error } }: any) => {
  // console.log(data);
  return (
    <div className="Home">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Quiz quizData={data}/>
      )}
    </div>
  );
};

export default Home;
