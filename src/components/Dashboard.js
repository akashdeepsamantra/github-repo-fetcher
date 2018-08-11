import React, { Component } from 'react';

import Routes from './Routes';
import Header from './Header';
import { getUserData } from '../util/api';
import Spinner from './Spinner';

class Dashboard extends Component {
  state = {
    userData: null,
    loading: true
  };

  componentWillMount() {
    getUserData(this.props.username).then(response => {
      this.setState({ userData: response, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <Header username={this.props.username} />
        <Routes {...this.props} {...this.state.userData} />
      </div>
    );
  }
}

export default Dashboard;
