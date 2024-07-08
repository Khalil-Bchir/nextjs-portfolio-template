import { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of the AuthContext
interface AuthContextProps {
  isAuthenticated: boolean | null;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

// Create the AuthContext with a default value of undefined
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// AuthProvider component to provide the AuthContext to its children
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // State to track the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // useEffect hook to check for a token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set isAuthenticated to true if a token exists, otherwise false
  }, []);

  // Function to update the authentication status
  const setAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
  };

  // If the authentication status is still being determined, show a loading indicator
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Provide the AuthContext to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Throw an error if the hook is used outside of an AuthProvider
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
