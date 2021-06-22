import React, { useState, useEffect } from "react";
import CarouselItems from "./CarouselItems";
import LeftArrow from "../assets/arrow-left.svg";
import RightArrow from "../assets/arrow-right.svg";
import "../styles/_carousel.scss";

/**
 *
 * @param {*} apiData
 * @returns
 *
 * Things to take care of:
 *
 * 1.) iterate through apiData and display correct values <CarouselItem />
 */

function Carousel({ data }) {
  const [currentImage, setCurrentImage] = useState(0);

  // const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);

  const length = data.length;

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  // const handleTouchStart = (e) => {
  //   console.log("this is e", e);
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   setTouchEnd(e.targetTouch[0].clientX);
  // };

  // const handleTouchEnd = () => {
  //   console.log("I was invoked");
  //   if (touchStart - touchEnd > 125) {
  //     nextImage();
  //   }

  //   if (touchStart - touchEnd < -125) {
  //     prevImage();
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === data.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage((currentImage) => currentImage + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, data]);

  // adItem = advertisement item
  return (
    <div className="carousel-container">
      <img
        src={LeftArrow}
        alt="left arrow"
        className="leftArrow"
        onClick={prevImage}
      />
      <CarouselItems item={data[currentImage]} key={currentImage} />
      <img
        src={RightArrow}
        alt="right arrow"
        className="rightArrow"
        onClick={nextImage}
      />
    </div>
  );
}

export default Carousel;
