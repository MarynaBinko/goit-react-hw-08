import { AppBar } from "@mui/material";
import { useSelector } from "react-redux"


const Layout = ({children}) => {
    const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  return (
    <div>
      <AppBar/>
      {children}
    </div>
  );
};

export default Layout
