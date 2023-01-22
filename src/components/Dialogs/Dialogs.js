import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name="Mark" id={1} />
        <DialogItem name="Vitalya" id={2} />
        <DialogItem name="Kirillko" id={3} />
        <DialogItem name="Sanya" id={4} />
        <DialogItem name="Geshka" id={5} />
        <DialogItem name="Lenin" id={6} />
      </div>
      <div className={s.messages}>
        <Message message="Hello world!" />
        <Message message="Hello world!" />
        <Message message="Hello world!" />
        <Message message="Hello world!" />
        <Message message="Hello world!" />
      </div>
    </div>
  );
}

export default Dialogs;
