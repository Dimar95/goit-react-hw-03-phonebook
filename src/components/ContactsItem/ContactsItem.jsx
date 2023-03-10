import PropTypes from 'prop-types';
import { Li, Button } from './ContactsItem.styled';

const ContactsItem = ({ name, number, id, onDelete }) => {
  return (
    <Li>
      {name} {number}
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        delete
      </Button>
    </Li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
