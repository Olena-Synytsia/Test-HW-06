import axios from "axios";
import { deleteContact, fetchDataSuccess } from "./contactsSlice";
axios.defaults.baseURL = "https://670a1851af1a3998baa30616.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  const { data } = await axios.get("/Contacts");
  dispatch(fetchDataSuccess(data));
};

export const deleteContactThunk = (id) => async (dispatch) => {
  await axios.delete(`/Contacts/${id}`);
  dispatch(deleteContact(id));
};
