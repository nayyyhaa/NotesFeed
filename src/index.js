import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { NoteProvider } from "contexts/NoteContext";
import { ModalProvider } from "contexts/ModelContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </NoteProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
