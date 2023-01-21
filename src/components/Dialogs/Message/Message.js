import s from "./Message.module.css";

function Message({ message }) {
  return <div className={s.dialog}>{message}</div>;
}

export default Message;
