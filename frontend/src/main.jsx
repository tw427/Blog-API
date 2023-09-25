import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Navbar } from "../components/nav.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
