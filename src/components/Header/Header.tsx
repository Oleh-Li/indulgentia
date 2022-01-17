import "./header.css";
import {  NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="header_navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__logo active-link" : "header__logo"
          }
        >
          Indulgentia
        </NavLink>

        <ul className="header_nav-list">
          <li className="header_nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header_nav-link active-link" : "header_nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="header_nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header_nav-link active-link" : "header_nav-link"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
