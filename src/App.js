import React, { Component } from 'react';
import Cardlist from './components/Card-list/Cardlist.compo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
    };
  }

  // mount
  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((alienData) => this.setState({ aliens: alienData }));
      // if(!response.ok) throw new Error('there was a problem fetching the data..')
    } catch (error) {
      console.log('there has been an error...');
    }
  }

  render() {
    return (
      <div>
        <Cardlist>
          {this.state.aliens.map((alien) => (
            <div key={alien.id}>
              <h3>{alien.name}</h3>
            </div>
          ))}
        </Cardlist>
      </div>
    );
  }
}
