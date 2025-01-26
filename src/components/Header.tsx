import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Lorem Ipsum</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button>FI</button></li>
          <li><button>EN</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
