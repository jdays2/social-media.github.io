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

let dialogesData = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Vitalya" },
  { id: 3, name: "Kirillko" },
  { id: 4, name: "Sanya" },
  { id: 5, name: "Geshka" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Yo" },
  { id: 4, message: "How is ur homework?" },
  { id: 5, message: "I dont rly know..." },
  { id: 6, message: "lol" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    postsData={postsData}
    dialogesData={dialogesData}
    messagesData={messagesData}
  />
);
