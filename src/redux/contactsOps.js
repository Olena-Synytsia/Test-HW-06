import axios from "axios";
import { fetchDataSuccess } from "./contactsSlice";
axios.defaults.baseURL = "https://670a1851af1a3998baa30616.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchDataSuccess(data));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
