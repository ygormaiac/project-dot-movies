import { createSlice } from '@reduxjs/toolkit';

const initialQueryState = {
  query: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: initialQueryState,
  reducers: {
    getInputQuery(state, action) { state.query = action.payload },
  },
});

export const searchQueryActions = searchQuerySlice.actions;

export default searchQuerySlice;