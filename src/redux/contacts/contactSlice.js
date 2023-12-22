import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  postContact,
} from './contactsOperations';
import * as HelpersForReducers from './helpers';

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
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        HelpersForReducers.handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        HelpersForReducers.handlePending
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        HelpersForReducers.handleReject
      );
  },
});

export default contactsSlice.reducer;
