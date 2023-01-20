import classes from "./Button.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
