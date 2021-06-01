import React, { useEffect, useState, createContext, useContext } from 'react';
import { firebase } from '../firebase/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }} >
      { children }
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider as default };