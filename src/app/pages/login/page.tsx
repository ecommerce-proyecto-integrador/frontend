"use client"
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

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
        setIsLoggedIn(true);
      } else {
        setLoginError('Correo o contraseña inválidos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Ocurrió un error al iniciar sesión.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>¡Bienvenido!</h2>
          {/* Coloca aquí el contenido que deseas mostrar después de la autenticación */}
        </div>
      ) : (
        <div>
          <h2>Iniciar sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
          {loginError && <p>{loginError}</p>}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
