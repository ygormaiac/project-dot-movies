import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchQueryActions } from '../redux/reducers/searchQuery';
import { UilShoppingCart } from '@iconscout/react-unicons';
import { BsFillHeartFill } from "react-icons/bs";
import Cart from './Cart';
import Favorites from './Favorites';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => (
    dispatch(searchQueryActions.getInputQuery(value))
  );

  return (
    <div>
      <header className="header">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="TMDB-logo"
          className="header-image"
        />
        <input
          className="header-input"
          placeholder="Pesquisa"
          onChange={handleChange}
        />
        <button
          className="header-icons"
          onClick={() => {
            setShowFavorites(!showFavorites)
            setShowCart(false)
          }}
        >
          <BsFillHeartFill size={30} />
        </button>
        <button
          className="header-icons"
          onClick={() => {
            setShowCart(!showCart)
            setShowFavorites(false)
          }}
        >
          <UilShoppingCart size={35} />
        </button>
      </header>
      {
        showFavorites && <Favorites />
      }
      {
        showCart && <Cart />
      }
    </div>
  )
}