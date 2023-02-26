import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Form } from "./Form/Form";
import { List } from "./List/List";
import { Filter } from "./Filter/Filter";
import initialContacts from "./contacts.json";


export class App extends Component {
  state = {
    contacts: initialContacts, 
    filter: "",
  };  

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };  
    
    this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
    ) ? Notiflix.Notify.info(`${name} is already in contacts!`) : 
      this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
  };  


  render() {
    const { filter } = this.state;   
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />           
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />        
        <List contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
