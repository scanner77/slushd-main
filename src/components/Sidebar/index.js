import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu
} from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon /> {/* This is the cross X button to minimize the sidebar */}
      </Icon>
      <SidebarMenu> {/* Creating three options in the side bar menu */}
      <p>Email: slushdadaok@gmail.com</p>
      <p>Phone: (580) 279-0833</p>
      <p>Hours: Mon-Thursday 2pm-12am <br />
Friday-Saturday 2pm-2am</p>
<p>Address: 214 W Main Street Ada, Oklahoma 74820</p>
    
      </SidebarMenu>

    </SidebarContainer>
  );
};

export default Sidebar;
