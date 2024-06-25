import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList  from '../../components/ContactList/ContactList';
import SearchBox  from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchContacts());}
    
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
