import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/firebase.config';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);



const signIn = (email,password)=>{
    
    return signInWithEmailAndPassword(auth,email,password)

  };
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const googlePopUp =(provider)=>{
    return signInWithPopup (auth,provider)

  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUSer =>{
      console.log(loggedUSer);
      setUser(loggedUSer);
    //   setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  
    



   const AuthInfo = {
    user,
    signIn,
    createUser,
    googlePopUp
   } 
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;