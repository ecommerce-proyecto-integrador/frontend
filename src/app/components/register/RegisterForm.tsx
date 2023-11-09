'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [firstName,setFirstName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMutation = gql`
    mutation createUsers($userInput: CreateUserInput!) {
      createUsers(userInput: $userInput)
    }
  `;
    
  const [createUser] = useMutation(userMutation);

  const handleRegister = async () => {
    try {
      const { data } = await createUser({
        variables: {
          userInput: {
            name:  firstName,
            clave: password,
            correo: email,
            rol: "client",
          },
        },
        onCompleted: (data) => {
          if(data.createUsers == true){
            router.push("/pages/login");
          }
        },
      });
     
    } catch (error) {
      console.error('Error al registrarse', error);
      
    }
  };
 

  return (
    <div className="text-center">
    
          <h2>Sign up for MonoStore</h2>
          
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="firstname"
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleRegister}
          >
            Register
          </button>
          
        </div>
      )};
   



export default RegisterForm;
