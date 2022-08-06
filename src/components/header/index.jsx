import React from 'react';
import logo from './Logo.png';
import HeaderElements from './headerElements';
function Header() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <h1>Black Lotus Coalition</h1>
      </p>
    </div>
  );
}

export default Header;
