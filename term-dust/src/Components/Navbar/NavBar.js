import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';

import Wrapper from '../Wrapper/Wrapper';

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="header">
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
          About
        </Link>
        <Link activeClass="active" to="shows" spy={true} smooth={true} duration={1000}>
          Shows
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
          Contact
        </Link>
      </div>
      <div className="scrolling-buttons">
        <Wrapper>
          {/* <OnScreenScrolling /> */}
        </Wrapper>
      </div>
    </NavbarStyled>
  );
}









