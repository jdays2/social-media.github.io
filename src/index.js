import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let postsData = [
  { id: 1, message: "Hi! Thats my 1st post", likeCount: 12 },
  { id: 2, message: "Hi! Thats my 2st post", likeCount: 1 },
  { id: 3, message: "Hi! Thats my 3st post", likeCount: 2 },
  { id: 4, message: "Hi! Thats my 4st post", likeCount: 112 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App postsData={postsData} />);
