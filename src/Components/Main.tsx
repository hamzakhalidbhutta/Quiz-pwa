import Quiz from "./Quiz";

const Main = ({ state: { loading, data, error } }: any) => {
  return (
    <main className="Main">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Quiz data={data} />
      )}
    </main>
  );
};

export default Main;
