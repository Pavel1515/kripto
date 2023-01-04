import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Header>
          <App />
        </Header>
      </BrowserRouter>

  </React.StrictMode>
);
