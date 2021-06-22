import React, { Fragment } from "react";
import TitleCard from "../Title/titlecard";
import "../styles/_carousel-items.scss";

/**
 *
 * @param {*} item
 *
 * item is going to be the individual items in the data array
 *
 */

function CarouselItems({ item }) {
  // needs title component that displays the header and in the correct spot
  return (
    <Fragment>
      {window.innerWidth > 990 ? (
        <div className="carousel-item">
          <img rel="preload" src={item.media.desktop} alt="advertisement" />
          <TitleCard
            position={item.ctaPosition}
            desc={item.cta}
            title={item.title}
            info={item}
          />
        </div>
      ) : (
        <div className="carousel-item-mobile">
          {console.log("here in carousel mobile")}
          <img rel="preload" src={item.media.mobile} alt="advertisement" />
        </div>
      )}
    </Fragment>
  );
}

export default CarouselItems;
