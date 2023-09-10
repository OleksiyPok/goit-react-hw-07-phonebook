import { createSlice } from '@reduxjs/toolkit';

import { getContacts } from './contactsOperations';
import { addContact } from './contactsOperations';
import { deleteContact } from './contactsOperations';

const contactsInitialState = {
  contactsList: [],
  status: 'idle',
  error: '',
};

const handlePending = state => {
  state.status = 'pending';
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const handleGetContacts = (state, { payload }) => {
  state.status = 'fulfilled';
  state.error = '';
  state.contactsList = payload;
};

const handleAddContact = (state, { payload }) => {
  console.log('!!!!!!!!!!');
  state.status = 'fulfilled';
  state.contactsList = payload;
  state.error = '';
};

const handleDeleteContact = (state, { payload }) => {
  state.status = 'fulfilled';
  state.contactsList = payload;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactLocal(state, action) {
      state.contactsList.push(action.payload);
    },
    deleteContactLocal(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
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
export const { addContactLocal } = contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
