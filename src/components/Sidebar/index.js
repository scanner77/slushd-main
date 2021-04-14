import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon /> {/* This is the cross X button to minimize the sidebar */}
      </Icon>
      <SidebarMenu> {/* Creating three options in the side bar menu */}
        <SidebarLink to='/'>Food</SidebarLink>
        <SidebarLink to='/'>Reserve Seat</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
