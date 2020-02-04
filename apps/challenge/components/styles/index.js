/*
 * You can EDIT this FILE
 */

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

// StyleBase
export const StyleBase = styled.div`
  color: ${props => props.theme.colors.default};
  font-family: ${props => props.theme.fontFamilySans};

  @media (min-width: ${props => props.theme.breakpoints[1]}px) {
    padding: 0;
  }
`;

// App ( OUTER Wrapper )
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

// SectionWrapper
export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 0;
`;

export * from "./artworkList";
export * from "./instructions";
export * from "./header"; // includes `search` component styling
export * from "./artworkItem";
