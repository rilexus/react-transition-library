import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { basename, production } from "../env";
//
ReactDOM.render(
  <BrowserRouter basename={production ? basename : ""}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
