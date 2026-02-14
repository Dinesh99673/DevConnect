import { useContext, createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  isLoggedIn: false,
  loading: true
});

export function useAuth() {
  return useContext(AuthContext);
}