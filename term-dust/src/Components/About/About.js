import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper/Wrapper";
import AboutPic from "../../Assets/tdustsampler.png";

const AboutStyled = styled.div`
  background-color: rgb(57, 226, 216);
  color: rgb(238, 234, 218);
  padding: 30px;
  background-image: url(${AboutPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default function About() {
  return (
    <AboutStyled id="about">
      <Wrapper>
        <h1>About</h1>
        <p>Very cool band from Alaska.</p>
      </Wrapper>
    </AboutStyled>
  );
}
