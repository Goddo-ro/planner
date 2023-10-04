import "./Header.scss";
import User from "../User/User.jsx";
import MonthSwitcher from "../MonthSwitcher/MonthSwitcher.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="logo">
          <span className="logo__img"></span>
          <span className="logo__company h3">red collar</span>
        </a>
        <h1 className="header__title h1">
          planner <span className="red">event</span>
        </h1>
      </div>
      <div className="header__right">
        <MonthSwitcher/>
        <User/>
      </div>
    </header>
  )
}

export default Header;
