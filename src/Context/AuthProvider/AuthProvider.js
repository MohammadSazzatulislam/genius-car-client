import React, { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };
    const logOUtUser = () => {
       localStorage.removeItem("genius-token");
        return signOut(auth);
    }

  const googleSignIn = (googleProvider) => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createNewUser,
    signInUser,
    setLoading,
    logOUtUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
