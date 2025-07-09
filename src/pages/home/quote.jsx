'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function QuoteForm() {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    contact: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_p1i4lp8',
        'template_bih4kae',
        {
          full_name: form.fullName,
          address: form.address,
          contact: form.contact,
          email: form.email,
          message: form.message,
        },
        'hpNR_PGhCpS7-55hI'
      )
      .then(() => {
        alert('Quote request sent!');
        setForm({ fullName: '', address: '', contact: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl mx-auto space-y-6 mt-10"
    >
      <h2 className="text-3xl font-bold text-center">Get a Quote</h2>

      <input
        type="text"
        placeholder="Full name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        required
      />

      <div className="flex gap-3">
        <select className="p-4 border border-gray-300 rounded-lg bg-gray-100 w-20" disabled>
          <option>+94</option>
        </select>
        <input
          type="tel"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <input
        type="email"
        placeholder="E-Mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        required
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        rows={4}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white w-full p-4 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        {loading ? 'Sending...' : 'Get A Quote'}
      </button>
    </motion.form>
  );
}
