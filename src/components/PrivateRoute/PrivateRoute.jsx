import { useSelector } from "react-redux"
import { Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({component: Component, ...rest}) => {
    const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
  return (  
        <Route
        {...rest}
        render={(props)=>
            isLoggedIn?(
                <Component {...props}/>
            ) : (
                <Navigate to="/login" />
            )
            
        }
        />         
  );
};

export default PrivateRoute
