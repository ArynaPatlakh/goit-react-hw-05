import { useEffect, useState } from "react";
import { fetchTopMovies } from "../../api/api";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTopMovies();
      setMovies(data);
    };
    getData();
  }, []);

  if (!movies) {
    return;
  }

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
