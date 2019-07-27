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

    // const alreadyPicked = this.state.selectedIds.find(oldId => oldId === id)

    var alreadyPicked = null
    for(var i = 0; i < this.state.selectedIds.length; i++ ) {
      if(id === this.state.selectedIds[i]) {
        alreadyPicked = id
      }
    }

    if (alreadyPicked !== null) {
      console.log("Game over!")
    }

    const newSelectedIds = [...this.state.selectedIds, id]

    this.setState({
      selectedIds: newSelectedIds
    })




  

    console.log(newSelectedIds)
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
