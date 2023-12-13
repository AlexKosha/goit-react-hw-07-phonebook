import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
}
