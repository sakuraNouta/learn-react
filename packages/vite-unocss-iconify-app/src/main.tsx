import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "virtual:uno.css";
import { AttributifyAttributes } from "unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
