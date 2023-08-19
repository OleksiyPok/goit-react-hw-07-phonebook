import { createSlice } from '@reduxjs/toolkit';

const dataInitialState = {
  data: [],
  status: 'idle',
  error: '',
};

const apiSlice = createSlice({
  name: 'api',
  initialState: dataInitialState,
  reducers: {
    fetching: state => {
      state.status = 'pending';
    },
    fetchSuccess: (state, { payload }) => {
      state.status = 'fulfilled';
      state.data = payload;
      state.error = '';
    },
    fetchError: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const { fetching, fetchSuccess, fetchError } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
