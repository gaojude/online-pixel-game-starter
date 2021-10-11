import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { configure } from "mobx";

configure({ isolateGlobalState: true });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
