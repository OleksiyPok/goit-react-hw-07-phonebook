import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from 'services/ApiService';
import { postData } from 'services/ApiService';
import { deleteData } from 'services/ApiService';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',

  async (_, thunkApi) => {
    const responce = await getData();

    try {
      if (!responce.ok) {
        throw new Error('Server Error!');
      }

      const responceData = await responce.json();

      return responceData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newPerson, thunkApi) => {
    try {
      return await postData(newPerson);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (person, thunkApi) => {
    try {
      return await deleteData(person);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
