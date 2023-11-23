import { createSelector } from '@reduxjs/toolkit';
import { selectContactsList } from 'redux/contacts';

export const selectFilterKey = state => state.filter.filterKey;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterKey],
  (contactsList, filterKey) => {
    if (!contactsList) return;

    const filteredContacts = contactsList.filter(person => {
      return person.name.toLowerCase().includes(filterKey);
    });

    filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

    return filteredContacts;
  }
);

export const selectFilteredAmount = createSelector(
  [selectFilteredContacts],
  filteredContacts => {
    return filteredContacts.length;
  }
);
