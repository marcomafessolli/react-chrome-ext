import React from "react";
import ReactDOM from "react-dom/client";

import './main.css';
import Popup from "./Popup";

if (!chrome?.runtime) {
  window.chrome = {
    // @ts-ignore
    runtime: {
      getURL: (url: string) => url,
    },
  };
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
