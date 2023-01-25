import React from "react";
import classes from "./Project.module.scss";

const Project = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes.project__heading}>
        <h4>Project taki i taki</h4>
      </div>
      <div className={classes.project__content}>
        <div>
          <ul>
            <li>React</li>
            <li>JS</li>
            <li>REDUX</li>
            <li>React</li>
          </ul>
        </div>
        <a href="#"></a>
      </div>
    </div>
  );
};

export default Project;
