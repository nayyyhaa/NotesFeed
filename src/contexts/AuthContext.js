import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) return { token, isAuth: true };
    return { token: "", isAuth: false };
  });
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) ?? "");

  return <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
