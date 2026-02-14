import React, { useState, useEffect} from "react";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AuthContext } from "@/hooks/useAuth";


export function AuthProvider({ children }) { 
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user){
        setIsLoggedIn(true);
        
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
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    isLoggedIn,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
