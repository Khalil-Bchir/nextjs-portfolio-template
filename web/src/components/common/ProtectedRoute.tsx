// components/ProtectedRoute.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth(); // Use the custom useAuth hook to get the authentication status
  const router = useRouter(); // Use the Next.js useRouter hook for navigation

  // useEffect hook to redirect the user to the login page if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to the login page if not authenticated
    }
  }, [isAuthenticated, router]); // Run this effect whenever isAuthenticated or router changes

  // If the user is not authenticated, do not render the children (return null)
  if (!isAuthenticated) {
    return null; 
  }

  // If the user is authenticated, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
