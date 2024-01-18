import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar /> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);