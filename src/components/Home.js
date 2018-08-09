import React, { Component } from 'react';

class Home extends Component {
  state = {
    username: ''
  };

  changeUsernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <form>
        <h2>Welcome to Github repo fetcher</h2>
        <input
          type="text"
          placeholder="Enter username here!"
          value={this.state.username}
          onChange={this.changeUsernameHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Home;
