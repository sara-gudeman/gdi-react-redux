import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="Header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Header;