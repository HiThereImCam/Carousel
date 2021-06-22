import React from "react";
import CardLeft from "./card_left";
import CardRight from "./card_right";
import CardMid from "./card_mid";
import "../styles/_titlecard.scss";

function TitleCard({ info }) {
  if (info.ctaPosition === "left")
    return (
      <div className="titlecard-container--left">
        <CardLeft desc={info.cta} title={info.title} heading={info.heading} />
      </div>
    );
  if (info.ctaPosition === "right")
    return (
      <div className="titlecard-container--right">
        <CardRight desc={info.cta} title={info.title} heading={info.heading} />
      </div>
    );

  return (
    <div className="titlecard-container">
      <CardMid desc={info.cta} title={info.title} heading={info.heading} />
    </div>
  );
}

export default TitleCard;
