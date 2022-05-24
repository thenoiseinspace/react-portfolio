import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Sarah Gilbreath</h1>
      <h3>Full-stack developer</h3>
    </header>
  );
}

export default Header;
