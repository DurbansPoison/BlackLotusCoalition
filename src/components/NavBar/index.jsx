/* eslint-disable react/jsx-no-duplicate-props */
import {
  Nav,
  NavLink,
  Bars,
  // NavBtn,
  // NavBtnLink,
  StyledTitle,
  NavMenu
} from './NavBarElements';
// import '.../fonts.css';
const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <StyledTitle></StyledTitle>
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: 'black' }}>
            About
          </NavLink>
          <NavLink to="/designers" activeStyle={{ color: 'black' }}>
            Designers
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
    </div>
  );
};
export default Navbar;
