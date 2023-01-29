import React from "react";
import classes from "./ProjectItem.module.scss";
import Tech from "./Tech";

const ProjectItem = ({
  id,
  projectName,
  projectDescription,
  projectTechs,
  projectLink,
}) => {
  const tech = projectTechs.map((tech, index) => (
    <Tech key={index} tech={tech} />
  ));

  return (
    <div className={classes.project}>
      <div className={classes.project__heading}>
        <h4>{projectName}</h4>
        <p>{projectDescription}</p>
      </div>
      <div className={classes.project__content}>
        <div>
          <ul className={classes.project__content__techList}>{tech}</ul>
        </div>
        <div>
          <a href={projectLink}>Check out</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
