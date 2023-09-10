import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData, postData, deleteData } from 'services/ApiService';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',

  async (_, thunkApi) => {
    try {
      const responce = await getData();

      if (!responce.ok) {
        throw new Error('Server Error!');
      }

      return responce.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newPerson, thunkApi) => {
    try {
      const responce = await postData(newPerson);

      if (!responce.ok) {
        throw new Error('Server Error!');
      }

      return await responce.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (person, thunkApi) => {
    try {
      const responce = await deleteData(person);

      if (!responce.ok) {
        throw new Error('Server Error!');
      }

      return await responce.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
