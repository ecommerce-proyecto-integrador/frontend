'use client';
import React, { useState } from "react";
import Link from "next/link";

interface ProfileUser {
  name: string;
  correo: string;
  password: string;
}

const ProfileUser: React.FC<ProfileUser> = ({ name, correo, password }) => {
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  

  const handleChangePassword = () => {
  
  };

  const handleChangeEmail = () => {
   
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {name}</p>
      <p>Correo: {correo}</p>

      <button onClick={handleChangePassword}>Cambiar Contraseña</button>
      <input
        type="password"
        placeholder="Nueva Contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={handleChangeEmail}>Cambiar Correo</button>
      <input
        type="email"
        placeholder="Nuevo Correo"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
};

export default ProfileUser;
