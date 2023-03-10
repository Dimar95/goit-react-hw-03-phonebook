import React, { Component } from 'react';
import { AddContactStyled, Label, Input, Button } from './AddContact.styled';
import PropTypes from 'prop-types';

class AddContact extends Component {
  state = {
    number: '',
    name: '',
  };
  onChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };
  reset = () => {
    this.setState({ number: '' });
    this.setState({ name: '' });
  };
  render() {
    return (
      <>
        <AddContactStyled
          onSubmit={e => {
            e.preventDefault();
            this.props.onAddContact(this.state);
            this.reset();
          }}
        >
          <Label htmlFor="name">
            Name
            <Input
              onChange={this.onChangeName}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              onChange={this.onChangeNumber}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </AddContactStyled>
      </>
    );
  }
}
export default AddContact;

AddContact.propTypes = {
  onAddContact: PropTypes.func
}