import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="menu">
    <h2 className="menu-logo"><Link to="/">Math Magicians</Link></h2>
    <div className="links-list">
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  </div>
);

export default Navbar;
