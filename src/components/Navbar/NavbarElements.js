import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa'; //react-icons/fa is a library of icons in react library

export const Nav = styled.nav` /* Back-ground of the Nav-Bar */
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  // border: 10px solid white;
`;

export const NavLink = styled(Link)` /* Slush'd text of Nav-bar */
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  // border: 10px solid white;
  @media screen and (max-width: 400px) { /* For the small screens or to make the web responsive */
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div` /* Two nav icons at right hand */
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)` /* Pizza Slice at the right hand top side */
  font-size: 2rem;
  transform: translate(-50%, -15%);
  // border: 10px solid white;
`;
