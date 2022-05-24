import React from 'react';

function NavTabs(props) {
  const {setSelectedPage} = props
  const clickHandler = (event) => {
    setSelectedPage(event.target.value)
    console.log(event.target.value)
  }
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" onClick = {() => setSelectedPage("Portfolio")}>
          Portfolio
      </li>
      <li className="nav-item" onClick = {() => setSelectedPage("About")}>
          About
      </li>
      <li className="nav-item" onClick = {() => setSelectedPage("Resume")}>
          Resume
      </li>
      <li className="nav-item" onClick = {() => setSelectedPage("Contact")}>
          Contact
      </li>
    </ul>
  );
}

export default NavTabs;
