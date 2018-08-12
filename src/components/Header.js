import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className='header'>
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/repos">Repos</Link>
        <Link to="/org">Organisation</Link>
      </div>
      <div className='username'>
        <a onClick={props.tryAgainHandler}>Try Again</a>
      </div>
      <div className='username'>
        <Link to="/profile">{props.username}</Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired
}

export default Header;