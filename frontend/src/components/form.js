import React, { useState } from 'react';

const SimpleForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    selectDate: '',
    numOfAdults: '',
    numOfChildren6To11: '',
    numOfInfants: '',
    flight: '',
    visa: '',
    discountAmount: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  const [guests, setGuests] = useState([
    { name: '', age: '', passport: '' },
  ]);

  const handleChange2 = (e, index) => {
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

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Implement logic for form submission, e.g., send data to the server
    console.log('Form submitted:', guests);
  };

  const handleDiscard = () => {
    // Implement logic to reset form data
    setFormData({
      selectDate: '',
      numOfAdults: '',
      numOfChildren6To11: '',
      numOfInfants: '',
      flight: '',
      visa: '',
      discountAmount: '',
      channelPartnerRefNo: '',  // Reset other fields as needed
      // Reset other form fields as needed
    });
  };

  return (
    <div>
      <h1>Package Name : Package Duration</h1>
      <h1>Starting Price</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <label htmlFor="selectDate">Select a Date:</label>
          <input
            type="date"
            id="selectDate"
            name="selectDate"
            value={formData.selectDate}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="numOfAdults">No. of Adults* :</label>
            <input
              type="text"
              id="numOfAdults"
              name="numOfAdults"
              value={formData.numOfAdults}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numOfChildren6To11">No. of Children (6-11 years old):</label>
            <input
              type="text"
              id="numOfChildren6To11"
              name="numOfChildren6To11"
              value={formData.numOfChildren6To11}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="numOfChildren2To5">No. of Children (2-5 years old):</label>
            <input
              type="text"
              id="numOfChildren2To5"
              name="numOfChildren2To5"
              value={formData.numOfChildren2To5}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numOfInfants">Infant (below 2 years old):</label>
            <input
              type="text"
              id="numOfInfants"
              name="numOfInfants"
              value={formData.numOfInfants}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="flight">Flight (Optional):</label>
            <input
              type="text"
              id="flight"
              name="flight"
              value={formData.flight}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="visa">Visa (Optional):</label>
            <input
              type="text"
              id="visa"
              name="visa"
              value={formData.visa}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="discountAmount">Discount Amount:</label>
          <input
            type="text"
            id="discountAmount"
            name="discountAmount"
            value={formData.discountAmount}
            onChange={handleChange}
          />
        </div>
        <br />
        <br />

        <h1>Guest Details</h1>

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
        <div> <button type="button" onClick={handleAddMore} style={{
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

          <h1>Billing and Shipping</h1>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="numOfAdults">Executive Name :</label>
              <input
                type="text"
                id="numOfAdults"
                name="numOfAdults"
                value={formData.numOfAdults}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="numOfChildren6To11">Team Leader Name :</label>
              <input
                type="text"
                id="numOfChildren6To11"
                name="numOfChildren6To11"
                value={formData.numOfChildren6To11}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="numOfAdults">Group Leader Name :</label>
              <input
                type="text"
                id="numOfAdults"
                name="numOfAdults"
                value={formData.numOfAdults}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="numOfChildren6To11">Channel Partner Name :</label>
              <input
                type="text"
                id="numOfChildren6To11"
                name="numOfChildren6To11"
                value={formData.numOfChildren6To11}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="channelPartnerRefNo">Channel Partner Reference No. :</label>
            <input
              type="text"
              id="channelPartnerRefNo"
              name="channelPartnerRefNo"
              value={formData.channelPartnerRefNo}
              onChange={handleChange}
            />
          </div>

         


          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="numOfAdults">Guest First Name* :</label>
              <input
                type="text"
                id="numOfAdults"
                name="numOfAdults"
                value={formData.numOfAdults}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="numOfChildren6To11">Guest Last Name :</label>
              <input
                type="text"
                id="numOfChildren6To11"
                name="numOfChildren6To11"
                value={formData.numOfChildren6To11}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="numOfAdults">Guest City* :</label>
              <input
                type="text"
                id="numOfAdults"
                name="numOfAdults"
                value={formData.numOfAdults}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="numOfChildren6To11">Country* :</label>
              <input
                type="text"
                id="numOfChildren6To11"
                name="numOfChildren6To11"
                value={formData.numOfChildren6To11}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="selectDate">state* :</label>
            <input
              type="text"
              id="selectDate"
              name="selectDate"
              value={formData.selectDate}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
  <label htmlFor="channelPartnerRefNo">Additional info :</label>
  <input
    type="text"
    id="channelPartnerRefNo"
    name="channelPartnerRefNo"
    value={formData.channelPartnerRefNo}
    onChange={handleChange}
    style={{height: "60px", width:"280px" }}
  />
</div>


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

          <button
        type="button"
        style={{
          margin: '10px',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = 'red';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'red';
          e.target.style.color = 'white';
        }}
        onClick={handleDiscard}
      >
        Discard
      </button>


        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
