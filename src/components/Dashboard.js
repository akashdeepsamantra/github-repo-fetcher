import React from 'react';

import Routes from './Routes';
import Header from './Header';

const Dashboard = props => {
  return (
    <div>
      <Header />
      <Routes {...props}/>
    </div>
  );
};

export default Dashboard;