import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper/Wrapper";

const StoreStyled = styled.div`
  background-color: rgb(13, 169, 161);
  color: rgb(238, 102, 37);
  padding: 30px;

  button {
      width: 200px;
      padding: 30px;
      margin: 0 auto;
      background-color: rgb(238, 102, 37);
  }
`;

export default function Store() {
  return (
    <StoreStyled id="store">
      <Wrapper>
        <h1>Store</h1>
        <p>
            THIS WILL BE A LINK TO THE STORE PAGE
        </p>
        <button>GO TO STORE</button>
      </Wrapper>
    </StoreStyled>
  );
}