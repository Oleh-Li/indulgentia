// import "./header.css";
import {  NavLink } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className={styles.headerNavigation}>
        <NavLink
          to="/"
          className={styles.headerLogo}
        >
          Indulgentia
        </NavLink>

        <ul className={styles.headerNavList}>
          <li className={styles.headerNavItem}>
            <NavLink
              to="/"
              className={styles.headerNavLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.headerNavItem}>
            <NavLink
              to="/about"
              className={styles.headerNavLink}
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
