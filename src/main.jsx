import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import App from "./App";
import "./index.css";
import { Store } from "./redux/Store";
import {ToastContainer} from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Toaster/>
    </Provider>
  </BrowserRouter>
);