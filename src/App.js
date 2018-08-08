import React, { Component } from 'react';

import Home from './components/Home';
import { getRepos, getUserData } from './util/api';

class App extends Component {
  componentDidMount() {
    getRepos("akashdeepsamantra")
      .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
