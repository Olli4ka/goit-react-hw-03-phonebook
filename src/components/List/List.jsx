
import PropTypes from 'prop-types';
import { ListContainer, ListItem} from "./List.styled";

export const List = ({ contacts, onDeleteContact }) => (
    
   
    <ListContainer>
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>&#8226;{' '}{name}{" "}{number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
            </ListItem>
        ))}
    </ListContainer>
    
);

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
