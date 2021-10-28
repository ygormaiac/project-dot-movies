import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiTrashAlt } from "react-icons/bi";

import { cartActions } from '../redux/reducers/cart';

export default function Cart() {
  const dispatch = useDispatch();
  const cartMovies = useSelector((state) => state.cart.movies);

  return (
    <aside className="shopping-cart">
      <div className="header-cart">
        <h3 className="title-cart">Meu Carrinho</h3>
        <button
          className="shopping-cart-clear"
          type="button"
          onClick={() => dispatch(cartActions.clearCart())}
        >
          Esvaziar
        </button>
      </div>
      <ul>
        {
          cartMovies.map((movie, index) => (
            <li key={index} className="itens-cart">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.logo}`}
                alt={`${movie.title}-movie-logo`}
                className="movie-cart-img"
                loading="lazy"
              />
              <span>{movie.title}</span>
              <span>{movie.quantity}</span>
              <span>R$ 79,99</span>
              <button
                className="movie-cart-delete"
                type="button"
                onClick={() => dispatch(cartActions.removeFromCart(movie.id))}
              >
                <BiTrashAlt size={25} />
              </button>
            </li>
          ))
        }
      </ul>
    </aside>
  );
}