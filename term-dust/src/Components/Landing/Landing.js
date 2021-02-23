import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import LandingPic from "../../Assets/tdustyellow.jpg";

const LandingStyled = styled.div`
  background-color: rgb(253, 183, 2);
  background-image: url(${LandingPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: rgb(238, 234, 218);
  padding: 30px;
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function About() {
  return (
    <LandingStyled id="landing">
      <Wrapper>{/* this is the future home of a video background */}</Wrapper>
    </LandingStyled>
  );
}
