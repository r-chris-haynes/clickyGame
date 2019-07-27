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
    topScore: 0
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Wrapper>
        <Cards />
        </Wrapper>
      </div>
    );
  }
}

export default Game;
