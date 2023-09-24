import "./Header.scss";
import User from "../User/User.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="logo">
          <span className="logo__img"></span>
          <span className="logo__company">red collar</span>
        </a>
        <h1 className="header__title">
          planner <span className="red">event</span>
        </h1>
      </div>
      <User/>
    </header>
  )
}

export default Header;
