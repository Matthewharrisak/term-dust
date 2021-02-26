import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";
import StorePic from "../../Assets/merchtable.png";

const StoreStyled = styled.div`
  background-color: rgb(57, 226, 216);
  color: rgb(238, 234, 218);
  padding: 30px;
  background-image: url(${StorePic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  button {
    width: 200px;
    padding: 30px;
    margin: 0 auto;
    background-color: rgb(253, 183, 2);
  }
`;

export default function Store() {
  return (
    <StoreStyled id="store">
      <Wrapper>
        <h1>Store</h1>
        <p>THIS WILL BE A LINK TO THE STORE PAGE</p>
        
        <button>GO TO STORE</button>
      </Wrapper>
    </StoreStyled>
  );
}
