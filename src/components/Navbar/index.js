import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <> {/* This is called fragments. If we use this, then we can use multiple divs */}
      <Nav> {/* This is like a div tag for the Nav bars in website */}
        <NavLink to='/'>Slush'd<br></br></NavLink> {/* This is the text slush'd we have inside the nav */}
        <NavIcon onClick={toggle}>  {/* NavIcon includes two icons on the right hand side */}
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
