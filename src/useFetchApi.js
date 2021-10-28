import { useEffect, useState } from 'react';

export default function useFetchApi() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=a49dd8bf6dc3ce6b47a07db576a3ef8a';
      const { results } = await (await fetch(url)).json();

      // console.log(results);
      setMovies(results);
    }
    fetchAPI();
  }, [])
  return { movies, setMovies }
}