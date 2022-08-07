import React from 'react';
import NavBar from './../NavBar';
import logo from './Logo.png';
import { StyledImg, StyledTitle } from './HeaderElements';
function Header() {
  return (
    <div className="App">
      <p>
        <StyledImg src={logo} alt="logo" className="logo" />
        <StyledTitle>Black Lotus Coalition</StyledTitle>
        <NavBar />
      </p>
    </div>
  );
}

export default Header;
