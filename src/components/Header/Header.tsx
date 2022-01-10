import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="header_navigation">
      <Link to="/" className="header__logo">
        Indulgentia
      </Link>

      <ul className="header_nav-list">
        <li className="header_nav-item">
          <Link to="/" className="header_nav-link">
            Home
          </Link>
        </li>
        <li className="header_nav-item">
          <Link to="/about" className="header_nav-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
