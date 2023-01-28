import classes from "./Tech.module.scss";
const Tech = ({ tech }) => {
  return (
    <ul className={classes.tech}>
      <li>{tech}</li>
    </ul>
  );
};

export default Tech;
