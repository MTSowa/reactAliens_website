import React from 'react';
import './card.css';

const Card = (props) => (
  <div className="card-container">
    <img
      alt="aliens"
      src={`https://robohash.org/${
        props.aliens.id + 100
      }?set=set1&size=180x180`}
    />
    <h3>{props.aliens.name}</h3>
    <h5>{props.aliens.email}</h5>
  </div>
);

export default Card;
