import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux"
import {addContact} from "../../redux/contacts/contactsOps";


const ContctForm = () => {
    const dispatch=useDispatch();

    const handleSubmit=(values, {resetForm})=>{
        dispatch(addContact(values));
        resetForm();
    }
  return (
    <div>
      <h2>Add Contact</h2>
      <Formik
      initialValues={{name: "", phone: ""}}
      onSubmit={handleSubmit}>
      <Form>
        <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div"/>
        </div>
        <div>
            <label>Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div"/>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
      </Formik>    
    </div>
  );
};

export default ContctForm
