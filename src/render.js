import App from "./App";
import { addPost } from "./Redux/state";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  );
};

export default rerenderEntireThree;
