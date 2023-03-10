import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContact from './AddContact/AddContact';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { AppStyled, Container, Head, ContactsStyled } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    if (this.state.contacts.find(obj => obj.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = { name: name, id: nanoid(), number: number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilterContacts = arrayContacts => {
    if (this.state.filter !== '') {
      return arrayContacts.filter(({ name }) =>
        name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return arrayContacts;
  };
  render() {
    return (
      <AppStyled>
        <Container>
          <Head>Phonebook</Head>
          <AddContact onAddContact={this.onAddContact} />
          <ContactsStyled>Contacts:</ContactsStyled>
          <ContactsFilter
            value={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />
          <ContactsList
            contacts={this.onFilterContacts(this.state.contacts)}
            onDelete={this.onDeleteContact}
          />
        </Container>
      </AppStyled>
    );
  }
}

export default App;
