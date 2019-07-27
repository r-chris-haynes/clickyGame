import React from "react";
import "./Cards.css";

// import "./style.css"

// function Cards(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
    
//       <span onClick={() => props.shuffleCards(props.id)} className="shuffle">
//         𝘅
//       </span>
//     </div>
//   );
// }

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} className="cardImg" />
      </div>
      <span onClick={() => props.selectCard(props.id)} className="select">
        𝘅
      </span>
    </div>
  );
}

export default Cards;