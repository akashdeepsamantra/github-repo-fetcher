import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/repos">Repos</Link>
        <Link to="/org">Organisation</Link>
      </div>
    </div>
  );
}

export default Header;