import { createSlice } from '@reduxjs/toolkit';
import { getData_ } from './apiReducer';

const initialState = {
  apiData: [],
  status: 'idle',
  error: '',
};

const apiSlice = createSlice({
  name: 'apiData',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getData_.pending, state => {
        state.status = 'pending';
      })
      .addCase(getData_.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.apiData = payload;
        state.error = '';

        console.log('payload:', payload);
      })
      .addCase(getData_.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
      });
  },
});

export const { fetching, fetchSuccess, fetchError } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
