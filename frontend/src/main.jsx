import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContetxtProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContetxtProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContetxtProvider>
    </BrowserRouter>
  </React.StrictMode>
);
