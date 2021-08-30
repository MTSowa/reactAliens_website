import React from 'react';
import Card from '../Card/Card.compo';
import './cardlist.css';

export default function Cardlist(props) {
  return (
    <div className="cardlist">
      {props.aliens.map((alien) => (
        <Card key={alien.id} aliens={alien} />
      ))}
    </div>
  );
}
