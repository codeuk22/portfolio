import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          {/* Add other links here */}
        </ul>
      </nav>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

export default Header;