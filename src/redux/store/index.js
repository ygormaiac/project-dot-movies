import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { cartSlice, favoritesSlice, searchQuerySlice } from '../reducers';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
    searchQuery: searchQuerySlice.reducer,
  },
}, composeWithDevTools(applyMiddleware(thunk)));

export default store;