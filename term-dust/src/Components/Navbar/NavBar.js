import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";

import Wrapper from "../Wrapper/Wrapper";

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    font-family: "Arimo", sans-serif;
    
    * {
      cursor: pointer;
      // color: rgb(238, 102, 37);
      color: white;
      text-decoration: none;
      &:hover{
        // color: rgb(238, 102, 37);
        color: rgb(253, 183, 2);
      }
    }
    .active {
      color: rgb(253, 183, 2);
    }
  }
  .logo{
    //this is styling specific to the band name in the nav bar
    font-weight: bolder;
    font-size: 40px;
    color: rgb(253, 183, 2);
  }

`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="header">

        <div className="logo">
          <Link
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            duration={1000}
          >
            TERMINATION DUST
          </Link>
        </div>

        
          <Link
          className="pages"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About
          </Link>

          <Link
          className="pages"
            activeClass="active"
            to="shows"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Shows
          </Link>

          <Link
          className="pages"
            activeClass="active"
            to="store"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Store
          </Link>

          <Link
          className="pages"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </div>
      
      <div className="scrolling-buttons">
        <Wrapper>{/* <OnScreenScrolling /> */}</Wrapper>
      </div>
    </NavbarStyled>
  );
}
