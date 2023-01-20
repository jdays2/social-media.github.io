import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <a className={s.item} href="#s">
        Profile
      </a>
      <a className={s.item} href="#s">
        Messeges
      </a>
      <a className={s.item} href="#s">
        News
      </a>
      <a className={s.item} href="#s">
        Music
      </a>
      <a className={s.item} href="#s">
        Settings
      </a>
    </nav>
  );
}

export default Navbar;
