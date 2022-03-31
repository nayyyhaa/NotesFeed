import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [showFilterBar, setShowFilterBar] = useState(false);

  return <SidebarContext.Provider value={{ showFilterBar, setShowFilterBar }}>{children}</SidebarContext.Provider>;
};

const useSidebar = () => useContext(SidebarContext);

export { useSidebar, SidebarProvider };
