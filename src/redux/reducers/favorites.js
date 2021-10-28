import { createSlice } from "@reduxjs/toolkit";

const initialFavoritesState = {
  showFavorites: false,
  movies: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    addToFavorites(state, action) { state.movies.push(action.payload) },
    removeFromFavorites(state, action) { state.movies = state.movies.filter((movie) => movie.id !== action.payload) },
    toggleFavorites(state) { state.showFavorites = !state.showFavorites },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;