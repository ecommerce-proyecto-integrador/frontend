'use client';
import React, { useState } from 'react';
import KeyboardImg from "../../../../public/Placeholder.jpg";
import RegistrationForm from '../../components/Registration';
import Login from '../../components/Login';
import Link from 'next/link';
import Products from '../../components/Products';
import Features from '../../components/Features';

const Landing: React.FC = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen]=useState(false);

    const toggleRegistrationForm = () => {
      setIsRegistrationOpen(!isRegistrationOpen);
    };

    return (
      <div>
      <section
        className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${KeyboardImg.src}')` }}
      >
        <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
            <div className="w-full md:w-1/2 md:mr-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-500">
                Placeholder
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Se vender Placeholders
              </p>
              <div className="flex flex-col md:flex-row">
                <Link href="../pages/products"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
                >
                  Explorar productos
                </Link>
                <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
                style={{ marginRight: '10px' }} // stylos
              >
                Iniciar sesión
              </button>
              <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
              style={{ marginLeft: '10px' }} //styloslabs
                      >
                Registrarse
              </button>
              </div>
            </div>
          </div>
        </div>
        {isLoginOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Login />
              <button
                onClick={() => setIsLoginOpen(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
          
        )}
        
        {isRegistrationOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <RegistrationForm />
              <button
                onClick={() => setIsRegistrationOpen(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
          
        )}
      </section>
      <Products />
      <Features />
      </div>
    );
    

    }

export default Landing;