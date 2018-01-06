import React from 'react';
import { Col } from 'react-materialize';

const Squares = props => (
    <Col l={3} m={4} s={6}>
      <img src={ props.image } 
      alt={ props.alt } 
      key={ props.id }
      id={ props.id } 
      onClick={ () => props.handleClick(props.id) }
      className="z-depth-4"
      />
    </Col>
  );

export default Squares;