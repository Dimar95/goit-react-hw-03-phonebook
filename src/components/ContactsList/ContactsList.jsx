import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';
import { Ul } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
          id={contact.id}
        />
      ))}
    </Ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired
};
