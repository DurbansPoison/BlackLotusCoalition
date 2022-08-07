import React from 'react';
import NavBar from './../NavBar';
import logo from './Logo.svg';
import { StyledWrapper, StyledImg, StyledTitle } from './HeaderElements';
function Header() {
  return (
    <StyledWrapper>
      <p>
        <StyledImg src={logo} alt="logo" className="logo" />
        <StyledTitle>Black Lotus Coalition</StyledTitle>
        <NavBar />
      </p>
    </StyledWrapper>
  );
}

export default Header;
