import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ContactsService from 'service/contactsService';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      return await ContactsService.getContacts();
    } catch (error) {}
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async newContact => {
    try {
      const contact = await ContactsService.addContacts(newContact);
      return contact.data;
    } catch (error) {}
  }
);

export const deleteContact = createAsyncThunk(
  'conatcts/deleteContact',
  async id => {
    try {
      const contact = await ContactsService.deleteContacts(id);
      return contact.data;
    } catch (error) {}
  }
);
