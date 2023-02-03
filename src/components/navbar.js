import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Bookstore CMS</Link></li>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/category">Category</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
