
import React, {useEffect, useState} from 'react'
import Navbar from '../../../Navbar';
import Navbar2 from '../../../Sidebar/Navbar2';
import axios from 'axios';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    executiveName: '',
    teamLeaderName: '',
    groupLeaderName: '',
    channelPartnerRefNo: '',
    guestFirstName: '',
    guestLastName: '',
    guestCity: '',
    country: '',
    state: '',
    phoneNumber: '',
    emailAddress: '',
    orderNotes: '',
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
    // Implement logic for form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px',  fontFamily: 'Arial, sans-serif', position: "relative", right: "20%" }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Billing and Shipping</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        {/* Input fields for each property */}
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Executive Name:</label>
          <input
            type="text"
            name="executiveName"
            value={formData.executiveName}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Team Leader Name:</label>
          <input
            type="text"
            name="teamLeaderName"
            value={formData.teamLeaderName}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Group Leader Name:</label>
          <input
            type="text"
            name="groupLeaderName"
            value={formData.groupLeaderName}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Channel Partner Reference No.:</label>
          <input
            type="text"
            name="channelPartnerRefNo"
            value={formData.channelPartnerRefNo}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Guest First Name:</label>
          <input
            type="text"
            name="guestFirstName"
            value={formData.guestFirstName}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Guest Last Name:</label>
          <input
            type="text"
            name="guestLastName"
            value={formData.guestLastName}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Guest City:</label>
          <input
            type="text"
            name="guestCity"
            value={formData.guestCity}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', width: '30%', color: '#555' }}>Order Notes:</label>
          <textarea
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            style={{ padding: '8px', width: '50%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            fontSize: '16px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

function BillingShipping() {
  return (
    <div className="main-container">
      <div className="nav-main">
        <Navbar />
      </div>
      <div className="sec-nav">
        <Navbar2 />
      </div>
      <div className="main-content">
        <OrderPage />
      </div>
    </div>
  );
}

export default BillingShipping
