import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Required field"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        "Phone number must be in the format XXX-XXX-XXXX"
      )
      .required("Required field"),
  });

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6)
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
      6,
      10
    )}`;
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactThunk(values));
    resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span className={s.span}>Name</span>
              <Field
                name="name"
                className={s.input}
                placeholder="Enter your name"
              ></Field>
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              <span className={s.span}>Number</span>
              <Field
                name="number"
                className={s.input}
                placeholder="Enter your phone number"
                value={values.number}
                onChange={(e) => {
                  const formattedNumber = formatPhoneNumber(e.target.value);
                  setFieldValue("number", formattedNumber);
                }}
              ></Field>
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <button type="submit" className={s.btn}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
