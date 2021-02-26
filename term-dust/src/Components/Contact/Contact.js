import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import ContactPic from "../../Assets/tduststage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const ContactStyled = styled.div`
  background-color: rgb(253, 183, 2);
  color: rgb(238, 234, 218);
  padding: 30px;
  background-image: url(${ContactPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const facebook = <FontAwesomeIcon icon={faFacebookSquare}/>
const instagram = <FontAwesomeIcon icon={faInstagramSquare}/>

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <Wrapper>
        <>
        <h1>Contact</h1>
        <a href="https://www.facebook.com/terminationdust/">
                       <p className="SocialIcon">{facebook}</p>
                    </a>
                    <a href="https://www.instagram.com/termination.dust/?hl=en">
                       <p className="SocialIcon">{instagram}</p>
                    </a>
                    </>
      </Wrapper>
    </ContactStyled>
  );
}
