import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AnimatedRouter from "./components/Router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
