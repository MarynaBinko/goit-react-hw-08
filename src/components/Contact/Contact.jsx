import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from "./Contact.module.css";


const Contact = ({id,name,number}) => {
  const dispatch=useDispatch();


  const handleDelete=()=>{
    dispatch(deleteContact(id));
  }

  if(!name ?? !number){
    return null;
  }

  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <h2 className={styles.text}>{name}</h2>
        <p className={styles.text}>{number}</p>
      </div>
      <button type='button' onClick={handleDelete} className={styles.btn}>Delete</button>
    </div>
  )
}

export default Contact



