import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './contactsInitialState';
import { getContacts, addContact, deleteContact } from './contactsOperations';

import {
  handleAddContact,
  handleDeleteContact,
  handleGetContacts,
  handlePending,
  handleRejected,
} from './contactsSliceHendlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleGetContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
