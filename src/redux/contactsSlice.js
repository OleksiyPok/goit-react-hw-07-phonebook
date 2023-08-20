import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contactsList: [
    {
      name: 'Wayne Wolff',
      number: '532-501-3575',
      id: '1',
    },
    {
      name: 'Vicki Lebsack',
      number: '488-390-2211',
      id: '2',
    },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
