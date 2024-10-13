import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("Filtered contacts:", filteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log("Contacts loaded:", filteredContacts);

  return (
    <div className={s.container}>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ul className={s.element}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
