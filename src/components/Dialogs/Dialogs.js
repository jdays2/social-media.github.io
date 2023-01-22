import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

function Dialogs() {
  let dialogsData = [
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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsData.map((dialog) => {
          return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
          );
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((message) => {
          return <Message key={message.id} message={message.message} />;
        })}
      </div>
    </div>
  );
}

export default Dialogs;
