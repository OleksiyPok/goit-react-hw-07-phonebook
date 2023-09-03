import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts } from 'services/ApiService';

export const getData = createAsyncThunk('getData', async () => {
  return await getContacts();
});
