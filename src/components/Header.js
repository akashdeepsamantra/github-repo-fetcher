import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <a href="/dashboard">Dashboard</a>
        <a href="/repos">Repos</a>
        <a href="/org">Organisation</a>
      </div>
    </div>
  );
}

export default Header;