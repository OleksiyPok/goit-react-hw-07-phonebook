import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData, postData, deleteData } from 'services/ApiService';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getData();
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newPerson => {
    await postData(newPerson);

    return await getData();
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async person => {
    await deleteData(person);

    return await getData();
  }
);
