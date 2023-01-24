import App from "./App";
import store from "./Redux/state";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree = () => {
  root.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
};

rerenderEntireThree(store.getState());
store.subscribe(rerenderEntireThree);
