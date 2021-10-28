import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/reducers/cart';
import { favoritesActions } from '../redux/reducers/favorites';
import { BsFillHeartFill } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

export default function MovieCard({ id, average, title, logo, genreID, date }) {
  const dispatch = useDispatch();
  const getMovies = useSelector((state) => state.cart.movies);
  const [movieGenre, setMovieGenre] = useState([]);
  const addCart = () => dispatch(cartActions.addToCart({
    id,
    logo,
    title,
    quantity: 1,
    price: 79.99,
  }));
  const addFavorites = () => dispatch(favoritesActions.addToFavorites({
    title,
    logo,
    id,
  }));

  const handleClick = () => (
    getMovies.some((movie) => movie.id === id)
      ? dispatch(cartActions.increaseQuantity(id))
      : addCart()
  );

  useEffect(() => {
    const getMovieGenre = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a49dd8bf6dc3ce6b47a07db576a3ef8a&language=en-US';
        const genres = await (await fetch(url)).json();
        const filteredGenre = genres.genres.filter((genre) => genre.id === genreID);

        // console.log(filteredGenre[0].name);
        setMovieGenre(filteredGenre[0].name);
      } catch (e) {
        // console.log(e);
      }
    }
    getMovieGenre();
  }, [setMovieGenre, genreID]);

  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <button
          type="button"
          onClick={addFavorites}
          className="movie-card-favorite-button">
          <BsFillHeartFill size={20} />
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${logo}`}
          alt={`${title}-movie-logo`}
          className="movie-card-img"
          loading="lazy"
        />
        <span className="movie-card-date">{date}</span>
      </div>
      <h3 className="movie-card-title">{title}</h3>
      <div className="movie-average-genre">
        <span className="movie-card-average"><BiStar className="movie-card-star" />{average}</span>
        <span className="movie-card-genre">{movieGenre}</span>
      </div>
      <p className="movie-card-price">R$ 79,99</p>
      <button
        className="movie-card-button"
        type="button"
        onClick={handleClick}
      >
        Adicionar
            </button>
    </div>
  )
}