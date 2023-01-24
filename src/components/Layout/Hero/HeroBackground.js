import React, { useState, useEffect } from "react";

import classes from "./HeroBackground.module.scss";

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ratio = 0.05;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={classes.bg}>
      <div
        className={classes.z__3}
        style={{
          transform: `translate(${mousePosition.x * ratio}px, ${
            mousePosition.y * ratio
          }px)`,
        }}
      >
        <div
          className={`${classes.tile} ${classes.top__left} ${classes.animate__opacity} ${classes.freq__5}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.top__right} ${classes.animate__opacity} ${classes.freq__9}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.bottom__left} ${classes.animate__opacity} ${classes.freq__7}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.bottom__right} ${classes.animate__opacity} ${classes.freq__10}`}
        ></div>
      </div>
      <div
        className={classes.z__2}
        style={{
          transform: `translate(${(mousePosition.x * ratio) / 2}px, ${
            (mousePosition.y * ratio) / 2
          }px) rotate(217deg)`,
        }}
      >
        <div
          className={`${classes.tile} ${classes.top__left} ${classes.animate__opacity} ${classes.freq__9} ${classes.delay__2}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.top__right} ${classes.animate__opacity} ${classes.freq__5} ${classes.delay__2}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.bottom__left} ${classes.animate__opacity} ${classes.freq__6} ${classes.delay__4}`}
        ></div>
        <div
          className={`${classes.tile} ${classes.bottom__right} ${classes.animate__opacity} ${classes.freq__10} ${classes.delay__4}`}
        ></div>
      </div>
      <div
        className={classes.z__1}
        style={{
          transform: `translate(${(mousePosition.x * ratio) / 3}px, ${
            (mousePosition.y * ratio) / 3
          }px) rotate(71deg)`,
        }}
      >
        <div
          className={`${classes.tile} ${classes.top__left} ${classes.animate__opacity} ${classes.freq__7} ${classes.delay__2}}></div> <div className={${classes.tile} ${classes.top__right} ${classes.animate__opacity} ${classes.freq__5} ${classes.delay__4}}></div> <div className={${classes.tile} ${classes.bottom__left} ${classes.animate__opacity} ${classes.freq__9} ${classes.delay__2}}></div> <div className={${classes.tile} ${classes.bottom__right} ${classes.animate__opacity} ${classes.freq__5} ${classes.delay}`}
        ></div>
      </div>
    </div>
  );
};
export default HeroBackground;
