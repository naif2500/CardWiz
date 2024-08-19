// app/hooks/useAuth.ts
"use client"
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";

// app/hooks/useAuth.ts
export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user ? user : null);
        setLoading(false);
      });
  
      return () => unsubscribe();
    }, []);
  
    return { user, loading }; // Returning an object with both user and loading
}
  