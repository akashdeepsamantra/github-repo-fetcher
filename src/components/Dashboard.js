import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        Dashboard
        <Footer />
      </div>
    );
  }
}

export default Dashboard;