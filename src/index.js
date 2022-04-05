import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { NoteProvider } from "contexts/NoteContext";
import { ModalProvider } from "contexts/ModelContext";
import { UserProvider } from "contexts/UserContext";
import { ToastProvider } from "contexts/ToastContext";
import { SidebarProvider } from "contexts/SidebarContext";
import { FilterProvider } from "contexts/FilterContext";
import { AuthProvider } from "contexts/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastProvider>
          <FilterProvider>
            <UserProvider>
              <NoteProvider>
                <ModalProvider>
                  <SidebarProvider>
                    <App />
                  </SidebarProvider>
                </ModalProvider>
              </NoteProvider>
            </UserProvider>
          </FilterProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
