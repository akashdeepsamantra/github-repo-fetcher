import React, { Component } from 'react';

import { getRepos } from '../util/api';
import Dashboard from './Dashboard';
import Spinner from './Spinner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'oliviertassinari',
      showError: false,
      redirect: false,
      data: null,
      loading: false
    };
  }

  changeUsernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  fetchData = () => {
    this.setState({ loading: true });
    if (this.state.username !== '') {
      getRepos(this.state.username).then(response => {
        if (response.status === 404) {
          this.setState({ showError: true });
        }
        this.setState({
          redirect: true,
          data: response
        });
      });
    } else {
      this.setState({ showError: true });
    }
  };

  showErrorMsg = () => {
    const msg =
      this.state.username === ''
        ? 'Username can not be empty'
        : 'Please enter valid username';
    if (this.state.showError) {
      return <p className="errorMsg">{msg}</p>;
    }
    return null;
  };

  render() {
    if (this.state.redirect) {
      return <Dashboard data={this.state.data} username={this.state.username} />;
    }

    if (this.state.loading) {
      return <Spinner />
    }

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
        <button type="button" onClick={(this.fetchData)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Home;
