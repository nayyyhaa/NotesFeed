import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: {}, isDark: false });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
