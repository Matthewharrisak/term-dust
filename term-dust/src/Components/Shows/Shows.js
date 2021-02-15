import React from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper/Wrapper';

const ShowsStyled = styled.div`
background-color: rgb(229, 159, 70);
color: rgb(238, 234, 218);
padding: 30px;`;

export default function Shows() {
  return (
    <ShowsStyled id="shows">
      <Wrapper>
        <h1>Shows</h1>
        <p>
          THIS IS THE SHOWS SECTION
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </ShowsStyled>
  );
}