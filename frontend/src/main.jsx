import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Router from "./Router";
import FeContextProvider from "./context/feContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeContextProvider>
      <Router />
    </FeContextProvider>
  </React.StrictMode>
);
