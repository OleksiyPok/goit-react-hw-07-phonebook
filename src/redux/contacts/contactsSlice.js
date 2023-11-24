import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './contactsInitialState';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

import {
  handleAddContact,
  handleDeleteContact,
  handleFetchContacts,
  handlePending,
  handleRejected,
} from './contactsSliceHendlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)

      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected);

    // .addMatcher(action => {
    //   action.type.endsWith('/pending');
    // }, handlePending)
    // .addMatcher(action => {
    //   action.type.endsWith('/rejected');
    // }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
