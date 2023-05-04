import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlePopUp = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const gitPopUp = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUSer) => {
      console.log(loggedUSer);
      setUser(loggedUSer);
      setLoading(false)
      //   setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    signIn,
    createUser,
    googlePopUp,
    gitPopUp,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
