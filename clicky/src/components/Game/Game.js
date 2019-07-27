import React, { Component } from "react";
import "./Game.css";
import friends from "../../friends.json";
import Navbar from "../Navbar"
import Cards from "../Cards";
import Wrapper from "../Wrapper";

class Game extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    selectedIds: []
  };

  selectCard = id => {
    console.log(id)
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Wrapper>
        
         {this.state.friends.map(friend => (
          <Cards
            selectCard={this.selectCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
        />
        </Wrapper>
      </div>
    );
  }
}

export default Game;
