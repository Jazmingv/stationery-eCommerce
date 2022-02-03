import "../App.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <header>
        <a className="logo" href="/">
          React JS
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
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