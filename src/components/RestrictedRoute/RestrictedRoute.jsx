import { useSelector } from "react-redux"
import { Route, Redirect} from "react-router-dom"


const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => {
    const isAuthenticated = useSelector((state)=> state.auth.isLoggedIn)
  return (
   <Route
   {...rest}
   render={(props)=>
    isAuthenticated ? (
        <Redirect to="/contacts"/>
    ) : (
        <Component {...props}/>
    )
   }
   />
  );
};

export default RestrictedRoute
