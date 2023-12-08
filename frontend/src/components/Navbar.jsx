
// import {Link} from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

import logo from "./logo.png";
import './Navbar.css'
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";



const Navbar = () => {
    const [openProfile, setOpenProfile] = useState(false);


    return (
        <div>
        <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><img className="img1" src={logo} alt="logo" width="100px" height="50px" /></span>
  <VscAccount className="personSymbol"  size={56} onClick={ () => setOpenProfile((prev) => !prev)}/>
  
    </nav>
    {
    openProfile && <Dropdown />
    }

    </div>


    )
}

export default Navbar
