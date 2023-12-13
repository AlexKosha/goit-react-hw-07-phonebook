import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoadding } from '../../redux/contacts/getState';
import ContactItem from 'components/ContactItems/ContactItem';
import * as ContactsService from '../../redux/contacts/contactsOperations';

const Contacts = () => {
  const loadding = useSelector(getIsLoadding);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactsService.fetchContacts());
  }, [dispatch]);

  return <ul>{loadding ? <h3>Loading...</h3> : <ContactItem />} </ul>;
};

export default Contacts;
