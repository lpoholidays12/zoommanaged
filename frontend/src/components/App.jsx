// import React, {useState, useEffect} from "react";
// import Entry from "./Entry";


// function createEntry(records){
//   return (
//     <Entry 
//     id = {records.id}
//     key = {records.id}
//     name = {records.name}
//     phone = {records.phone}
//     address = {records.address}
//     email = {records.email}
//     backgroundColor = {records.backgroundColor}

//     />
//   )
// }



// function App() {
//   const url = "https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d";
//   const [data, setData] = useState([]);

//   const fetchInfo = () => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((d) => setData(d))
//   }


//   useEffect(() => {
//     fetchInfo();
//   }, []);

  

//   return (
//     <div>
//       <h1>
//         <span>Employee Profile Card</span>
//       </h1>

//       <dl className="dictionary">
//       {data.map(createEntry)}
//       </dl>
//     </div>
//   );
// }

// export default App;
