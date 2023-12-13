import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
  deleteContact,
  fetchContacts,
  postContact,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoadding: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoadding = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoadding = false;
        state.error = payload;
      })
      .addCase(postContact.pending, state => {
        state.isLoadding = true;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.items.unshift(payload);
      })
      .addCase(postContact.rejected, (state, { payload }) => {
        state.isLoadding = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoadding = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoadding = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;

// const contactSlice = createSlice({
//   name: 'userContacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContacts(state, action) {
//       state.contacts = [action.payload, ...state.contacts];
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     addFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'userContacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// export const { addContacts, deleteContact, addFilter } = contactSlice.actions;

// export const getContacts = state => state.userContacts.contacts;
// export const getFilter = state => state.userContacts.filter;
