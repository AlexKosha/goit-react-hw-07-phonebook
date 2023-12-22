import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contactSlice';
import filter from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    userContacts: contacts,
    userFilter: filter,
  },
});
