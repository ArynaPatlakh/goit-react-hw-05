import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMOvie } from "../../api/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsMOvie(movieId);
      setMovieReviews(data);
    };
    getData();
  }, [movieId]);

  if (!movieReviews) {
    return null;
  }

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Reviews</h3>
      {movieReviews.total_results == 0 ? (
        <p className={s.any}>Any reviews yet</p>
      ) : (
        <ul className={s.list}>
          {movieReviews.results.map((result) => (
            <li key={result.id} className={s.item}>
              <h4 className={s.item_title}>{result.author}</h4>
              <p className={s.item_text}>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
