import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { selectContactsList } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);

  const normalize = sentence => {
    const wordsArr = sentence
      .trim()
      .replace(/  +/g, ' ')
      .toLowerCase()
      .split(' ');

    const normalizedSentence = wordsArr
      .map(word => {
        const [first, ...rest] = word;
        return first.toUpperCase() + rest.join('');
      })
      .join(' ');

    return normalizedSentence;
  };

  const handleOnAdd = e => {
    e.preventDefault();

    const currentForm = e.target;
    const { name, number } = currentForm.elements;

    const newPerson = {
      id: nanoid(),
      name: normalize(name.value),
      number: number.value,
    };

    if (contactsList.some(person => newPerson.name === person.name)) {
      toast.error(`${newPerson.name} is already in contacts.`);
    } else {
      dispatch(addContact(newPerson));
    }
    return currentForm.reset();
  };

  return (
    <FormStyled onSubmit={handleOnAdd} autocomplete="off">
      <LabelStyled htmlFor="name">Name</LabelStyled>
      <InputStyled
        type="text"
        name="name"
        id="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autocomplete="off"
        required
      />
      <LabelStyled htmlFor="number">Number</LabelStyled>
      <InputStyled
        type="tel"
        name="number"
        id="number"
        title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
        placeholder="+ ..."
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        autocomplete="off"
        required
      />
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
};

export default ContactForm;
