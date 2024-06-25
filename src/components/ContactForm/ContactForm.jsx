
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required')
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={styles.form}>
        <div>
          <label>Name</label>
          <Field type="text" name="name" className={styles.field}/>
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Number</label>
          <Field type="text" name="number" className={styles.field} />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit" className={styles.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

