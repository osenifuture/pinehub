import { createContext, useCallback, useState, useEffect } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  Login: () => {},
  Logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = useCallback(() => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true')
  }, []);

  const Logout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false')
  }, []);

  useEffect(() => {
    const storeLoginStatus = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(storeLoginStatus === 'true')
  }, [])

 

  const value = { isLoggedIn, Login, Logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; 
};


