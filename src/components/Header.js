import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <a href="/profile">Profile</a>
        <a href="/repos">Repos</a>
        <a href="/org">Organisation</a>
      </div>
    </div>
  );
}

export default Header;