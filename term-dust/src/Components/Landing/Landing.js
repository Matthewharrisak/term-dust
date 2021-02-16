import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper/Wrapper";

const LandingStyled = styled.div`
  background-color: rgb(229, 159, 70);
  color: rgb(238, 234, 218);
  padding: 30px;
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function About() {
  return (
    <LandingStyled id="landing">
      <Wrapper>
        <h1>LANDING</h1>
        <p>
          THIS IS THE LANDING PAGE, HOME OF A VIDEO BACKGROUND IN THE FUTURE
        </p>
      </Wrapper>
    </LandingStyled>
  );
}
