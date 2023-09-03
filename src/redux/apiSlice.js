import { createSlice } from '@reduxjs/toolkit';
import { getData_ } from './apiReducer';

const initialState = {
  apiData: [],
  status: 'idle',
  error: '',
};

const handlePending = state => {
  state.status = 'pending';
};

const handleFulfilled = (state, { payload }) => {
  state.status = 'fulfilled';
  state.apiData = payload;
  state.error = '';

  console.log('payload:', payload);
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const apiSlice = createSlice({
  name: 'apiData',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getData_.fulfilled, handleFulfilled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const { fetching, fetchSuccess, fetchError } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
