// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig'; // Adjust the path as necessary
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          loggedAs: '', // You can set this based on your specific logic or previous login option
          mail: user.email,
          name: user.displayName,
          others: { additionalInfo: "Some info", photoURL: user.photoURL }
        };
        setAuthData(userData);
      } else {
        setAuthData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
