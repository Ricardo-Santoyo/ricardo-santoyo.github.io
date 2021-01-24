import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <ul className="navlinks">
        <Link to="/" replace>
          <li>Home</li>
        </Link>

        <Link to="/projects" replace>
          <li>Projects</li>
        </Link>

        <Link to="/contact" replace>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;