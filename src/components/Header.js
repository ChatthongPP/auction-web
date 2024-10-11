import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Art Toys Auction</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/auction">Auction</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
