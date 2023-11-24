import { ToastContainer } from 'react-toastify';
import { toastParams } from './components/toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContacts } from 'hooks';
import { Loader } from 'components/Loader/Loader';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import FilterForm from './components/FilterForm';

const App = () => {
  const { contactsIsLoading } = useContacts();

  return (
    <>
      <h1>Phonebook</h1>
      {contactsIsLoading && <Loader />}
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
      <ToastContainer {...toastParams} />
    </>
  );
};

export default App;
