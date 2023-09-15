import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CmsContextProvider from "./context/cmsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CmsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CmsContextProvider>
);
