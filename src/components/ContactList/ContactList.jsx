import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getContacts } from 'redux/contactsThunk';
import { deleteContact } from 'redux/contactsThunk';
import { selectContactsList, selectFilterKey } from 'redux/selectors';

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

  const handleOnGet = () => {
    dispatch(getContacts());
  };

  const handleOnDelete = person => {
    dispatch(deleteContact(person));
    // dispatch(getContacts());
    toast.info(`Contact "${person.name}" has been deleted.`);
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
          handleOnGet();
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
            <ButtonStyled
              onClick={() => {
                handleOnDelete(person);
              }}
            >
              Delete
            </ButtonStyled>
          </LiStyled>
        ))}
      </UlStyled>
    </>
  );
};

export default ContactList;
