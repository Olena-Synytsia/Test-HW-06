import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filter.name.toLowerCase().trim();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter)
  );
};

export default contactsSlice.reducer;
