import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  updateNewMessageActionCreator,
  sendNewMessageActionCreator,
} from "../../Redux/state";

function Dialogs({ state, dispatch }) {
  const updateMessageText = (e) => {
    let text = e.target.value;
    dispatch(updateNewMessageActionCreator(text));
    console.log(updateNewMessageActionCreator(text));
  };

  const sendNewMessage = () => {
    dispatch(sendNewMessageActionCreator());
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {state.dialogesData.map((dialog) => (
          <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.messages}>
        {state.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div>
          <textarea
            onChange={updateMessageText}
            value={state.newMessageText}
          ></textarea>

          <button onClick={sendNewMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
