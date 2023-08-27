import { createAsyncThunk } from '@reduxjs/toolkit';

// import { fetching, fetchSuccess, fetchError } from 'redux/apiSlice';
import { getContacts } from 'services/ApiService';

// export const getData = () => {
//   return async dispatch => {
//     try {
//       dispatch(fetching());
//       const data = await getContacts();
//       dispatch(fetchSuccess(data));
//     } catch (error) {
//       dispatch(fetchError(error));
//     }
//   };
// };

export const getData_ = createAsyncThunk('getData', async () => {
  return await getContacts();
});
