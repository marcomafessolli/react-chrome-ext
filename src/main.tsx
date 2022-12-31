import React from "react";
import ReactDOM from "react-dom/client";

import './main.css';
import Popup from "./Popup";

// Check if the chrome object or its runtime property is not defined.
if (!chrome || !chrome.runtime) {
  // If either the chrome object or the runtime property is not defined,
  // add a runtime property to the chrome object with a getURL method
  // that returns the input string.
  window.chrome = window.chrome || {};
  // @ts-ignore
  window.chrome.runtime = {
    getURL: (url: string) => url,
  };
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
