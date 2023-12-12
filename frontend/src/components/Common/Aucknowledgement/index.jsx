// import { useState } from "react";
import "./AckPage.css";
import Navbar from "../../Navbar/index";
import Avatar from "./Avatar.png";
import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const departments = [
  {
    id: 1,
    name: "Accounts",
  },
  {
    id: 2,
    name: "Visa",
  },
  {
    id: 3,
    name: "Flight",
  },
  {
    id: 4,
    name: "Hotel",
  },
  {
    id: 5,
    name: "Sight-Seeing",
  },
  {
    id: 6,
    name: "Coach Booking",
  },
];

const bookingData = [
  {
    bookingNo: 1,
    paymentTitle: "Prebooking",
    cash: "10000",
    paymentStatus: "paid",
  },
  {
    bookingNo: 2,
    paymentTitle: "Before Visa",
    cash: "30000",
    paymentStatus: "paid",
  },
  {
    bookingNo: 3,
    paymentTitle: "After Visa",
    cash: "25000",
    paymentStatus: "pending",
  },
  {
    bookingNo: 4,
    paymentTitle: "Before Deparature",
    cash: "50000",
    paymentStatus: "pending",
  },
];

const visaData = [
  {
    bookingNo: 1,
    flightName: "WK 220",
    from: "Munich(MUC) T1",
    to: "Amsterdam(AMS)",
    aircraft: "333",
    classStatus: "Y Confirmed",
  },
  {
    bookingNo: 2,
    flightName: "WK 5580",
    from: "Frantfart (France) T2",
    to: "Liverpool",
    aircraft: "321",
    classStatus: "Y Confirmed",
  },
];

const flightData = [
  {
    bookingNo: 1,
    passengerName: "Ramesh",
    ticketNo: "123-456-789",
  },
  {
    bookingNo: 2,
    passengerName: "Suresh",
    ticketNo: "456-789-123",
  },
];

export default function Acknowledgement() {
  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [checkboxName]: !prevStates[checkboxName],
    }));
  };
  return (
    <>
      <Navbar />
      <div className="centered-div">
        <div className="flex-container">
          <img src={Avatar} alt="Your Alt Text" className="image" />
          <div className="flex-div" id="item1">
            <p>Name : Harley Sampson</p>
            <p>Data of Birth : 12-04-1989</p>
            <p>Package Details : Europe Explorer</p>
            <p>Number of Passenger : 2</p>
            <p>Cost : 123000/-</p>
            <p>Travel Date : 21-02-2024</p>
            <p>Inclusion/Exclusion : 120000/-</p>
          </div>
          <div className="flex-div" id="item2">
            <div>
            {departments.map((item) => (
        <div key={item.id}>
          {checkboxStates[`checkbox${item.id}`] ? (
            <FaCheckSquare onClick={() => handleCheckboxChange(`checkbox${item.id}`)} />
          ) : (
            <FaRegSquare onClick={() => handleCheckboxChange(`checkbox${item.id}`)} />
          )}
          {item.name}
        </div>
      ))}
            </div>
          </div>
        </div>
        <hr />
        <h2 className="subheading">Transaction Details:</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Payment Title</th>
              <th>Cash</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.bookingNo}>
                <td>{booking.paymentTitle}</td>
                <td>{booking.cash}</td>
                <td>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <h2 className="subheading"> Visa Team :</h2>
        <div className="grid gap-3">
          <div className="p-2 g-col-6">Location:</div>
          <div className="p-2 g-col-6">Profession of Passengers:</div>
          <div className="p-2 g-col-6">Nearest vfs center:</div>
          <div className="p-2 g-col-6">Visa Location:</div>
        </div>
        <h2 className="subheading2">
          <strong>Documents Uploads:</strong>
        </h2>

        <p>Salary Statement</p>

        <p>ITR</p>
        <hr />
        <h2 className="subheading"> Flight Team :</h2>
        <section>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Flight</th>
                <th>From</th>
                <th>To</th>
                <th>Aircraft</th>
                <th>Class / Status</th>
              </tr>
            </thead>
            <tbody>
              {visaData.map((booking) => (
                <tr key={booking.bookingNo}>
                  <td>{booking.flightName}</td>
                  <td>{booking.from}</td>
                  <td>{booking.to}</td>
                  <td>{booking.aircraft}</td>
                  <td>{booking.classStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <br />
        <br />
        <section>
          {" "}
          <table className="custom-table">
            <thead>
              <tr>
                <th>Passenger Name</th>

                <th>Ticket Number</th>
              </tr>
            </thead>
            <tbody>
              {flightData.map((booking) => (
                <tr key={booking.bookingNo}>
                  <td>{booking.passengerName}</td>
                  <td>{booking.ticketNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
