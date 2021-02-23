import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import ContactPic from "../../Assets/tduststage.png";

const ContactStyled = styled.div`
  background-color: rgb(253, 183, 2);
  color: rgb(238, 234, 218);
  padding: 30px;
  background-image: url(${ContactPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <Wrapper>
        <h1>Contact</h1>
        <p>
          THIS IS THE CONTACT SECTION Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate
          suscipit, quisquam voluptas mollitia ex iusto voluptates.
        </p>
      </Wrapper>
    </ContactStyled>
  );
}
