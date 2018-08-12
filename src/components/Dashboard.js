import React, { Component } from 'react';

import Routes from './Routes';
import Home from './Home';
import Header from './Header';
import { getUserData } from '../util/api';
import Spinner from './Spinner';

class Dashboard extends Component {
  state = {
    userData: null,
    loading: true,
    goToHome: false
  };

  componentWillMount() {
    getUserData(this.props.username).then(response => {
      this.setState({ userData: response, loading: false });
    });
  }

  tryAgainHandler = () => {
    this.setState({ goToHome: true });
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }
    if (this.state.goToHome) {
      return <Home />
    }
    return (
      <div>
        <Header username={this.props.username} tryAgainHandler={this.tryAgainHandler}/>
        <Routes {...this.props} {...this.state.userData} />
      </div>
    );
  }
}

export default Dashboard;
