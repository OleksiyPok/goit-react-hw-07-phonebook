import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useFilter } from 'hooks';
// import { useContacts } from 'hooks';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';
// import { Loader } from 'components/Loader/Loader';

import {
  UlStyled,
  LiStyled,
  SpanStyled,
  ButtonStyled,
  PStyled,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOnDelete = person => {
    dispatch(deleteContact(person));
  };

  // const { contactsIsLoading } = useContacts();
  const { filteredContacts: contacts, filteredAmount: contactsLength } =
    useFilter();

  return (
    <>
      {/* <Loader /> */}
      {/* {!contactsIsLoading && <Loader />} */}
      <PStyled>Amount of contacts: {contactsLength}</PStyled>
      <UlStyled>
        {contacts.map(person => (
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
