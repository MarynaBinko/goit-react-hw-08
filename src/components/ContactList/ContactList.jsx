import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  selectFilteredContacts } from '../../redux/contacts/slice';
import { fetchContacts } from '../../redux/contacts/operations';
import {selectLoading, selectError } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css";




const ContactList = () => {
  const dispatch=useDispatch();
  const contacts=useSelector(selectFilteredContacts);
  const loading=useSelector(selectLoading);
  const error=useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);
 

if(loading){
  return <p>Loading...</p>;
}

if (error){
  return <p>Error:{error}</p>;
}
  return (
   <ul className={styles.list}>
    {contacts.map(contact=>(
      <li key={contact.id}>
      <Contact id={contact.id} name={contact.name} number={contact.number}/>
      </li>
    ))
    }
   </ul>
  );
}

export default ContactList;


// import { useSelector } from 'react-redux';
// import { Task } from '../Contact/Contact';
// import { selectAllTasks } from '../../redux/contacts/selectors';
// import css from './ContactList.module.css';

// export const TaskList = () => {
//   const tasks = useSelector(selectAllTasks);

//   return (
//     <ul className={css.list}>
//       {tasks.map(({ id, text }) => (
//         <li key={id}>
//           <Task id={id} text={text} />
//         </li>
//       ))}
//     </ul>
//   );
// };

