import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import '../styles/Game.css';
import Navbar from './Navbar';
import Squares from "./Squares";
import friends from "../friends.json";

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      friends,
      score: 0,
      message: "Good luck!"
    };
  }


  handleClick = (id) => {

    let guessedCorrectly = false;
    const squaresMap = this.state.friends.map(friend => {

      const newFriendData = { ...friend };

      if (newFriendData.id === id) {
        if (!newFriendData.click) {
          newFriendData.click = true;
          guessedCorrectly = true;
        } 
      }
      return newFriendData;
    });
    
    this.setState({
      friends: squaresMap
    });

  }

  render() {
    return (
      <main className="game-squares">
        <Row>
          {this.state.friends.map(friend => (
            <Squares 
              image={ friend.image }
              alt={ friend.name }
              key={ friend.id }
              id={ friend.id }
              click={ friend.click }
              handleClick={ this.handleClick }
            />
          ))}
        </Row>
      </main>
    )
  }
}

export default Game;