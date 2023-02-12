import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

const MainNavigation = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <NavLink to="/about-me">About</NavLink>
        </li>
        <li onClick={menuToggle}>
          <a href="https://github.com/oscarwallshack">Github</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
