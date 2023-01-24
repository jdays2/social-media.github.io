import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

function Dialogs({ state }) {
  let newMessageArea = React.createRef();

  let sendNewMessage = () => {
    alert(newMessageArea.current.value);
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
          <textarea ref={newMessageArea}></textarea>
          <button onClick={sendNewMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
