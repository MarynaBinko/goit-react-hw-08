import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {
    const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
  return (  
        <Route
        {...rest}
        render={(props)=>
            isLoggedIn?(
                <Component {...props}/>
            ) : (
                <Redirect to="/login" />
            )
            
        }
        />         
  );
};

export default PrivateRoute
