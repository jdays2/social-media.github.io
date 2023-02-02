import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";

function Dialogs({
  sendMessage,
  newMessageText,
  updateMessageText,
  messages,
  dialoges,
  isLogin,
}) {
  const onMessageChange = (e) => {
    const text = e.target.value;

    updateMessageText(text);
  };

  const onSendMessage = () => {
    sendMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialoges.map((dialog) => (
          <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div>
          <textarea
            onChange={onMessageChange}
            value={newMessageText}
          ></textarea>

          <button onClick={onSendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
