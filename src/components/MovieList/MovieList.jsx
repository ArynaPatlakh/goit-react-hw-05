import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, title, link }) => {
  const location = useLocation();
  return (
    <div>
      <h2>{title}</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={s.link}
              to={`${link}${movie.id.toString()}`}
              state={location}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
