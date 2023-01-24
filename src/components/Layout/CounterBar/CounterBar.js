import React from "react";
import classes from "./CounterBar.module.scss";

const dateDiff = (date1, date2) => {
  const diff = Math.abs(date2 - date1);
  const monthInMs = 1000 * 60 * 60 * 24 * 30.4375;
  const months = Math.floor(diff / monthInMs);
  const weeks = Math.floor((diff % monthInMs) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diff % monthInMs) / (1000 * 60 * 60 * 24));

  return { months, weeks, days };
};

const CounterBar = () => {
  const startingDay = new Date("2022-11-06");
  const currentDay = new Date();
  const {
    months: monthsOfLearning,
    weeks: weeksOfLearning,
    days: dayOfLearning,
  } = dateDiff(startingDay, currentDay);

  return (
    <section className={classes.counter}>
      <h3 className={classes.counter__title}>{`Time of daily learning </>`}</h3>
      <div className={classes.counter__digits}>
        <div>
          <p>{monthsOfLearning}</p>
          <h3>Months</h3>
        </div>
        <div>
          <p>{weeksOfLearning}</p>
          <h3>Weeks</h3>
        </div>
        <div>
          <p>{dayOfLearning}</p>
          <h3>Days</h3>
        </div>
      </div>
    </section>
  );
};

export default CounterBar;
