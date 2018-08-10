import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Repos from './Repos';
import Org from './Org';
import Profile from './Profile';

class Routes extends Component {
  render(props) {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route
          exact
          path="/profile"
          render={props => <Profile {...this.props} {...props} />}
        />
        <Route
          exact
          path="/repos"
          render={props => <Repos {...this.props} {...props} />}
        />
        <Route
          exact
          path="/org"
          render={props => <Org {...this.props} {...props} />}
        />
      </Switch>
    );
  }
}

export default Routes;
