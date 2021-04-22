import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ContactUs from '../ContactUs/Contact'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import OAuth from '../OAuth/Oauth';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false); //Here we set isOpen to false. That means it is closed
  //Here we are using a HOOK
  //Hooks allows you to use state and other React features without writing a class. You can just work 
  // with functions instead of working with classes, functions, higher-order components.
  //It is a new feature and very handy

  const toggle = () => { //When clicked it becomes true and vice versa.
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
     
      <Navbar toggle={toggle} >
        
        </Navbar> 
        <OAuth />
        {/*  We put the toggle function in the navbar
      ----> Here we are putting Navbar Component inside the Hero Component. That's
      why we can see the green line covering nav bar also. 
      -----> After this, we go to the root app.js where we erase <Navbar /> as we are using it 
      in the Hero component. And then we put hero component in the app.js*/}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      
      <HeroContent>
      <ContactUs />
        <HeroItems>
          <HeroH1>Slush'D Resturant</HeroH1> {/* This is a heading */}
          <HeroP>We're Open now</HeroP> {/* this is a paragraph */}
          <HeroBtn>Place Order</HeroBtn> {/*this is a button*/}
        </HeroItems>
      </HeroContent>
      
    </HeroContainer>
    
  );
};

export default Hero; //We export this so that other classes can use it
