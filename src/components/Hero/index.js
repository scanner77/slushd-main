import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} /> {/* 
      ----> Here we are putting Navbar Component inside the Hero Component. That's
      why we can see the green line covering nav bar also. 
      -----> After this, we go to the root app.js where we erase <Navbar /> as we are using it 
      in the Hero component. And then we put hero component in the app.js*/}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Slush'D Resturant</HeroH1>
          <HeroP>We're Open now</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
