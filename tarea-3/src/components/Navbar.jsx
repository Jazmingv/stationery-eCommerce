import "../App.css";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <a className="logo" href="/">
          <img src={logo} className="logo-spin" alt="" />
          React JS
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          Contact
        </a>
        <p className="menu cta">
          Menu
        </p>
      </header>
      <div className="overlay">
        <a className="close">&times;</a>
        <div className="overlay__content">
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;