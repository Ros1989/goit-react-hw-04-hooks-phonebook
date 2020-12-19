import { useState, useEffect } from 'react';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import SectionBlock from './Section';
import ContactsFilter from './ContactsFilter';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? '',
  );
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isAdded = name => contacts.map(contact => contact.name).includes(name);

  const addContact = (name, number) => {
    if (isAdded(name)) {
      return alert(`${name} is in the list of your contacts`);
    } else {
      setContacts(contacts => [
        ...contacts,
        { id: uuidv4(), name: name, number: number },
      ]);
    }
  };

  const filterContactList = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(e => e.id !== id));
  };

  const contactsFilterInput = inputValue => {
    setNameFilter(inputValue);
  };

  const visibleContacts = filterContactList();

  return (
    <>
      <SectionBlock title="Phonebook">
        <ContactsForm addContact={addContact} />
        <ContactsFilter
          value={nameFilter}
          OnInputFilter={contactsFilterInput}
        />
        <ContactsList items={visibleContacts} onDeleteContact={deleteContact} />
      </SectionBlock>
    </>
  );
}
