import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Sidebar/Navbar2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import europe from "./europe.jpeg"


function AsianTour() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:5000/asianTour")
          .then((users) => setData(users.data))
          .catch((error) => console.log(error));
      }, []);

      
console.log(data.asianTour);


  return (
    <div className="main-container">
    <div className="nav-main">
      <Navbar />
    </div>
    <div className="sec-nav">
      <Navbar2 />
      <div className="breadcrumbs">
        <h5> {`Sales > New Bookings`} </h5>
     
      </div>
    </div>

    <div class="main-content" >
     
     {data.asianTour && data.asianTour.map((item) => {
         return (
           <div class="column">
             
             <div class="card">
               <div className="image">
                 <img src={europe} alt="" width="100%" height="300px" />
               </div>
               <div className="heading">
                 <h1 className="header">{item.subPkg_name}</h1>
               </div>
               <h3><i>{item.subPkg_duration}</i></h3>

               <div className="costing mt-5">
                 <h3>Cost: {item.subPkg_price}</h3>
               </div>
               <div className="btnDivSales"> 
               {}
               <button className="btnSales"><Link to="/europePackages">Click for More !</Link></button>
               </div>
               
             </div>
             </div>
         );
       })}
   </div>

    
  
  </div>

  )
}

export default AsianTour
