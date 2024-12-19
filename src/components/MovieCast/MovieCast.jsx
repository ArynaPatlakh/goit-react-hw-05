import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMovie } from "../../api/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [castMovie, setCastMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastMovie(movieId);
      setCastMovie(data);
    };
    getData();
  }, [movieId]);

  if (!castMovie) {
    return null;
  }

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Cast</h3>
      <ul className={s.list}>
        {castMovie.cast.map((achtor) => (
          <li key={achtor.id}>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500${achtor.profile_path}`}
              alt={achtor.name}
            />
            <div className={s.item_wrap}>
              <p>Name: {achtor.name}</p>
              <p>Character: {achtor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
