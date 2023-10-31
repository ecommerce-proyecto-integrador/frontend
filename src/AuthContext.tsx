import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

// Define el tipo de objeto que se compartirá en el contexto.
interface AuthContextType {
  user: string | null;
  login: (token: string) => void;
  logout: () => void;
}

// Crea el contexto de autenticación con un valor inicial vacío.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto de autenticación.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
}

// El componente AuthProvider que envuelve tu aplicación.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  // Función para iniciar sesión
  const login = (token: string) => {
    setUser(token);
    localStorage.setItem('userToken', token);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('userToken');
  };

  // Comprueba si el usuario está autenticado al cargar la página.
  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setUser(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
