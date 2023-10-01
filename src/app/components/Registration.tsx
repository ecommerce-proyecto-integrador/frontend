'use client';
import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="text-gray-600 block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-gray-600 block mb-2">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-600 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-600 block mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300 ease-in-out"
        >
          Registar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
