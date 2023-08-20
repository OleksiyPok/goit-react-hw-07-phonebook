import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { apiReducer } from './apiSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
