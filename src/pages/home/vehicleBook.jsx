'use client';

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

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
      setForm({
        fullName: "",
        address: "",
        contact: "",
        email: "",
        startDate: "2025-05-14",
        endDate: "2025-05-27",
        vehicle: "",
      });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send booking. Please try again.");
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-4"
    >
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

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Vehicle Type</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              onClick={() => setForm({ ...form, vehicle: vehicle.name })}
              className={`flex flex-col items-center justify-center h-36 rounded-lg p-2 shadow cursor-pointer transition-all duration-200 ${
                form.vehicle === vehicle.name
                  ? "bg-gray-100 border-2 border-black"
                  : "bg-white border border-gray-200"
              }`}
              whileHover={{ scale: 1.02 }}
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
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`text-white text-lg px-8 py-3 rounded-full shadow transition duration-200 ${
            isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-black hover:bg-gray-800"
          }`}
          whileHover={!isLoading ? { scale: 1.05 } : {}}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Book Now"
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}
