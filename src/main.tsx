import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { items } from "./data.ts";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>
);
