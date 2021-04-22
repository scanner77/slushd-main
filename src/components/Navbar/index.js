import React from 'react'; //We import react so that we can use the react library
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => { //So in the navbar we have put the toggle
  //Here it shows the functionality of toggle.
  return (
    <> {/* This is called fragments. If we use this, then we can use multiple divs */}
      <Nav> {/* This is like a div tag for the Nav bars in website */}
        <NavLink to='/'>Slush'D<br></br></NavLink> {/* This is the text slush'd we have inside the nav */}
        <NavIcon onClick={toggle}>  {/* NavIcon includes two icons on the right hand side */}
          <p>Info</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
