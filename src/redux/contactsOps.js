import axios from "axios";
import { fetchDataSuccess } from "./contactsSlice";
axios.defaults.baseURL = "https://670a1851af1a3998baa30616.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  const { data } = await axios.get("/Contacts");
  console.log("Fetched data:", data);
  dispatch(fetchDataSuccess(data));
};
