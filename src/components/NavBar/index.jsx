/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu
  // NavBtn,
  // NavBtnLink,
} from './NavBarElements';
import style from './NavBar.css';
import logo from './NavLogo.png';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logo} alt="logo" />
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: 'black' }}>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: 'black' }}>
            Contact
          </NavLink>
          <NavLink to="/gallery" activeStyle={{ color: 'black' }}>
            Gallery
          </NavLink>
          {/* <NavLink
                  to="/signin"
                  activeStyle={{ color: 'black' }}
                >
                    Sign In
                </NavLink> */}
          {/* <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                </NavBtn> */}
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
