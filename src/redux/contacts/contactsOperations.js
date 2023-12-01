import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData, postData, deleteData } from 'services/ApiService_axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkApi) => {
    // console.log('fetchContacts =>'); // develop
    try {
      const data = await getData();
      // console.log('fetchContacts response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newPerson, thunkApi) => {
    // console.log('addContact =>'); // develop
    try {
      const data = await postData(newPerson);
      // console.log('addContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (person, thunkApi) => {
    // console.log('deleteContact =>'); // develop
    try {
      const data = await deleteData(person);
      // console.log('deleteContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
