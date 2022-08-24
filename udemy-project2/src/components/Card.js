import React from "react";
import "../style/Card.css";

const Card = ({cource}) => {
  return (
    <div className="Card">
      <img src={cource.src} />
      <h4>{cource.title}</h4>
      <p>{cource.author}</p>
      <h5>{cource.price}</h5>
    </div>
  );
};

export default Card;
