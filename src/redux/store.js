import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { apiReducer } from './apiSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    apiData: apiReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
