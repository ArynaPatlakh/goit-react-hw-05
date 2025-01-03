import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { detailsMovie } from "../../api/api";
import { Suspense, useEffect, useRef, useState } from "react";
import s from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetail, setMovieDetail] = useState(null);

  const backLinkHref = useRef(location.state ?? "/movies");
  const url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getData = async () => {
      const data = await detailsMovie(movieId);
      setMovieDetail(data);
    };
    getData();
  }, [movieId]);

  if (!movieDetail) {
    return;
  }
  return (
    <div>
      <Link to={backLinkHref.current}>GO BACK</Link>
      <div className={s.wrapper}>
        <img src={`${url}${movieDetail.poster_path}`} className={s.image} />
        <div className={s.info}>
          <div>
            <h2 className={s.title}>{movieDetail.title}</h2>
            <p>User Score: {movieDetail.vote_average}</p>
          </div>
          <div>
            <h3 className={s.second_title}>Overview</h3>
            <p>{movieDetail.overview}</p>
          </div>
          <div>
            <h3 className={s.second_title}>Genres</h3>
            <ul className={s.list}>
              {movieDetail.genres.map((gener) => (
                <li key={gener.id}>{gener.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h4 className={s.additional}>Addittional Information</h4>
        <nav>
          <Suspense fallback={<h2>Loading</h2>}>
            <Link to="cast">Cast </Link>
            <Link to="reviews">Reviews</Link>
          </Suspense>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
