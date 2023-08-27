import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { stateFilterKey } from 'redux/filterSlice';

import { getData, getData_ } from 'redux/apiReducer';

import { toast } from 'react-toastify';

import {
  UlStyled,
  LiStyled,
  SpanStyled,
  ButtonStyled,
  PStyled,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsList);
  const filterKey = useSelector(stateFilterKey);

  const handleOnDelete = contact => {
    dispatch(deleteContact(contact.id));
    toast.info(`Contact "${contact.name}" has been deleted.`);
  };

  const getFilteredContacts = () => {
    if (!contacts) return;

    const filteredPersons = contacts.filter(person => {
      return person.name.toLowerCase().includes(filterKey);
    });

    return filteredPersons;
  };

  const filteredContacts = getFilteredContacts();
  const filteredContactsLength = filteredContacts.length;

  return (
    <>
      <button
        onClick={() => {
          dispatch(getData());
        }}
      >
        thunk
      </button>
      <button
        onClick={() => {
          dispatch(getData_());
        }}
      >
        extra
      </button>
      <PStyled>Amount of contacts: {filteredContactsLength}</PStyled>
      <UlStyled>
        {filteredContacts.map(person => (
          <LiStyled key={person.id}>
            <SpanStyled>{person.name}:</SpanStyled>
            <SpanStyled>{person.number}</SpanStyled>
            <ButtonStyled onClick={() => handleOnDelete(person)}>
              Delete
            </ButtonStyled>
          </LiStyled>
        ))}
      </UlStyled>
    </>
  );
};

export default ContactList;
