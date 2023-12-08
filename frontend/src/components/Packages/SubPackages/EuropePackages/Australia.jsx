import React, { useEffect, useState } from "react";
import Navbar from "../../../Navbar";
import Navbar2 from "../../../Sidebar/Navbar2";
import axios from "axios";

import { FaUtensils, FaHotel, FaBinoculars } from "react-icons/fa";

function Australia() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/europeanTour")
      .then((users) => setData(users.data))
      .catch((error) => console.log(error));
  }, []);

  const [formData, setFormData] = useState({
    selectDate: "",
    numOfAdults: "",
    numOfChildren6To11: "",
    numOfChildren2To5: "",
    numOfInfants: "",
    flight: "",
    visa: "",
    discountAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="main-container">
      <div className="nav-main">
        <Navbar />
      </div>
      <div className="sec-nav">
        <Navbar2 />
      </div>

      <div class="main-content">
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Arial, sans-serif",
            position: "relative",
            right: "15%",
          }}
          >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "black",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
             <h2
              style={{ color: "white", marginBottom: "10px", fontSize: "24px" }}
              >
              European Elegance
             </h2>
              <h3
              style={{ color: "white", marginBottom: "20px", fontSize: "18px" }}
             >
              11 Days
             </h3>

             <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
              >
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ color: "white", fontSize: "16px" }}>
                  STARTING PRICE
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  RS. 125,000
                </p>
                <p style={{ color: "white", fontSize: "14px" }}>(Per Person)</p>
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                <p style={{ color: "white", fontSize: "18px" }}>10N/11D</p>
              </div>
             </div>

              <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              >
              <div
                style={{ textAlign: "left", color: "white", fontSize: "16px" }}
              >
                <FaUtensils /> Meals
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <FaHotel /> Hotels
              </div>
              <div
                style={{ textAlign: "right", color: "white", fontSize: "16px" }}
              >
                <FaBinoculars /> Sightseeing
              </div>
            </div>
          </div>
               <div
              style={{ textAlign: "center", marginTop: "10px", color: "white" }}
              >
              <h2
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Booking Form
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  background: "black",
                  padding: "30px",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "white",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Select a Date:
                  </label>
                  <input
                    type="date"
                    name="selectDate"
                    value={formData.selectDate}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ width: "48%", textAlign: "left" }}>
                    <label
                      style={{
                        color: "white",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      No. of Adults:
                    </label>
                    <input
                      type="text"
                      name="numOfAdults"
                      value={formData.numOfAdults}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ width: "48%", textAlign: "right" }}>
                    <label
                      style={{
                        color: "white",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      No. of Children (6-11 years old):
                    </label>
                    <input
                      type="text"
                      name="numOfChildren6To11"
                      value={formData.numOfChildren6To11}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ width: "48%", textAlign: "left" }}>
                    <label
                      style={{
                        color: "white",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      No. of Children (2-5 years old):
                    </label>
                    <input
                      type="text"
                      name="numOfChildren2To5"
                      value={formData.numOfChildren2To5}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ width: "48%", textAlign: "right" }}>
                    <label
                      style={{
                        color: "white",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      No. of Infants (Below 2 years):
                    </label>
                    <input
                      type="text"
                      name="numOfInfants"
                      value={formData.numOfInfants}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "white",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Flight (Optional):
                  </label>
                  <input
                    type="text"
                    name="flight"
                    value={formData.flight}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "white",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Visa (Optional):
                  </label>
                  <input
                    type="text"
                    name="visa"
                    value={formData.visa}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                  <label
                    style={{
                      color: "white",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Discount Amount:
                  </label>
                  <input
                    type="text"
                    name="discountAmount"
                    value={formData.discountAmount}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: "20px",
                    background: "white",
                    color: "black",
                    padding: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    fontSize: "16px",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                >
                  ADD TO CART
                </button>
              </form>
               </div>
        </div>  
  
      </div>
    </div>
  );
}

export default Australia;
