import React ,{ useState } from "react";
import { NavLink} from "react-router-dom";
import "./App.css";


function Navbar(){
    const [click, setClick] = useState(false);
  
    const HandleClick = () =>{
      setClick(!click);
      
        
    }
    return (
        <nav>
            <h1 style={{color:"white", margin:"0 15px", fontSize:"35px"}}>LESS</h1>
            <ul>
                <li>
                    <NavLink className="Link" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="Link" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="Link" to="/work">Work</NavLink>
                </li>
                <li className="menu-icon">
                    <i style={{padding:"20px"}}  onClick={ HandleClick } className={ click ? "fas fa-times" : "fas fa-bars"}></i>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;