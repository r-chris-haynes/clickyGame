import React, { Component } from "react";
import "./Game.css";
import friends from "../../friends.json";
import Navbar from "../Navbar";
import Cards from "../Cards";
import Wrapper from "../Wrapper";
import Footer from "../Footer";

class Game extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    selectedIds: [],
    alert: ""
  };

  shuffleCards = () => {
    const friends = this.state.friends.sort(() =>
      Math.floor(Math.random() * 1 - 1)
    );
    this.setState({ friends: friends });
  };

  selectCard = id => {
    if (!this.state.selectedIds.includes(id)) {
      this.state.selectedIds.push(id);
      this.setState({
        score: this.state.score + 1,
        alert: this.state.alert + "Correct!"
      });
    } else {
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score });
      }
      this.setState({
        score: 0,
        selectedIds: [],
        alert: this.state.alert + "Game Over!"
      });
    }

    setTimeout(() => {
      this.shuffleCards();
      this.setState({ alert: "" });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          alert={this.state.alert}
        />
        <div className="container">
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
          </ Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Game;
