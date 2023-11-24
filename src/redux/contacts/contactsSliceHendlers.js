import { toast } from 'react-toastify';

export const handleFetchContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.contactsList = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.contactsList.push(payload);
  toast.success(`${payload.name} has been added to contacts.`);
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';

  state.contactsList = state.contactsList.filter(
    contact => contact.id !== payload.id
  );
  toast.success(`Contact "${payload.name}" has been deleted.`);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
