import { Styled, Label, Input } from './ContactsFilter.styled';
import PropTypes from 'prop-types';

const ContactsFilter = ({ value, onChangeFilter }) => {
  return (
    <Styled>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChangeFilter}
        value={value}
      />
    </Styled>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}