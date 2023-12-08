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
      <h1>Checkout Page</h1>
     <form style={{border: "1px solid black", width:"20%", padding:"10px"}}>
        <h2>Your order</h2>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h3 style={{marginLeft: "10px"}}>Product</h3>
                    <h3 style={{marginLeft: "90px"}}>Subtotal</h3>
                </div>
        <hr></hr>
        <div style={{display: "flex", flexDirection: "row"}}>
                    <h4 style={{marginLeft: "10px"}}>Package Name</h4>
                    <h4 style={{marginLeft: "10px"}}>No of packs</h4>
                    <h4 style={{marginLeft: "10px"}}>₹875000/-</h4>
                </div>
                <hr></hr>
            
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h4 style={{marginLeft: "10px"}}>Subtotal</h4>
                    <h4 style={{marginLeft: "130px"}}>₹875000/-</h4>
                </div>
                <hr></hr>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h4 style={{marginLeft: "10px"}}>Taxes</h4>
                    <h4 style={{marginLeft: "150px"}}>₹87500/-</h4>
                </div>
                <hr></hr>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h4 style={{marginLeft: "10px"}}>Final Total</h4>
                    <h4 style={{marginLeft: "115px"}}>₹962500/-</h4>
                </div>
        

     </form>
     
    </div>
  );
};

export default SimpleForm;
