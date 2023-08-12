import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

//----------------------------------------------------

// const customMiddleware = state => next => action => {
//   console.log(action);
//   return next(action);
// };

//----------------------------------------------------

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
