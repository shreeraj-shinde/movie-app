import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
        <div className="list">
          {data.map((movie) => {
            {
              console.log(movie.imdbID);
            }
            return <MovieCard movie={movie} key={movie.imdbID} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
