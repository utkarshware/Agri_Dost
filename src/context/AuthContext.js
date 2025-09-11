import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedEmail = localStorage.getItem("email");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }
  }, []);

  const login = (userEmail) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", userEmail);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// ✅ FIXED EXPORTS
export { AuthProvider, useAuth };
