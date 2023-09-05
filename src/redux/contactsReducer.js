import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from 'services/ApiService';

export const getContacts = createAsyncThunk('getData', async () => {
  return await getData();
});
