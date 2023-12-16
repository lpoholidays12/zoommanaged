import { useState } from "react";
import axios from "axios"
import Navbar from "../../../components/Navbar";

const PackageDetails = () => {
  const [formData, setFormData] = useState({
    selectDate: "",
    numOfAdults: "",
    numOfChildren6To11: "",
    numOfChildren2To5: "",
    numOfInfants: "",
    flight: "",
    visa: "",
    discountAmount: "",
    activities: "",
    others: "",
    streetAddress: "",
    selectState: "",
    pinCode: "",
    country: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  const [guests, setGuests] = useState([{name : "", age: "", passport: "" }]);

  const handleChange2 = (e, index) => {
    const { name, value } = e.target;
    setGuests((prevGuests) => {
      const newGuests = [...prevGuests];
      newGuests[index] = { ...newGuests[index], [name]: value };
      return newGuests;
    });
  };

  const handleAddMore = () => {
    setGuests((prevGuests) => [
      ...prevGuests,
      { name: "", age: "", passport: "" },
    ]);
  };

  const handleDeleteMore = () => {
    if (guests.length > 1) {
      setGuests((prevGuests) => prevGuests.slice(0, -1));
    }
  };
 //   // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
axios.post("http://localhost:5000/booking", {formData, guests})
      // Implement logic for form submission, e.g., send data to the server
      console.log('Form submitted:',formData , 'guest submitted:', guests);
    };

  //   const handleSubmit2 = (e) => {
  //     e.preventDefault();
  //     // Implement logic for form submission, e.g., send data to the server
  //     console.log('Form submitted:', guests);
  //   };

  const handleDiscard = async () => {
    setFormData({
        selectDate: "",
        numOfAdults: "",
        numOfChildren6To11: "",
        numOfChildren2To5: "",
        numOfInfants: "",
        flight: "",
        visa: "",
        discountAmount: "",
        activities: "",
        others: "",
        streetAddress: "",
        selectState: "",
        pinCode: "",
        country: "",
      })
  
    setGuests([]);
  };

  return (
    <>
      <Navbar />
      <section className="package_details">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-7">
              <div className="title mb-1">
                <h2>European Elegance </h2>
                <p className="package_duration mt-0">11 Days</p>
              </div>
              <ul className="lists my-3">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="green"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                  <span> Meals </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="green"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                  <span> Hotels </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="green"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                  <span> Sight Seeing </span>
                </li>
              </ul>
              <div className="product_images">
                <img src="/images/germany.jpg" alt="" srcSet="" />
              </div>
              <div className="package_features">
                <div className="row">
                  <div className="col-4">
                    <div className="package_features_card">
                      <img src="/images/analysis.png" alt="" />
                      <p>Overview</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="package_features_card">
                      <img src="/images/hotel.png" alt="" />
                      <p>Hotels</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="package_features_card">
                      <img src="/images/booking.png" alt="" />
                      <p>Bookings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="package_pricing ">
                <p>STARTING PRICE</p>
                <h3>
                  <b> ₹ 1,25,000 </b>
                </h3>
                <small>per person</small>
              </div>
              <ul className="sessions my-4 ">
                <li>
                  <div className="place">Paris</div>
                </li>
                <li>
                  <div className="place">Belgium</div>
                </li>
                <li>
                  <div className="place">Amsterdam</div>
                </li>
                <li>
                  <div className="place">Germany</div>
                </li>
              </ul>
              <p className="package_description ">
                Get a chance to explore the best travel packages from India to
                Europe with our prodigious European elegance package of 10
                nights &amp; 11 days starting with INR 1,15,000 per person. Its
                not only a trip but a trip with delicious breakfast lunch and
                meal included. Also with beautiful sightseeing like Atomium,
                Grand Palace, Heritage City of Amsterdam, Cheese Factory, Royal
                Palace and many more to surprise you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="package_enquiry">
        <div className="container">
          <div className="title orange">
            <h3>Package Details</h3>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="package_enquiry_form form_section">
                <div className="row">
                  <h5 className="mb-3">
                    <b>Departure Date</b>
                  </h5>
                  <div className="col-md-6">
                    <div className="input_field">
                      <label htmlFor="date">Select a date *</label>
                      <input
                        type="date"
                        id="selectDate"
                        name="selectDate"
                        value={formData.selectDate}
                        placeholder="Enter date"
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="categoryError">
                        Product Category is required.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h5 className="mb-3">
                    <b>No. of PAX</b>
                  </h5>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="numOfAdults">No. of Adults* </label>
                      <input
                        type="number"
                        id="numOfAdults"
                        name="numOfAdults"
                        placeholder="Enter No. of Adults"
                        value={formData.numOfAdults}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="numOfChildren6To11">
                        No. of Children (6-11 years old)
                      </label>
                      <input
                        type="number"
                        id="numOfChildren6To11"
                        name="numOfChildren6To11"
                        placeholder="Enter No. of Children"
                        value={formData.numOfChildren6To11}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="numOfChildren2To5">
                        No. of Children (2-5 years old)
                      </label>
                      <input
                        type="number"
                        id="numOfChildren2To5"
                        name="numOfChildren2To5"
                        placeholder="Enter No. of child(2-5)"
                        value={formData.numOfChildren2To5}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="numOfInfants">
                        Infant (below 2 years old)
                      </label>
                      <input
                        type="number"
                        id="numOfInfants"
                        name="numOfInfants"
                        placeholder="Enter No. of Infant(Below 2)"
                        value={formData.numOfInfants}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="flight">Flight (Optional)</label>
                      <input
                        type="number"
                        id="flight"
                        name="flight"
                        placeholder="Enter No. of Flight"
                        value={formData.flight}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="visa">Visa (Optional)</label>
                      <input
                        type="number"
                        id="visa"
                        name="visa"
                        placeholder="Enter No. of Visa"
                        value={formData.visa}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <label htmlFor="discountAmount">Discount Amount</label>
                      <input
                        type="number"
                        id="discountAmount"
                        name="discountAmount"
                        placeholder="Enter Discount Amount"
                        value={formData.discountAmount}
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="contactError">
                        This field is required
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h5 className="mb-3">
                    <b>Add On's</b>
                  </h5>
                  <div className="col-md-6">
                    <div className="input_field">
                      <label htmlFor="">Activities </label>
                      <select
                        id="activities"
                        name="activities"
                        value={formData.activities}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="skydiving">Skydiving</option>
                        <option value="boating">Boating</option>
                        <option value="trekking">Trekking</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input_field">
                      <label htmlFor="others">Other's</label>
                      <textarea
                        name="others"
                        id="others"
                        rows="6"
                        value={formData.others}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <h5 className="mb-3">
                    <b>Customer Detail's</b>
                  </h5>

                  {guests.map((guest, index) => (
                    <>
                      {" "}
                      <div className="col-md-4" key={index}>
                        <div className="input_field">
                          <label htmlFor={`fullName_${index}`  }>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name={'name'}
                            id={`customer_name_${index}`}
                            placeholder="Enter Full Name"
                            value={guest.name}
                            onChange={(e) => handleChange2(e, index)}
                          />
                          <span className="error_msg" id={`nameError_${index}`}>
                            This field is required
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4" key={index}>
                        <div className="input_field">
                          <label htmlFor={`age_${index}`}>Age *</label>
                          <input
                            type="text"
                            name={'age'}
                            id={`customer_age_${index}`}
                            placeholder="Enter Age"
                            value={guest.age}
                            onChange={(e) => handleChange2(e, index)}
                          />
                          <span className="error_msg" id={`nameError_${index}`}>
                            This field is required
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4" key={index}>
                        <div className="input_field">
                          <label htmlFor={`passport_${index}`}>
                            Passport *
                          </label>
                          <input
                            type="text"
                            name={'passport'}
                            id={`customer_passport_${index}`}
                            placeholder="Enter Passport Details"
                            value={guest.passport}
                            onChange={(e) => handleChange2(e, index)}
                          />
                          <span className="error_msg" id={`nameError_${index}`}>
                            This field is required
                          </span>
                        </div>
                      </div>
                    </>
                  ))}

                  {/* <div className="col-md-4">
                    <div className="input_field">
                    <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                name="fullName"
                id="customer_name"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
                      <span className="error_msg" id="nameError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                    <label htmlFor="age">Age *</label>
              <input
                type="text"
                name="age"
                id="customer_age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleChange}
              />
                      <span className="error_msg" id="nameError">
                        This field is required
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <label htmlFor="">Passport *</label>
                      <input
                        type="text"
                        name="Passport"
                        id="customer_passport"
                        placeholder="Enter Passport Details"
                        onChange={handleChange}
                      />
                      <span className="error_msg" id="nameError">
                        This field is required
                      </span>
                    </div>
                  </div> */}
                </div>
                <div className="row text-end">
                  <div className="col-sm-4 ">
                    <div className="input_field ">
                      <button id="addUser" onClick={handleAddMore}>
                        Add User
                      </button>
                    </div>
                    <div className="input_field ">
                      <button id="addUser" onClick={handleDeleteMore}>
                        Delete User
                      </button>
                    </div>
                  </div>
                  {/* <div className="table-template-section mb-4">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Passport</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody id="customer_data_table"></tbody>
                    </table>
                  </div> */}
                </div>
                <div className="input_field">
                  <h5 className="mb-3">
                    <b>Additional Detail's</b>
                  </h5>
                  <div className="input_field">
                    <label htmlFor="">Street Address</label>
                    <textarea
                      name="streetAddress"
                      id="streetAddress"
                      rows="3"
                      value={formData.streetAddress}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input_field">
                        <label htmlFor="">Select State</label>
                        <select
                          id="selectState"
                          name="selectState"
                          value={formData.selectState}
                          onChange={handleChange}
                        >
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input_field">
                        <label htmlFor="pinCode">Pin Code</label>
                        <input
                          type="text"
                          name="pinCode"
                          placeholder="eg.000000"
                          value={formData.pinCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="">Country Name *</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="error_msg" id="emailError">
                    Country Name is required.
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="input_field mb-3">
                      <button id="submitButton"onClick={handleSubmit}>Submit Information</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_field bg-red mb-0">
                      <button id="cancelButton" onClick={handleDiscard}>
                        Discard
                      </button> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
