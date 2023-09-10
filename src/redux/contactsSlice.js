import { createSlice } from '@reduxjs/toolkit';

import { getContacts } from './contactsOperations';
import { addContact } from './contactsOperations';
import { deleteContact } from './contactsOperations';
import {
  handleAddContact,
  handleDeleteContact,
  handleGetContacts,
  handlePending,
  handleRejected,
} from './contactsSliceHendlers';
import { contactsInitialState } from './contactsInitialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.rejected, handleRejected)
      .addCase(getContacts.fulfilled, handleGetContacts)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, handleAddContact)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, handleDeleteContact);

    // .addCase(addContact.fulfilled, handleAddContact)
    // .addCase(deleteContact.fulfilled, handleDeleteContact)

    // .addMatcher(action => {
    //   action.type.endsWith('/pending');
    // }, handlePending)
    // .addMatcher(action => {
    //   action.type.endsWith('/rejected');
    // }, handleRejected)
  },
});
// export const { addContactLocal, deleteContactLocal } = contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
