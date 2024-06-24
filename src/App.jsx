import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { Switch } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { refreshUser } from "./redux/auth/authOps";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(refreshUser());
  },[dispatch]);
 

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <RestrictedRoute exact path="/register" component={RegistrationPage}/>
          <RestrictedRoute exact path="/login" component={LoginPage}/>
          <PrivateRoute exact path="/contacts" component={ContactsPage}/>
        </Switch>
      </Layout>  
    </Router>
  );
}

export default App
