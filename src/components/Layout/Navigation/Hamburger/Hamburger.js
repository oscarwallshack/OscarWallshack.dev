import classes from "./Hamburger.module.css";
import HamburgerSVG from "./HamburgerSVG";

const Hamburger = () => {
  return (
    <button className={classes.hamburger} id="hamburger">
      <HamburgerSVG />
    </button>
  );
};
export default Hamburger;
