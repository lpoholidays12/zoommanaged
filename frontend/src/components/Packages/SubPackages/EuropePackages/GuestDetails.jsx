import React, { useState } from 'react';
import Navbar from '../../../Navbar';
import Navbar2 from '../../../Sidebar/Navbar2';

const CheckoutPage = () => {
  const [guests, setGuests] = useState([
    { name: '', age: '', passport: '' },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setGuests((prevGuests) => {
      const newGuests = [...prevGuests];
      newGuests[index] = { ...newGuests[index], [name]: value };
      return newGuests;
    });
  };

  const handleAddMore = () => {
    setGuests((prevGuests) => [...prevGuests, { name: '', age: '', passport: '' }]);
  };

  const handleDeleteMore = () => {
    if (guests.length > 1) {
      setGuests((prevGuests) => prevGuests.slice(0, -1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for form submission, e.g., send data to the server
    console.log('Form submitted:', guests);
  };

  return (
    <div style={{ textAlign: 'center', margin: '5px', marginLeft: "50px", maxWidth: '600px' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'YourDesiredFont, sans-serif', fontStyle: 'italic' }}>Guest Details Page</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column' , textAlign: 'center'}}>
        {guests.map((guest, index) => (
          <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={guest.name}
              onChange={(e) => handleChange(e, index)}
              placeholder="John Doe"
            />
            <label style={{ marginLeft: '20px', marginRight: '10px' }}>Age:</label>
            <input
              type="number"
              name="age"
              value={guest.age}
              onChange={(e) => handleChange(e, index)}
              placeholder="30"
            />
            <label style={{ marginLeft: '20px', marginRight: '10px' }}>Passport:</label>
            <input
              type="text"
              name="passport"
              value={guest.passport}
              onChange={(e) => handleChange(e, index)}
              placeholder="A1234567"
            />
          </div>
        ))}
            <div> <button type="button" onClick={handleAddMore}  style={{
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px', // Set border-radius to create rounded corners
    transition: 'background-color 0.3s ease, color 0.3s ease', // Add a smooth transition effect for background color and text color
    backgroundColor: 'black', // Set the initial background color
    color: 'white', // Set the initial text color
    border: 'none', // Remove default button border
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = 'white'; // Change background color on hover
    e.target.style.color = 'black'; // Change text color on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = 'black'; // Restore initial background color on mouse out
    e.target.style.color = 'white'; // Restore initial text color on mouse out
  }}
>
          Add More
        </button>
 
        <button
  type="button"
  onClick={handleDeleteMore}
  style={{
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px', // Set border-radius to create rounded corners
    transition: 'background-color 0.3s ease, color 0.3s ease', // Add a smooth transition effect for background color and text color
    backgroundColor: 'black', // Set the initial background color
    color: 'white', // Set the initial text color
    border: 'none', // Remove default button border
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = 'white'; // Change background color on hover
    e.target.style.color = 'black'; // Change text color on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = 'black'; // Restore initial background color on mouse out
    e.target.style.color = 'white'; // Restore initial text color on mouse out
  }}
>
  Delete More
</button>


        <button
  type="submit"
  style={{
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px', // Set border-radius to create rounded corners
    transition: 'background-color 0.3s ease', // Add a smooth transition effect
    backgroundColor: 'black', // Set the initial background color
    color: 'white',// Set the text color
    border: 'none', // Remove default button border
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = 'white'; // Change background color on hover
    e.target.style.color = 'black'; // Change text color on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = 'black'; // Restore initial background color on mouse out
    e.target.style.color = 'white'; // Restore initial text color on mouse out
  }}
>
  Submit
</button>

  </div>
           </form>
    </div>
  );
};

function GuestDetails() {
  return (
    <div className="main-container">
      <div className="nav-main">
        <Navbar />
      </div>
      <div className="sec-nav">
        <Navbar2 />
      </div>
      <div className="main-content">
        <CheckoutPage />
      </div>
    </div>
  );
}

export default GuestDetails;
