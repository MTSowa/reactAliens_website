import React from 'react';
import './cardlist.css';

export default function Cardlist(props) {
  return <div className="cardlist">{props.children}</div>;
}
