import React from "react";
import classes from "./CounterBar.module.scss";

const CounterBar = () => {
  return (
    <section className={classes.counter}>
      <div>
        <h3>Months of study</h3>
        <p>3</p>
      </div>
      <div>
        <h3>Weeks of study</h3>
        <p>21</p>
      </div>
      <div>
        <h3>Days of study</h3>
        <p>147</p>
      </div>
    </section>
  );
};

export default CounterBar;
