import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from 'services/ApiService';
import { postData } from 'services/ApiService';
import { deleteData } from 'services/ApiService';

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
      const responceAdd = await postData(newPerson);

      if (!responceAdd.ok) {
        throw new Error('Server Error!');
      }

      const responce = await getData();

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
      const responceDel = await deleteData(person);

      if (!responceDel.ok) {
        throw new Error('Server Error!');
      }

      const responce = await getData();

      if (!responce.ok) {
        throw new Error('Server Error!');
      }

      return await responce.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
