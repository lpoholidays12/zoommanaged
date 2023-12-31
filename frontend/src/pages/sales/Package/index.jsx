import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Form from "../PackageDetails";

import "./Package.css";

function Package() {
  const [packageData, setPackageData] = useState([]);
  const [subPackageData, setSubPackageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sales");
        const data = await response.json();

        setPackageData(data.packages);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchData();
  }, []);

  async function fetchSubpackage(category_id) {
    try {

      const response = await axios.get(
        `http://localhost:5000/api/sales/${category_id}`,
        { timeout: 10000 }
      );

      setSubPackageData(response.data.packageList);
    } catch (error) {
      console.error("Error fetching subpackage data:", error.message);
    }
  }

  // async function displayForm(packageName){
  //     const packageName = 
  // }

  return (
    <div>
      <Navbar />
      
      {packageData.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className="button-container">
          {packageData.map((packageItem) => (
            <button
              onClick={() => fetchSubpackage(packageItem.package_id)}
              key={packageItem.package_id}
            >
              {packageItem.package_name}
            </button>
          ))}
        </div>
      )}

      <div className="button-container">
        {subPackageData.length > 0 && (
          <div>
            {subPackageData.map((subPackageItem) => (
              <button onClick={() => displayForm(subPackageItem.subPkg_name)} key={subPackageItem.subPkg_id}>
                {subPackageItem.subPkg_name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
}

export default Package;
