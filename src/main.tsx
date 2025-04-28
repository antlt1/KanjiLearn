import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "~/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

// Create root for rendering
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// Render the App component inside the root element
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);