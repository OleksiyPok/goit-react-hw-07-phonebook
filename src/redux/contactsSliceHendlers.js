export const handlePending = state => {
  state.status = 'pending';
};

export const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

export const handleGetContacts = (state, { payload }) => {
  state.status = 'fulfilled';
  state.error = '';
  state.contactsList = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.status = 'fulfilled';
  state.error = '';
  state.contactsList.push(payload);
};

export const handleDeleteContact = (state, { payload }) => {
  state.status = 'fulfilled';
  state.error = '';

  state.contactsList = state.contactsList.filter(
    contact => contact.id !== payload.id
  );
};
