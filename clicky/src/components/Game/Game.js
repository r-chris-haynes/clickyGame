import React, { Component } from "react";
import "./Game.css";
import friends from "../../friends.json";
import Navbar from "../Navbar";
import Cards from "../Cards";
import Wrapper from "../Wrapper";
import GameOver from "../GameOver";

class Game extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    selectedIds: [],
    alert: ""
  };

  shuffleCards = () => {
    const friends = this.state.friends.sort( 
      () => Math.floor(Math.random() - 1));
      this.setState({
        friends:friends
      })
  }

  selectCard = id => {
    console.log(id);
   
    if (!this.state.selectedIds.includes(id)) {
      this.state.selectedIds.push(id);
      this.setState({ 
        score: this.state.score + 1,
       
      });
    }  
    else {
     console.log("game over")
      this.setState({
        topScore: this.state.score,
        score: 0,
        selectedIds: [],
        alert: this.state.alert + "Game Over!"
      });
    }
   this.shuffleCards() 
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>
          <GameOver alert ={this.state.alert} />
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
