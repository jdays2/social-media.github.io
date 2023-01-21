import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

function DialogItem({ name, id }) {
  return (
    <div className={s.dialog}>
      <NavLink
        to={"/dialogs/" + id}
        className={({ isActive }) => (isActive ? s.active : undefined)}
      >
        {name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
