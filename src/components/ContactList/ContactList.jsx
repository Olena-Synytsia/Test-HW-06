import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
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
