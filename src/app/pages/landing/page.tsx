'use client';
import React from 'react';
import KeyboardImg from "../../../../public/Placeholder.jpg";
import RegistrationForm from '../../components/Registration';
import Link from 'next/link';
import Products from '../../components/Products';
import Features from '../../components/Features';

const Landing: React.FC = () => {

    const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

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
                  //falta meter la logica del login y como se abre el pop up
                  //falta meter la logica de como se va a salir de el pop up
                  className="border border-gray-400 hover:border-gray-500 text-gray-300 py-3 px-6 rounded-md mr-0 md:mr-4 mb-4 md:mb-0 font-bold text-lg transition duration-300 ease-in-out"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsRegistrationOpen(true)} // Open registration form
                  //falta meter la logica de como se va a salir de el pop up
                  className="border border-gray-400 hover:border-gray-500 text-gray-300 py-3 px-6 rounded-md font-bold text-lg transition duration-300 ease-in-out"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        {isRegistrationOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-80 flex justify-center items-center">
            <div className="registration-form-container">
              <RegistrationForm />
              <button onClick={() => setIsRegistrationOpen(false)}>Close</button>
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