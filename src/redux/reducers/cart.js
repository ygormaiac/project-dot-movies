import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  showCart: false,
  movies: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) { state.movies.push(action.payload) },
    removeFromCart(state, action) { state.movies = state.movies.filter((movie) => movie.id !== action.payload) },
    increaseQuantity(state, action) { state.movies.forEach((movie, index) => {
      if (movie.id === action.payload) state.movies[index].quantity += 1
    }) },
    clearCart(state) { state.movies = [] },
    toggleCart(state) { state.showCart = !state.showCart },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;