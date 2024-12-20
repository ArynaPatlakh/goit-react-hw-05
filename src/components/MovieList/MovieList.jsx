
import { Link } from "react-router-dom";
import s from "./MovieList.module.css"

const MovieList = ({movies}) => {

  return (
    <div>
      <h2>Trending today</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className={s.link} to={`movies/${movie.id.toString()}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
