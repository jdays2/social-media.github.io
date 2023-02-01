import s from "./Header.module.css";
import loginImg from "./../../assets/images/login.svg";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png"
        className={s.logo}
      />
      {props.data.isLogin === false ? (
        <NavLink to="/login">
          <img src={loginImg} className={s.loginImg} />
        </NavLink>
      ) : (
        <div className={s.userName}>{props.data.login}</div>
      )}
    </header>
  );
}

export default Header;
