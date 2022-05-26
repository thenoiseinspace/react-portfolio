import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import NavTabs from './NavTabs';

function Header({setSelectedPage}) {
  return (
    <header className="header">
      <div className="headerDiv">
        <div className="nestedDivsAreGreat">
        <h1>Sarah Gilbreath</h1>
        <h3>Full-stack developer</h3>
        </div>
        <NavTabs setSelectedPage = {setSelectedPage} sarah={"test"}/>
      </div>
    </header>
  );
}

export default Header;
