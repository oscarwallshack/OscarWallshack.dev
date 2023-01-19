import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
      <li onClick={menuToggle}>
        <a href="/about-me">About</a>
      </li>
        <li onClick={menuToggle}>
          <a href="https://github.com/oscarwallshack">Github</a>
        </li>
        <li onClick={menuToggle}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
