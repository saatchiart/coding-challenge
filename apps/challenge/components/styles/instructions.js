/*
 * Should NOT touch this FILE
 */

import styled from "styled-components";

// Instructions Component
export const Instructions = styled.div`
  h1 {
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
    margin: 0;
  }
  h5 {
    font-family: ${props => props.theme.fontFamilySerif};
    font-size: 18px;
    font-weight: normal;
    margin: 35px 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.borderDark};
  }
  img {
    max-width: 600px;
  }
  code {
    padding: 5px 5px;
    display: inline-block;
    background: ${props => props.theme.colors.backgroundGrayLight};
    border: 1px solid ${props => props.theme.colors.borderDark};
    border-radius: 3px;
  }
  p {
    color: ${props => props.theme.colors.default};
  }
  a {
    color: ${props => props.theme.colors.blue};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
    }
    &:focused,
    &:visited {
      color: ${props => props.theme.colors.secondary};
    }
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;
