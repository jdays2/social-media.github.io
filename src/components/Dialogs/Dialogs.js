import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/1"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Mark
          </NavLink>
        </div>
        <div className={s.dialog + " " + s.active}>
          <NavLink
            to="/dialogs/2"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Vitalya
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/3"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Kirill
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/4"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Developer
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello?..</div>
        <div className={s.message}>How ur studing?</div>
        <div className={s.message}>im ok.</div>
      </div>
    </div>
  );
}

export default Dialogs;
