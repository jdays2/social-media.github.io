import React from "react";
import {
  updateNewMessageActionCreator,
  sendNewMessageActionCreator,
} from "../../Redux/messagePageReducer";
import Dialogs from "./Dialogs";

function DialogsComponent({ store, dispatch }) {
  const updateMessageText = (text) => {
    dispatch(updateNewMessageActionCreator(text));
  };

  const sendMessage = () => {
    dispatch(sendNewMessageActionCreator());
  };

  console.log(store);
  return (
    <Dialogs
      dialoges={store.messagePage.dialogesData}
      messages={store.messagePage.messagesData}
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}
      newMessageText={store.messagePage.newMessageText}
    />
  );
}

export default DialogsComponent;
