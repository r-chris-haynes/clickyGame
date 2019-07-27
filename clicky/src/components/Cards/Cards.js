import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="card" onClick={() => props.selectCard(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} className="card" />
      </div>
    </div>
  );
}

export default Cards;
