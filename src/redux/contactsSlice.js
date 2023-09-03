import { createSlice } from '@reduxjs/toolkit';
import { getData } from './contactsReducer';

const contactsInitialState = {
  contactsList: [],
  status: 'idle',
  error: '',
};

const handlePending = state => {
  state.status = 'pending';
};

const handleFulfilled = (state, { payload }) => {
  state.status = 'fulfilled';
  state.contactsList = payload;
  state.error = '';

  console.log('payload:', payload);
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
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
  extraReducers: builder => {
    builder
      .addCase(getData.fulfilled, handleFulfilled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { fetching, fetchSuccess, fetchError } = contactsSlice.actions;
