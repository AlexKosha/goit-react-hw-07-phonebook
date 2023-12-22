import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ContactsService from 'service/contactsService';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWishValue }) => {
    try {
      return await ContactsService.getContacts();
    } catch (error) {
      rejectWishValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (newContact, { rejectWishValue }) => {
    try {
      const contact = await ContactsService.addContacts(newContact);
      return contact.data;
    } catch (error) {
      rejectWishValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'conatcts/deleteContact',
  async (id, { rejectWishValue }) => {
    try {
      const contact = await ContactsService.deleteContacts(id);
      return contact.data;
    } catch (error) {
      rejectWishValue(error.message);
    }
  }
);
