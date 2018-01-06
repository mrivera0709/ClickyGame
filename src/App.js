import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
import Navbar from './components/Navbar';
import Squares from "./components/Squares";
import friends from "./friends.json";
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends,
      score: 0,
      message: "Ok, lets get started!"
    };

    this.baseState = this.state;
  }
  
//Reset the game
// score=0
  resetGame = () => {
    this.setState(this.baseState.friends);
  }

//If correct, increase score, display message, and reshuffle squares, or declare win. 
  correctGuess = () => {
    let scoreValue = this.state.score;
    ++scoreValue;

    if (scoreValue === 12) {
      this.setState({
        score: scoreValue,
        message: "For the WIN!!"
      });
    } else {
      this.setState({
        score: scoreValue,
        message: "Nice, you're clutch!!!"
      });
    }
  }

// If wrong, end the game by resetting the score and displaying message
  wrongGuess = () => {
    let endScore = this.state.score;
    
    this.setState({
      score: 0,
      message: "Maybe you should play in the G-League!"
    })
  }

// When clicking on a tile, determine if wrong or correct and run appropriate function
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
      sortingMethod: 'shuffle',
      friends: shuffle(squaresMap)
    });

    guessedCorrectly ? this.correctGuess() : this.wrongGuess();
  }

// Render HTML
  render() {
    return (
      <div className="App">

        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Container>
          <p className="App-intro">
            Test your Memory. Make sure to only click on each tile once and only once.
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>
            
              {/* Game renders here within overall centered materialize div */}

              <main className="game-squares">
                <Row style={{position: "relative"}}>

                  {/* Each of 12 squares rendered within this row div */}
                  <FlipMove staggerDurationBy={30} duration={750} enterAnimation={"accordionHorizontal"}>
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
                  </FlipMove>
                </Row>
              </main>

            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;