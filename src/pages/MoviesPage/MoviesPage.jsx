import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  // const [searchMovie, setSearchMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const initialValues = {
    query: '',
  };

  const handleSubmit = (values, options) => {
    setSearchParams(values.query ? { q: values.query } : {});
    console.log(options);
  };

  useEffect(() => {
    if (!q) {
      return;
    } else {
      const getSearchMovie = async () => {
        const data = await fetchSearchMovies(q);
        setMovies(data.results);
      };
      getSearchMovie();
    }
  }, [q]);

  return (
    <div>
      <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <Field name="query" values={q} placeholder="Search movie" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>
      {movies ? <MovieList movies={movies} title="Movies" link="" /> : null}
    </div>
  );
};

export default MoviesPage;
