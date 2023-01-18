import Hamburger from "./Hamburger/Hamburger";
import NavLink from "./NavLinks";
import classes from "./TopNavigation.module.css";

const links = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "#projects",
    label: "Projects",
  },
  {
    id: 3,
    link: "#about-me",
    label: "About me",
  },
  {
    id: 4,
    link: "#contact",
    label: "Contact",
  },
];

// <ul class="nav_links_container" id="nav_links_container">
// <li><a href="/" class="nav_link">Home</a></li>
// <li><a href="#projects" class="nav_link">Projects</a></li>
// <li><a href="/about-me" class="nav_link">About</a></li>
// <li><a href="#contact" class="nav_link">Contact</a></li>
// </ul>

const TopNavigation = (props) => {
  return (
    <nav className={classes.nav}>
      <div>OscarWallshack</div>
      <ul>
        <NavLink links={links} />
      </ul>
      <Hamburger />
    </nav>
  );
};

export default TopNavigation;
