import App from "./App";
import store from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>
  </BrowserRouter>
);
