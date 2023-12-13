import axios from 'axios';

axios.defaults.baseURL = 'https://657a16151acd268f9afaaf17.mockapi.io/';

export const getContacts = async () => {
  const contacts = await axios.get('contacts');
  return contacts.data;
};

export const addContacts = async ({ id, name, phone }) => {
  return await axios.post('contacts', {
    id,
    name,
    phone,
  });
};

export const deleteContacts = async id => {
  return await axios.delete(`contacts/${id}`);
};
