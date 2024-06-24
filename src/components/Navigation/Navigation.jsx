import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav"
import UserMenu from "./UserMenu"


const Navigation = () => {
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);

  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>      
    </div>
  )
}

export default Navigation
