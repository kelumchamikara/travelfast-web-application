// import React, { useState } from "react";

// export default function VehicleBook() {
//   const [startDate, setStartDate] = useState("2025-05-14");
//   const [endDate, setEndDate] = useState("2025-05-27");

//   const vehicles = [
//     { name: "Toyota KDH", img: "/vehicles/KDH.jpeg" },
//     { name: "Toyota Allion", img: "/vehicles/Allion.jpeg" },
//     { name: "BMW", img: "/vehicles/BMW.jpg" },
//     { name: "Toyota Coaster Mini Bus", img: "/vehicles/Coaster.jpeg" },
//     { name: "Toyota Aqua", img: "/vehicles/Aqua.jpeg" },
//     { name: "Honda Fit Shuttle", img: "/vehicles/Fit Shuttle.jpeg" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Book A Vehicle</h1>

//       <div className="space-y-4">
//         <input className="w-full p-3 rounded shadow" type="text" placeholder="Full name" />
//         <input className="w-full p-3 rounded shadow" type="text" placeholder="Address" />

//         <div className="flex gap-2">
//           <select className="p-3 rounded shadow">
//             <option>94</option>
//             {/* Add more country codes if needed */}
//           </select>
//           <input className="flex-grow p-3 rounded shadow" type="tel" placeholder="Contact" />
//         </div>

//         <input className="w-full p-3 rounded shadow" type="email" placeholder="E-Mail" />
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Duration</h2>
//         <div className="flex gap-4">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="p-3 rounded shadow"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="p-3 rounded shadow"
//           />
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
//         <div className="grid gap-4">
//           {vehicles.map((vehicle, index) => (
//             <div key={index} className="flex items-center gap-4 p-4 rounded shadow hover:bg-gray-50 cursor-pointer">
//               <img src={vehicle.img} alt={vehicle.name} className="w-24 h-auto" />
//               <span className="text-lg font-medium">{vehicle.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-10 text-center">
//         <button className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
//   borderRadius: "1rem",
//   marginTop: "2rem",
// };

// const center = {
//   lat: 6.1378, // Example coordinates near Yatadolawatta
//   lng: 80.1141,
// };

// export default function VehicleBook() {
//   const [startDate, setStartDate] = useState("2025-05-14");
//   const [endDate, setEndDate] = useState("2025-05-27");

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDGCzBNI1C7-66Wjbkqj1Nf_66hvzAQhgo",
//   });

//   const vehicles = [
//     { name: "Toyota KDH", img: "/vehicles/KDH.jpeg" },
//     { name: "Toyota Allion", img: "/vehicles/Allion.jpeg" },
//     { name: "BMW", img: "/vehicles/BMW.jpg" },
//     { name: "Toyota Coaster Mini Bus", img: "/vehicles/Coaster.jpeg" },
//     { name: "Toyota Aqua", img: "/vehicles/Aqua.jpeg" },
//     { name: "Honda Fit Shuttle", img: "/vehicles/Fit Shuttle.jpeg" },
//   ];

//   if (loadError) return <div>Error loading map</div>;
//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Book A Vehicle</h1>

//       <div className="space-y-4">
//         <input className="w-full p-3 rounded shadow" type="text" placeholder="Full name" />
//         <input className="w-full p-3 rounded shadow" type="text" placeholder="Address" />

//         <div className="flex gap-2">
//           <select className="p-3 rounded shadow">
//             <option>94</option>
//           </select>
//           <input className="flex-grow p-3 rounded shadow" type="tel" placeholder="Contact" />
//         </div>

//         <input className="w-full p-3 rounded shadow" type="email" placeholder="E-Mail" />
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Duration</h2>
//         <div className="flex gap-4">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="p-3 rounded shadow"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="p-3 rounded shadow"
//           />
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
//         <div className="grid gap-4">
//           {vehicles.map((vehicle, index) => (
//             <div key={index} className="flex items-center gap-4 p-4 rounded shadow hover:bg-gray-50 cursor-pointer">
//               <img src={vehicle.img} alt={vehicle.name} className="w-24 h-auto" />
//               <span className="text-lg font-medium">{vehicle.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Google Map Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-2">Mark The Route</h2>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={15}
//           center={center}
//         >
//           <Marker position={center} />
//         </GoogleMap>
//       </div>

//       <div className="mt-10 text-center">
//         <button className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1rem",
  marginTop: "2rem",
};

const center = {
  lat: 6.1378,
  lng: 80.1141,
};

export default function VehicleBook() {
  const [startDate, setStartDate] = useState("2025-05-14");
  const [endDate, setEndDate] = useState("2025-05-27");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGCzBNI1C7-66Wjbkqj1Nf_66hvzAQhgo",
  });

  const vehicles = [
    { name: "Toyota KDH", img: "/vehicles/KDH.jpeg" },
    { name: "Toyota Allion", img: "/vehicles/Allion.jpeg" },
    { name: "BMW", img: "/vehicles/BMW.jpg" },
    { name: "Toyota Coaster Mini Bus", img: "/vehicles/Coaster.jpeg" },
    { name: "Toyota Aqua", img: "/vehicles/Aqua.jpeg" },
    { name: "Honda Fit Shuttle", img: "/vehicles/Fit Shuttle.jpeg" },
  ];

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book A Vehicle</h1>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded shadow"
          type="text"
          placeholder="Full name"
        />
        <input
          className="w-full p-3 rounded shadow"
          type="text"
          placeholder="Address"
        />

        <div className="flex gap-2">
          <select className="p-3 rounded shadow">
            <option>94</option>
          </select>
          <input
            className="flex-grow p-3 rounded shadow"
            type="tel"
            placeholder="Contact"
          />
        </div>

        <input
          className="w-full p-3 rounded shadow"
          type="email"
          placeholder="E-Mail"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Duration</h2>
        <div className="flex gap-4 flex-col sm:flex-row">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-3 rounded shadow w-full"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-3 rounded shadow w-full"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded shadow hover:bg-gray-50 cursor-pointer bg-white"
            >
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="w-20 h-16 object-cover rounded"
              />
              <span className="text-base font-medium">{vehicle.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Mark The Route</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800">
          Book Now
        </button>
      </div>
    </div>
  );
}

