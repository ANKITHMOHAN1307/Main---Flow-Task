import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </div>
      <div className="nav-right">
        Ankith Mohan
      </div>
    </nav>
  );
}

export default Navbar;
