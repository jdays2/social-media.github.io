import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <a className={classes.item} href="#s">
        Profile
      </a>
      <a className={classes.item} href="#s">
        Messeges
      </a>
      <a className={classes.item} href="#s">
        News
      </a>
      <a className={classes.item} href="#s">
        Music
      </a>
      <a className={classes.item} href="#s">
        Settings
      </a>
    </nav>
  );
}

export default Navbar;
