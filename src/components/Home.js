import React, { Component } from 'react';

import { getRepos } from '../util/api';
import Dashboard from './Dashboard';
import Spinner from './Spinner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showError: false,
      redirect: false,
      data: null,
      loading: false,
      timer: 0
    };
  }

  changeUsernameHandler = event => {
    this.setState({ username: event.target.value, showError: false });
  };

  fetchData = () => {
    if (this.state.username !== '') {
      getRepos(this.state.username).then(response => {
        if (response.status !== 200) {
          console.log(response.status);
          this.setState({ showError: true, loading: false });
          console.log(this.state.loading)
        }
        else {
          this.setState({ loading: true });
          this.setState({
            redirect: true,
            data: response.data
          });
        }
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
    console.log(this.state.loading);
    if (this.state.loading) {
      return (
        <Spinner />
      );
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
