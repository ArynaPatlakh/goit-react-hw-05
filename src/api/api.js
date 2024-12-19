import axios from "axios";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2YwOTdmYjY5NjI4ODkzYmRjZmY0ZGU1MDhlM2NhOCIsIm5iZiI6MTczNDU1NzU0Ni4wNTMsInN1YiI6IjY3NjMzZjZhMWY0YTk1NzJjNGZmZTZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZwV4XbRR4vfd4cHg5YtYSVX2w0Ub6Ej3xY6M0RM-c4",
  },
};
const defaultUrl = "https://api.themoviedb.org/3/movie";

export const fetchTopMovies = async () => {
  const topMovies = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return topMovies.data.results;
};

export const detailsMovie = async (id) => {
  const data = await axios.get(`${defaultUrl}/${id}?language=en-US`, options);
  return data.data;
};

export const fetchCastMovie = async (id) => {
  const data = await axios.get(
    `${defaultUrl}/${id}/credits?language=en-US`,
    options
  );
  return data.data;
};

export const fetchReviewsMOvie = async (id) => {
  const data = await axios.get(
    `${defaultUrl}/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data.data;
};
