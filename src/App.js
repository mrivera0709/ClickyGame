import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <div className="App">

{/*NAVBAR*/}
          <header className="App-header">
            <h1 className="App-title">REACT CLICKY GAME</h1>
            <p className="score">Current Score</p>
          </header>

{/*APP BODY*/}
        <Container>
          
          <p className="App-intro">
            Do you have a good memory? Lets test that out!
          </p>

          <Row className="Game">
            <Col s={12} className={"center-align"}>
            {/*GAME CONTENT*/}
              <Game />
            </Col>
          </Row>

        </Container>

      </div>
    );
  }
}

export default App;