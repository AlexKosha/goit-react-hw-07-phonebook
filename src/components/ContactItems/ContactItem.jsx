import { useDispatch, useSelector } from 'react-redux';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import { getFilter } from '../../redux/Filter/filterSlice';
import { getContacts } from '../../redux/contacts/getState';
import { ContactItems } from './ContactsItems.styled';

const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItems key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button
              type="button"
              onClick={() => dispatch(ContactsService.deleteContact(id))}
            >
              Delete
            </button>
          </ContactItems>
        );
      })}
    </>
  );
};

export default ContactItem;
