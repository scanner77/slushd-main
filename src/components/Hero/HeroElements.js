import styled from 'styled-components';
import ImgBg from '../../images/pizzaman.jpg';

export const HeroContainer = styled.div` //This is the full section including nav-bar and HeroContent
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
 .
`;

export const HeroContent = styled.div` //This is the hero section only
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  // border: 5px solid green;
`;

export const HeroItems = styled.div` //This is the section in hero that contains "slush'd resturant", "we're open now", and "place order"

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  // border: 5px solid green;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1` //This is just a "Slush'd Resturant"
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  // border: 5px solid green;

`;

export const HeroP = styled.p` //This is a paragraph section that is "We're open now"
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  // border: 5px solid green;

`;

export const HeroBtn = styled.button` //This is a "place order" section
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  // border: 5px solid green;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
