import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { apiReducer } from './apiSlice';
import { filterReducer } from './filterSlice';

//----------------------------------------------------

// const customMiddleware = state => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         next(action(state.dispatch));
//         return;
//       }
//       return next(action);
//     };
//   };
// };

//----------------------------------------------------

export const store = configureStore({
  reducer: {
    apiData: apiReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware: [customMiddleware],
});
