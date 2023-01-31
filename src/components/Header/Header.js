import s from "./Header.module.css";
import loginImg from "./../../assets/images/login.svg";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png"
        className={s.logo}
      />
      <img src={loginImg} className={s.loginImg} />
    </header>
  );
}

export default Header;
