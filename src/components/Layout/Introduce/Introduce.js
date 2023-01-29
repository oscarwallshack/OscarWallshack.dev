import React from "react";
import classes from "./Introduce.module.scss";

const Introduce = () => {
  const codingSkills = [
    "React.js",
    "Redux",
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "Laravel 8",
    "Bootstrap 5",
    "Smarty",
    "CSS/SCSS",
  ];

  const seoSkills = [
    "Website analysis",
    "Page optimization",
    "Preparing reports",
    "Google Data Studio / Looker Studio",
  ];

  const cms = [
    "Prestashop",
    "Shoper",
    "WordPress",
    "Woocomerce",
    "ShopGold",
    "SkyShop",
  ];

  const codingList = codingSkills.map((skill) => <li>{skill}</li>);
  const seoList = seoSkills.map((skill) => <li>{skill}</li>);
  const cmsList = cms.map((cms) => <li>{cms}</li>);

  return (
    <section className={classes.introduce}>
      <div className={classes.introduce__aboutMe}>
        <h3>About Me</h3>
        <p></p>
      </div>
      <div className={classes.introduce__skills}>
        <h3>Coding Skills</h3>
        <ul>{codingList}</ul>
        <h3>SEO Skills</h3>
        <ul>{seoList}</ul>
        <h3>Known CMS's</h3>
        <ul>{cmsList}</ul>
      </div>
    </section>
  );
};

export default Introduce;
