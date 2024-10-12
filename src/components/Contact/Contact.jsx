import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  // const handleDeleteContact = () => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <div className={s.container}>
      <div className={s.elements}>
        <p className={s.name}>
          <BsFillPeopleFill className={s.icon} />
          {name}
        </p>
        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>

      <button
        onClick={() => dispatch(deleteContactThunk(id))}
        className={s.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

// handleDeleteContact
