import React, { Component } from 'react';

import { getRepos } from '../util/api';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      showError: false
    };
  }

  changeUsernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  fetchData = () => {
    if (this.state.username !== '') {
      getRepos(this.state.username)
        .then(response => {
          if (response.status === 404) {
            this.setState({ showError: true })
          }
          console.log(response)
        });
    }
    else {
      this.setState({ showError: true })
    }
  }

  showErrorMsg = () => {
    const msg = this.state.username === '' ? "Username can not be empty" : "Please enter valid username"
    if (this.state.showError) {
      return (
        <p className='errorMsg'>{msg}</p>
      );
    }
    return null;
  }

  render() {
    return (
      <form className="home form">
        <h2>Welcome to Github repo fetcher</h2>
        <input
          type="text"
          placeholder="Enter username here!"
          value={this.state.username}
          onChange={this.changeUsernameHandler}
        />
        <this.showErrorMsg />
        <button type="button" onClick={this.fetchData}>Submit</button>
      </form>
    );
  }
}

export default Home;
