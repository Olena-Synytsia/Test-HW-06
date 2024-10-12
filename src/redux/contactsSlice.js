import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      console.log("Fetching contacts:", action.payload);
      state.contacts.items = Array.isArray(action.payload)
        ? action.payload
        : [];
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact, fetchDataSuccess } =
  contactsSlice.actions;

export const selectContacts = (state) => {
  console.log("State:", state);
  const contacts = state.contacts.items;

  const filterName = state.filters.name.toLowerCase().trim();

  if (!Array.isArray(contacts)) {
    return [];
  }

  return contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filterName)
  );
};

export default contactsSlice.reducer;
