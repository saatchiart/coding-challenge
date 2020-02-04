/*
 * You can EDIT this FILE
 */

import styled from "styled-components";

// HEADER Component
export const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 29.844px;
`;

export const Links = styled.nav`
  a {
    color: ${props => props.theme.colors.default};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
      &:before {
        content: "|";
        margin-right: 30px;
      }
    }
    &:focused,
    &:visited {
      color: ${props => props.theme.colors.default};
    }
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;

// SEARCH Component
export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.borderDark};
  [data-type="hideSearch"] & {
    visibility: hidden;
  }
`;

export const SVG = styled.svg`
  height: 7px;
  width: 14px;
  margin: 15px 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  display: flex;
  flex-grow: 1;
  border-left: 1px solid ${props => props.theme.colors.borderDark};
  color: #666;
  &::placeholder {
    color: #ccc;
  }
`;

export const Mag = styled.img`
  margin-right: 10px;
  height: 15px;
  width: 16.4219px;
`;
