"use client"
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const loginMutation = gql`
    mutation LoginUser($loginInput: LoginUserInput!) {
      loginUsersTest(loginInput: $loginInput)
    }
  `;
 

  const [loginUser] = useMutation(loginMutation);

    const handleLogin = async () => {
      try {
        const { data } = await loginUser({
          variables: {
            loginInput: {
              clave: password,
              correo: email,
            },
          },
        });
        const token = data.loginUsersTest;
        if (token) {
          console.log('Inicio de sesión exitoso');
          await AsyncStorage.setItem('userToken', token);
          
          
    
          
        } else {
          setLoginError('Correo o contraseña inválidos.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setLoginError('Error al iniciar sesión. Inténtalo de nuevo.');
      }
    };

    return (
      <div className="text-center">
        {isLoggedIn ? (
          <div>
            <h2>¡Bienvenido!</h2>
          </div>
        ) : (
          <div>
            <h2>Login to MonoStore</h2>
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
              onClick={handleLogin}
            >
              Log In
            </button>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        )}
      </div>
    );
  }
  
  export default LoginForm;