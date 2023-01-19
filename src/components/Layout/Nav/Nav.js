import classes from "./Nav.module.scss";

const Nav = ({ isMenu }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
      <li>
        <a href="/about-me">About</a>
      </li>
        <li>
          <a href="https://github.com/oscarwallshack">Github</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
