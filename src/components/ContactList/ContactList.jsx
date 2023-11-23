import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
// import { selectStatus } from 'redux/selectors';
import { getContacts, deleteContact } from 'redux/contacts/contactsOperations';
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
  // const loadStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleOnDelete = person => {
    dispatch(deleteContact(person));
  };

  const contacts = useSelector(selectFilteredContacts);
  const contactsLength = contacts.length;

  return (
    <>
      {/* <Loader /> */}
      {/* {loadStatus === 'pending' && <Loader />} */}
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
