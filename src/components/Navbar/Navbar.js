import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`} href="#s">
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item} href="#s">
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <a href="/dialogs"> Messeges</a>
      </div>
      <div className={s.item} href="#s">
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <a href="/news"> News</a>
      </div>
      <div className={s.item} href="#s">
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <a href="/music">Music</a>
      </div>
      <div className={s.item} href="#s">
        <img
          className={s.icon}
          src="https://img.icons8.com/windows/512/home.png"
        />
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
