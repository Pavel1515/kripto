import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header>
          <App />
        </Header>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
