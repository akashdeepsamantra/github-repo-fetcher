import React, { Component } from 'react';

import Home from './components/Home';
import { getRepos, getUserData } from './util/api';
import Routes from './components/Routes';

class App extends Component {
  componentDidMount() {
    getRepos("akashdeepsamantra")
      .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
