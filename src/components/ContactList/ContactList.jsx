import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from 'redux/contactsSlice';
import { selectContactsList, selectFilterKey } from 'redux/selectors';
import { getContacts } from 'redux/contactsReducer';

import {
  UlStyled,
  LiStyled,
  SpanStyled,
  ButtonStyled,
  PStyled,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);
  const filterKey = useSelector(selectFilterKey);

  const handleOnDelete = contact => {
    dispatch(deleteContact(contact.id));
    toast.info(`Contact "${contact.name}" has been deleted.`);
  };

  const getFilteredContacts = () => {
    if (!contactsList) return;

    const filteredPersons = contactsList.filter(person => {
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
          dispatch(getContacts());
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
            {/* <ButtonStyled onClick={() => handleOnDelete(person)}>
              Delete
            </ButtonStyled> */}
            <ButtonStyled onClick={() => dispatch()}>Thunk</ButtonStyled>
          </LiStyled>
        ))}
      </UlStyled>
    </>
  );
};

export default ContactList;
