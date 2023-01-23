import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

function Dialogs({ dialogesData, messagesData }) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogesData.map((dialog) => (
          <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  );
}

export default Dialogs;
