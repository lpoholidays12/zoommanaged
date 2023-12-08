
import Navbar from "../Navbar";
import Navbar2 from "../Sidebar/Navbar2";

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SideBar from "./SideBar.js";
import "./Navbar2.css";
import { IconContext } from "react-icons";
import "./Accounts.css";

function Accounts() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar); 

  const style = { 
    borderStyle:"solid",
  borderColor:"black"
}
  return (
    <div className="main-container">
     <div className="nav-main" >
        <Navbar/>
     </div>
     <div className="sec-nav">
        <Navbar2/>
        <div className="breadcrumbs"><h5> {`Accounts > New Bookings`} </h5></div>
     </div>
     <div className="main-content" >
        <div className="main-table">
        <table>
        <thead className="tableHeader">
          <tr>
            <th>Booking No.</th>
            <th>Name</th>
            <th>Package</th>
            <th>Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Donald</td>
            <td>European Explorer</td>
            <td>01/12/2023</td>
            <td><a href="/">edit</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Barak</td>
            <td>European Explorer</td>
            <td>01/12/2023</td>
            <td><a href="/">edit</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hillary</td>
            <td>European Explorer</td>
            <td>01/12/2023</td>
            <td><a href="/">edit</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Biden</td>
            <td>European Explorer</td>
            <td>01/12/2023</td>
            <td><a href="/">edit</a></td>
          </tr>
        </tbody>
      </table>
        </div>
     </div>
    </div>
    
  );
}

export default Accounts;
