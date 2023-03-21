import data from "../data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="classname">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
        <div className="list">
          {data.map((movie) => {
            <MovieCard movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
