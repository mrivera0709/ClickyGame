import React from 'react';
import { Row } from 'react-materialize';
//import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


// Component class for rendering all game squares from friends.json
class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      friends,
      score: 0,
      message: null
    };
    // console.log(this.props);
  }


  handleClick = (id) => {
    // ^^Stores the id of image clicked in parameter

    // console.log("Image clicked");
    console.log(id);

    // Compared whether or not been clicked before 
    let guessedCorrectly = false;

    const squaresMap = this.state.friends.map(friend => {
      // Makes a copy of the friends array to manipulate
      const newFriendData = { ...friend };

      // then match the id to one in array AND check if click is currently true or false
      if (newFriendData.id === id) {
        if (!newFriendData.click) {

          newFriendData.click = true;
          guessedCorrectly = true;
          // Now the -next- time that same square is clicked, it should set to false and stop the game.... right??
          console.log(friend);
        } 
        // console.log(newFriendData);
        
      }
      return newFriendData;
    });

    console.log(squaresMap);  //NOW returns the changed image AND the rest of the un-changed images
    
    // what makes this re-render changes in the dom.......
    this.setState({
      friends: squaresMap
    });

    // Reads if square was clicked before and displays message
    // Need to change to display on page********
    guessedCorrectly ? console.log("Correct guess") : console.log("Incorrect guess");
  }

  // componentDidMount() {
  //   // this.timerID = setInterval(
  //   //   () => this.setState(),
  //   //   1000
  //   // );
  // }


  // Use "building block" component from Squares to render each image in the materialize divs
  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          {this.state.friends.map(friend => (
            <Squares 
              image={ friend.image }
              alt={ friend.name }
              key={ friend.id }
              id={ friend.id }
              click={ friend.click }
              // handleClick={() => this.handleClick(friend.id)}
              handleClick={ this.handleClick }
            />
          ))}
        </Row>
      </main>
    )
  }
}

export default Game;