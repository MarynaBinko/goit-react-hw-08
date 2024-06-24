import { useSelector } from "react-redux"
import { Route } from "react-router-dom"
import { Navigate } from 'react-router-dom';


const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => {
    const isAuthenticated = useSelector((state)=> state.auth.isLoggedIn)
  return (
   <Route
   {...rest}
   render={(props)=>
    isAuthenticated ? (
        <Navigate to="/contacts"/>
    ) : (
        <Component {...props}/>
    )
   }
   />
  );
};

export default RestrictedRoute
