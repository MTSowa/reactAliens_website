import React, { Component } from 'react';
import Cardlist from './components/Card-list/Cardlist.compo';
import Search from './components/search/Search.compo';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      aliens: [],
      searchfield: '',
    };
  }

  // mounting - when page loads...
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
  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { aliens, searchfield } = this.state;
    const filteredAliens = aliens.filter((alien) =>
      alien.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div>
        <Search
          placeholder={'Search aliens....'}
          onChange={this.handleChange}
        />
        {/* <input
          type="search"
          placeholder="search the alien..."
          onChange={(e) => {
            this.setState({ searchfield: e.target.value });
          }}
        /> */}
        <Cardlist aliens={filteredAliens} />
      </div>
    );
  }
}
