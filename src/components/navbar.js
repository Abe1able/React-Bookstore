import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSmodule/navbar.css';
import { VscAccount } from 'react-icons/vsc';

const Navbar = () => (
  <header>
    <nav>
      <ul className="menuList">
        <li><Link className="links logo" to="/">Bookstore CMS</Link></li>
        <li><Link className="links mainLink" to="/">Books</Link></li>
        <li><Link className="links" to="/category">Category</Link></li>
      </ul>
      <div><VscAccount className="size" /></div>
    </nav>
  </header>
);

export default Navbar;
