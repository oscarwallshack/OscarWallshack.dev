import React from "react";
import classes from "./Introduce.module.scss";

const Introduce = () => {
  const codingSkills = [
    "React.js",
    "Redux",
    "JavaScript",
    "Bootstrap 5",
    "Laravel 8",
    "PHP",
    "HTML",
    "CSS/SCSS",
  ];

  const seoSkills = [
    "Website analysis",
    "Page optimization",
    "Preparing reports",
    "Google Search Console",
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Data Studio / Looker Studio",
    "Ahrefs",
    "Semstorm",
  ];

  const cms = [
    "WordPress",
    "Woocomerce",
    "Prestashop",
    "Shoper",
    "ShopGold",
    "SkyShop",
  ];

  const codingList = codingSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));
  const seoList = seoSkills.map((skill, index) => <li key={index}>{skill}</li>);
  const cmsList = cms.map((cms, index) => <li key={index}>{cms}</li>);

  return (
    <section className={classes.introduce}>
      <div className={classes.introduce__aboutMe}>
        <h3>About Me</h3>
        <div className={classes.prof}></div>
        <p>
        Currently, I work as an SEO Specialist, I help clients achieve better and better search results for their websites.
        
        I associate my future with programming. For the beginning of his career in this
        I chose the path of Frontend Developer. I want to create nice, useful and
        optimized systems and applications.
        </p>
      </div>
      <div className={classes.introduce__skills}>
        <span>
          <h3>Coding Skills</h3>
          <ul>{codingList}</ul>
        </span>
        <span>
          <h3>SEO Skills</h3>
          <ul>{seoList}</ul>
        </span>
        <span>
          <h3>Known CMS's</h3>
          <ul>{cmsList}</ul>
        </span>
      </div>
    </section>
  );
};

export default Introduce;
