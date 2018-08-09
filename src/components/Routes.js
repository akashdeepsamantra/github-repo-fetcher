import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Repos from './Repos';
import Org from './Org';
import Dashboard from './Dashboard';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repos" component={Repos} />
        <Route exact path="/org" component={Org} />
      </Switch>
    );
  }
}

export default Routes;
