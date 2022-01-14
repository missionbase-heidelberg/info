import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import BusinessCard from "./Components/BusinessCard";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <BusinessCard />
  </React.StrictMode>,
  document.getElementById("root")
);
