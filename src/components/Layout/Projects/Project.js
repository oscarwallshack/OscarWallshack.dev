import React from "react";
import classes from "./Project.module.scss";
import Tech from "./Tech";

const Project = ({
  key,
  projectName,
  projectDescription,
  projectTechs,
  projectLink,
}) => {
  const tech = projectTechs.map((tech) => <Tech tech={tech} />);
  return (
    <div id={key} className={classes.project}>
      <div className={classes.project__heading}>
        <h4>{projectName}</h4>
        <p>{projectDescription}</p>
      </div>
      <div className={classes.project__content}>
        <div><ul className={classes.project__content__techList}>{tech}</ul></div>
        <div>
          <a href={projectLink}>Check out</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
