import React from 'react';
import '../styles/Navbar.css';


const Navbar = props => (
  <header className="App-header">
    <h1 className="App-title"> NBA Memory Clicky Game</h1>
    {/*<p className="score">Score goes here!</p>*/}
    <p className="score">Score: { props.score } out of 12 --- Top Score: { props.topScore }</p>
    <p className="message">{ props.message }</p>
  </header>
);

export default Navbar;