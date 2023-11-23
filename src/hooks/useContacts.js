import { useSelector } from 'react-redux';

import {
  selectContactsIsLoading,
  selectContactsList,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  return {
    contactsIsLoading: useSelector(selectContactsIsLoading),
    contactsList: useSelector(selectContactsList),
    contactsError: useSelector(selectContactsError),
  };
};
