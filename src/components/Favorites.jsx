import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillHeartFill } from "react-icons/bs";

import { favoritesActions } from '../redux/reducers/favorites';

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.movies);

  return (
    <aside className="favorite-movies">
      <h3 className="title-favorites">Filmes Favoritos</h3>
      <ul>
        {
          favoriteMovies.map((movie, index) => (
            <li key={index} className="itens-favorite">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.logo}`}
                alt={`${movie.title}-movie-logo`}
                className="movie-favorite-img"
                loading="lazy"
              />
              <span>{movie.title}</span>
              <span>R$ 79,99</span>
              <button
                className="button-favorite"
                type="button"
                onClick={() => dispatch(favoritesActions.removeFromFavorites(movie.id))}
              >
                <BsFillHeartFill size={25} />
              </button>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}