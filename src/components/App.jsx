import { ToastContainer } from 'react-toastify';
import { toastParams } from './toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterForm from './FilterForm';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
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
