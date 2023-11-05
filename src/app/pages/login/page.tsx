"use client"
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  
  const [userData, setUserData] = useState<{ name: string, email: string } | null>(null);

  const loginMutation = gql`
    mutation LoginUser($loginInput: LoginUserInput!) {
      loginUsersTest(loginInput: $loginInput) {
        success
        user {
          name
          email
        }
      }
    }
  `;

  const [loginUser] = useMutation(loginMutation);

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
  
      const { success, user } = data.loginUsersTest;
  
      if (success) {
        console.log('Inicio de sesión exitoso');
        setIsLoggedIn(true);
        setUserData(user);
  
        // envia un true y los datos del user al landing
        router.push({
          pathname: '/pages/landing',
          query: {
            success: true,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        setLoginError('Correo o contraseña inválidos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          {userData ? (
            <div>
              <h2>¡Bienvenido, {userData.name}!</h2>
              <p>Correo: {userData.email}</p>
              <Link href="/pages/landing">
                <a>Volver a la homePage</a>
              </Link>
            </div>
          ) : null}
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
