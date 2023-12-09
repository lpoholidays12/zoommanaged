// import { useEffect } from 'react';
// import axios from "./axios"; 
import './bookings.css';
import { FaUserEdit } from "react-icons/fa";


const Bookings = () => {
  
  // const [bookingData, setBookingData] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/bookingData")
  //     .then(response => {
  //       // Set the data in state
  //       setBookingData(response.data);
  //     })
  //     .catch(error => {
  //       // Handle errors here
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); // Dependency array is empty to ensure the effect runs only once on component mount



  const bookingData = [
    { 
      bookingNo: 1,
      name: "Donald",
      package: "European Explorer",
      date: "01/12/2023"
    },
    { 
      bookingNo: 2,
      name: "Barak",
      package: "European Explorer",
      date: "01/12/2023"
    },
    { 
      bookingNo: 3,
      name: "Hillary",
      package: "European Explorer",
      date: "01/12/2023"
    },
    { 
      bookingNo: 4,
      name: "Biden",
      package: "European Explorer",
      date: "01/12/2023"
    }
  ];

  const isSales = false;

  return ( 
     <section className='container'>
        <div className='table-template-section mb-4'>
          <table>
            <thead className="tableHeader">
              <tr>
                <th>Booking No.</th>
                <th>Name</th>
                <th>Package</th>
                <th>Date</th>
                {!isSales && <th>Edit</th>}
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr key={booking.bookingNo}>
                  <td>{booking.bookingNo}</td>
                  <td>{booking.name}</td>
                  <td>{booking.package}</td>
                  <td>{booking.date}</td>
                  {!isSales && (
                    <td>
                      <a href="/"><FaUserEdit /> </a>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
     </section>
  );
};

export default Bookings;
