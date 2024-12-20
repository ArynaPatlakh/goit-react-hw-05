import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTopMovies } from "../../api/api";

const HomePage = () => {
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
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
