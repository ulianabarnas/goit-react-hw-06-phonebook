import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactButton, Icon, Item, List } from "./ContactList.styles";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = getFilteredContacts();

  const elements = filteredContacts.map(({ name, number, id }) => {
    return (
      <Item key={id}><Icon />{name}: {number}
        <ContactButton
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ContactButton>
      </Item>
    )
  });
  
  return (
    <List>
      {elements}
    </List>
  );
};