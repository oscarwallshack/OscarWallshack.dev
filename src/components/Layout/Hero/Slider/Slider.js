import { useEffect, useState } from "react";
import imageDev1 from "../../../../assets/devjobler.webp";
import imageDev2 from "../../../../assets/devjobler-personpage.webp";
import imageAutoDet1 from "../../../../assets/Auto-detailing-website.webp";
import imageAutoDet2 from "../../../../assets/autodetailing.webp";
import classes from "./Slider.module.scss";

const Slider = () => {
  const [frontImageIndex, setFrontImageIndex] = useState(0);
  const [backImageIndex, setBackImageIndex] = useState(1);

  const slides = [
    {
      id: 1,
      url: imageDev1,
      title: "devjobler1",
    },
    {
      id: 2,
      url: imageDev2,
      title: "devjobler",
    },
    {
      id: 3,
      url: imageAutoDet2,
      title: "autodetailing",
    },
    {
      id: 4,
      url: imageAutoDet1,
      title: "autodetailing1",
    },
  ];

  const slider = () => {
    setTimeout(() => {
      setFrontImageIndex((frontImageIndex - 1 + slides.length) % slides.length);
      setBackImageIndex(frontImageIndex);
    }, 5000);
  };

  useEffect(() => {
    slider();
  }, [frontImageIndex]);

  const frontImage = (
    <img
      key={slides[backImageIndex].id}
      src={slides[backImageIndex].url}
      alt={slides[backImageIndex].title}
      className={classes.frontImage}
    />
  );
  const backImage = (
    <img
      key={slides[frontImageIndex].id}
      src={slides[frontImageIndex].url}
      alt={slides[frontImageIndex].title}
      className={classes.backImage}
    />
  );

  return (
    <div className={classes.slider}>
      <div>
        {frontImage}
        {backImage}
      </div>
    </div>
  );
};

export default Slider;
