import classes from "./Tech.module.scss";
const Tech = ({ tech }) => {
  return <li className={classes.tech}>{tech}</li>;
};

export default Tech;
