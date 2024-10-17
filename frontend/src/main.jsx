// index.jsx or main.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Use createRoot for concurrent features
import App from "./App.jsx"; // Link to App.jsx
import "./index.css"; // Optional: Link to any global styles

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
