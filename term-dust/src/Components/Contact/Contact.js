import React from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper/Wrapper';

const ContactStyled = styled.div`background-color: yellow;`;

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <Wrapper>
        <h1>Contact</h1>
        <p>
          THIS IS THE CONTACT SECTION
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </ContactStyled>
  );
}