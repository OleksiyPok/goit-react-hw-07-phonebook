import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from 'services/ApiService';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getData();
  }
);

export const addContact = createAsyncThunk('contacts/addContact', () => {
  // return  postData();
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', () => {
  // return  deleteData();
});
