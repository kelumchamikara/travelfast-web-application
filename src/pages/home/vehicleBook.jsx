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



//---------------------------------------------------------------------------------


// import React, { useState } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
//   borderRadius: "1rem",
//   marginTop: "2rem",
// };

// const center = {
//   lat: 6.1378,
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
//         <input
//           className="w-full p-3 rounded shadow"
//           type="text"
//           placeholder="Full name"
//         />
//         <input
//           className="w-full p-3 rounded shadow"
//           type="text"
//           placeholder="Address"
//         />

//         <div className="flex gap-2">
//           <select className="p-3 rounded shadow">
//             <option>94</option>
//           </select>
//           <input
//             className="flex-grow p-3 rounded shadow"
//             type="tel"
//             placeholder="Contact"
//           />
//         </div>

//         <input
//           className="w-full p-3 rounded shadow"
//           type="email"
//           placeholder="E-Mail"
//         />
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Duration</h2>
//         <div className="flex gap-4 flex-col sm:flex-row">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="p-3 rounded shadow w-full"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="p-3 rounded shadow w-full"
//           />
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {vehicles.map((vehicle, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 p-4 rounded shadow hover:bg-gray-50 cursor-pointer bg-white"
//             >
//               <img
//                 src={vehicle.img}
//                 alt={vehicle.name}
//                 className="w-20 h-16 object-cover rounded"
//               />
//               <span className="text-base font-medium">{vehicle.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

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
import emailjs from '@emailjs/browser';

export default function VehicleBook() {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    contact: "",
    email: "",
    startDate: "2025-05-14",
    endDate: "2025-05-27",
    vehicle: "",
  });

  const vehicles = [
    { name: "Toyota KDH", img: "/vehicles/KDH.jpeg" },
    { name: "Toyota Allion", img: "/vehicles/Allion.jpeg" },
    { name: "BMW", img: "/vehicles/BMW.jpg" },
    { name: "Toyota Coaster Mini Bus", img: "/vehicles/Coaster.jpeg" },
    { name: "Toyota Aqua", img: "/vehicles/Aqua.jpeg" },
    { name: "Honda Fit Shuttle", img: "/vehicles/Fit Shuttle.jpeg" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_bl8d0iq",
      "template_8dzde6i",
      {
        full_name: form.fullName,
        address: form.address,
        contact: form.contact,
        email: form.email,
        start_date: form.startDate,
        end_date: form.endDate,
        vehicle: form.vehicle,
      },
      "hpNR_PGhCpS7-55hI"
    )
    .then(() => {
      alert("Booking details sent successfully!");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send booking. Please try again.");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book A Vehicle</h1>

      <input
        className="w-full p-4 mb-4 rounded-xl shadow"
        type="text"
        placeholder="Full name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        required
      />

      <input
        className="w-full p-4 mb-4 rounded-xl shadow"
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      />

      <div className="flex gap-3 mb-4">
        <select className="p-4 rounded-xl shadow bg-gray-100" disabled>
          <option>+94</option>
        </select>
        <input
          className="flex-grow p-4 rounded-xl shadow"
          type="tel"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
        />
      </div>

      <input
        className="w-full p-4 mb-4 rounded-xl shadow"
        type="email"
        placeholder="E-Mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="date"
          className="p-4 rounded-xl shadow w-full"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          required
        />
        <input
          type="date"
          className="p-4 rounded-xl shadow w-full"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
          required
        />
      </div>

      {/* Vehicle Selection Grid */}
      <div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {vehicles.map((vehicle, index) => (
      <div
        key={index}
        onClick={() => setForm({ ...form, vehicle: vehicle.name })}
        className={`flex flex-col items-center justify-center h-36 rounded-lg p-2 shadow cursor-pointer transition-all duration-200 ${
          form.vehicle === vehicle.name
            ? "bg-gray-100 border-2 border-black"
            : "bg-white border border-gray-200"
        }`}
      >
        <div className="w-full h-16 flex items-center justify-center">
          <img
            src={vehicle.img}
            alt={vehicle.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <span className="mt-2 text-center text-sm font-medium">
          {vehicle.name}
        </span>
      </div>
    ))}
  </div>
</div>


      <div className="text-center">
        <button
          type="submit"
          className="bg-black text-white text-lg px-8 py-3 rounded-full shadow hover:bg-gray-800 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
