import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar2 from "../Sidebar/Navbar2";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./columnCards.css";
import domestic from "../../../src/components/Images/Packages/Asian.jpeg"
import europe from "./europe.jpeg";


function Sales() {
  const [data, setData] = useState([]);
  const [subPackageData, setSubPackageData] = useState([]);

  const navigate = useNavigate();

  var tourChange = "";

  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((users) => setData(users.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
      axios.get("http://localhost:5000/subPackage")
      .then((users) => setSubPackageData(users.data))
      .catch((error) => console.log(error));
  }, [])

  // console.log(subPackageData.subPackages);

  // console.log(data.Tours[0].package_name);

  if (data && data.packages) {
    var packageKeys = Object.keys(data.packages);
  } else {
    console.error("The 'data' object or 'data.packages' is undefined or null.");
  }

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

      <div class="main-content">
        {data.Tours &&
          data.Tours.map((item) => {
            return (
              <div class="column">
                <div class="card 3">
                  <div className="image">
                  {tourChange = item.image_link}
                    <img src={tourChange} alt="" width="100%" height="300px" />
                  </div>
                  <div className="heading">
                    <h1 className="header">{item.package_name}</h1>
                    
                    {/* {`"${item.image_link}"`} */}
                    {item.package_id}
                  </div>

                  <div className="package-list mt-5">
                    <ul>

                        {subPackageData.subPackages && subPackageData.subPackages
                          .filter((element) => element.package_id === item.package_id)
                          .map((element) => (
                            <li key={element.subPkg_id}>{element.subPkg_name}</li>
                          ))}

                    </ul>
                  </div>
                  <div className="btnDivSales">
                    {item.package_name === "European  Tour" && (
                      <button className="btnSales">
                        <Link to="/sales/europeanTour">Click for More !</Link>
                      </button>
                    )}

                    {item.package_name === "International  Tour" && (
                      <button className="btnSales">
                        <Link to="/sales/internationalTour">Click for More !</Link>
                      </button>
                    )}

                    {item.package_name === "Domestic  Tour" && (
                      <button className="btnSales">
                        <Link to="/sales/domesticTour">Click for More !</Link>
                      </button>
                    )}

                    {item.package_name === "Asian  Tour" && (
                      <button className="btnSales">
                        <Link to="/sales/asianTour">Click for More !</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Sales;
