import React, { useState } from 'react';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'active' : ''}`}>
      <div className="logo">RISE 11</div>
      <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        {/* <li><a href="#">Find a Guide</a></li>
        <li><a href="/register"></a></li> */}
        <li><a href="/todo">To Do</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
