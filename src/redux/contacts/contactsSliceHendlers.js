import { toast } from 'react-toastify';

export const handleGetContacts = (state, { payload }) => {
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
  toast.info(`Contact "${payload.name}" has been deleted.`);
};

export const handlePending = state => {
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
