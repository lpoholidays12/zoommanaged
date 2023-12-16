import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
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
      const response = await axios.get(`http://localhost:5000/api/sales/${category_id}`, { timeout: 10000 });
      console.log(response.data.packageList);
      setSubPackageData(response.data.packageList);
    } catch (error) {
      console.error("Error fetching subpackage data:", error.message);
    }
  }

  return (
    <div>
      <Navbar />
      {packageData.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className="button-container">
          {packageData.map((packageItem) => (
            <button onClick={() => fetchSubpackage(packageItem.package_id)} key={packageItem.package_id}>
              {packageItem.package_name}
            </button>
          ))}
        </div>
      )}

      {/* Display subPackageData if available */}
      {subPackageData.length > 0 && (
        <div>
          <h2>Subpackages</h2>
          <ul>
            {subPackageData.map((subPackageItem) => (
              <li key={subPackageItem.id}>{subPackageItem.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Package;
