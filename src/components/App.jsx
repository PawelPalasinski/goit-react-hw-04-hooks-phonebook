import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });

  useEffect(() => {
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const handleAddContact = (data) => {
    if (contacts.some((contact) => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }

    setContacts(contacts => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return [newContact, ...contacts];
    });
    setName('');
    setNumber('');
  };
  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <>
      <ContactForm
        onSubmit={handleAddContact}
        name={name}
        number={number}
      />
      <ContactList
        contacts={getVisibleContacts(contacts, filter)}
        onRemove={handleDeleteContact}>
          <Filter onChange={handleFilterChange} />
      </ContactList>
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     try {
//       const json = localStorage.getItem('contacts');
//       const contacts = JSON.parse(json);

//       if (contacts) {
//         this.setState(() => ({ contacts: contacts }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       const json = JSON.stringify(this.state.contacts);
//       localStorage.setItem('contacts', json);
//     }
//   }

//   handleAddContact = newContact =>
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, newContact],
//     }));

//   handleCheckUnique = name => {
//     const { contacts } = this.state;
//     const isExistContact = !!contacts.find(contact => contact.name === name);

//     isExistContact && alert(`${name} is already in contacts`);

//     return !isExistContact;
//   };

//   handleRemoveContact = id =>
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== id),
//     }));

//   handleFilterChange = filter => this.setState({ filter });

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <>
//         <ContactForm
//           onAdd={this.handleAddContact}
//           onCheckUnique={this.handleCheckUnique}
//         />
//         <ContactList
//           contacts={visibleContacts}
//           onRemove={this.handleRemoveContact}
//         >
//           <Filter filter={filter} onChange={this.handleFilterChange} />
//         </ContactList>
//       </>
//     );
//   }
// }

export default App;
