import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper/Wrapper";
import ShowsPic from "../../Assets/tdustpullandpeel.png";

const ShowsStyled = styled.div`
  background-color: rgb(253, 183, 2);
  color: rgb(238, 234, 218);
  padding: 30px;
  background-image: url(${ShowsPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ul {
    list-style-type: none;
  }
`;

export default function Shows() {
  return (
    <ShowsStyled id="shows">
      <Wrapper>
        <h1>Shows</h1>
        <ul>
          <li>09.17.18 - La Crosse, WI - La Crosse Center $</li>
          <li>09.18.18 - Duluth, MN - DECC Symphony Hall $</li>
          <li>
            09.19.18 - Green Bay, WI - Brown Country Veterans Memorial Arena $
          </li>
          <li>09.20.18 - Milwaukee, WI - Quarters *</li>
          <li>09.21.18 - Fort Wayne, IN - Foellinger Outdoor Theater $</li>
          <li>09.22.18 - Waukegan, IL - Genesee Theater $</li>
          <li>09.24.18 - South Bend, IN - Morris Performing Arts Center $</li>
          <li>09.26.18 - London, OT - Foam Dome *</li>
          <li>09.27.18 - Rochester, NY - Loony Bin *</li>
          <li>09.28.18 - Long Island, NY - Death Castle/Dust Bowl *</li>
          <li>09.29.18 - New Haven, CT - (House Show) *</li>
          <li>09.30.18 - Brooklyn, NY - Bushwick Public House *</li>
          <li>10.01.18 - Long Branch, NY - Shore Caribbean *</li>
          <li>10.02.18 - Philadelphia, PA - Tundra Dome *</li>
          <li>10.03.18 - Pittsburgh, PA - Mr. Roboto *</li>
          <li>10.04.18 - Columbus, OH - Bourbon Street *</li>
          <li>10.06.18 - Iowa City, IA - Public Space One *</li>
          <li>10.07.18 - Minneapolis, MN - Hi-Watt House *</li>
        </ul>
      </Wrapper>
    </ShowsStyled>
  );
}
