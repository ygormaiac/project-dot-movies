import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import useFetchApi from '../useFetchApi';

export default function MovieList() {
  const { movies } = useFetchApi();
  const searchQueryValue = useSelector((state) => state.searchQuery.query);
  const filteredMovies = movies.filter((movie) => (
    movie.title.toLowerCase().includes(searchQueryValue.toLowerCase())
  ));
  
  return (
    <main className="main-list-films">
      { filteredMovies.map((movie, index) => (
        <MovieCard
          key={index}
          id={movie.id}
          average={movie.vote_average}
          title={movie.title}
          logo={movie.poster_path}
          date={movie.release_date}
          genreID={movie.genre_ids[0]}
        />
      ))}
    </main>
  )
}