import Navbar from '../../Navbar';
import './bookings.css';
import { FaUserEdit } from "react-icons/fa";

const Bookings = () => {
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
    <div>
      <Navbar />
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
          <tbody id="customer_data_table">
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
    </div>
  );
};

export default Bookings;
