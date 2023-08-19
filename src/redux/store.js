import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { apiReducer } from './apiSlice';
import { filterReducer } from './filterSlice';

//----------------------------------------------------

// const customMiddleware = state => {
//   return next => {
//     return action => next => {
//       if (typeof action === 'function') {
//         return next(action(state.dispatch));
//       }
//       return next(action);
//     };
//   };
// };

//----------------------------------------------------

export const store = configureStore({
  reducer: {
    api: apiReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware: [customMiddleware],
});
