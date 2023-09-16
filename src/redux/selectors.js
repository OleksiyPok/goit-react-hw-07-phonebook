export const selectContactsList = state => state.contacts.contactsList;
export const selectFilterKey = state => state.filter.filterKey;

export const selectFilteredContacts = state => {
  const contactsList = selectContactsList(state);
  const filterKey = selectFilterKey(state);

  if (!contactsList) return;

  const filteredContacts = contactsList.filter(person => {
    return person.name.toLowerCase().includes(filterKey);
  });

  return filteredContacts;
};
