import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Messeges
        </NavLink>
      </div>
      <div className={s.item}>
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
