import React, { useState, useEffect, createContext, useContext } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const AuthContext = createContext({
  currentUser: null,
  userLoggedIn: false,
  loading: true
});

export function AuthProvider({ children }) { 
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user){
        setUserLoggedIn(true);
        
        // Fetch userToken from Firebase users collection
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log({userData});
            setCurrentUser({...user, role: userData.role});
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};