import { createContext, useContext, ReactNode, useState, useEffect } from 'react';


interface AuthContextType {
  user: string | null;
  login: (token: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

// hook 
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
}

// authProvider 
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  //  iniciar sesión
  const login = (token: string) => {
    setUser(token);
    localStorage.setItem('userToken', token);
  };

  // cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('userToken');
  };

  //  usuario está autenticado al cargar la página.
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
