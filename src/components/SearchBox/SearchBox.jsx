import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import styles from "./SearchBox.module.css";



const SearchBox = () => {
  const dispatch=useDispatch();
  const filter =useSelector(selectNameFilter);

  const handleChange=(event)=>{
    dispatch(changeFilter(event.target.value));
  };
  
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={handleChange} className={styles.input}/>
    </div>
  )
}

export default SearchBox




// import { useDispatch } from 'react-redux';
// import { addTask } from '../../redux/contacts/operations';
// import css from './SearchBox.module.css';

// export const TaskEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(addTask(text));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add task
//       </button>
//     </form>
//   );
// };

