import React from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper/Wrapper';

const AboutStyled = styled.div`
  background-color: rgb(13, 169, 161);
  color: rgb(238, 234, 218);
  padding: 30px;
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function About() {
  return (
    <AboutStyled id="about">
      <Wrapper>
        <h1>About</h1>
        <p>
          THIS IS THE ABOUT SECTION
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </AboutStyled>
  );
}


