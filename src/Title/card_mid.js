import React from "react";

function CardMid({ desc, title, heading }) {
  return (
    <div className="title-mid">
      <h3>{title}</h3>
      <h4>{heading}</h4>
    </div>
  );
}

export default CardMid;
