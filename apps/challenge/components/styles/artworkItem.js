/*
 * Should NOT touch this FILE
 */

import styled from "styled-components";

export const ArtworkItem = styled.div`
  flex: 1 0 21%; 
  margin: 5px;
  background: #fff;
  border: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
  img {
    width: 100%;
  }
  max-width: 500px;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Favicon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.isFavorited ? props.theme.colors.red : props.theme.colors.secondary};
  transition: 0.3s ease-in color;
  cursor: pointer;
  &.fa {
    display: flex;
  }
  &:hover {
    color: ${props =>
      props.liked ? props.theme.colors.secondary : props.theme.colors.red};
  }
`;

export const Info = styled.div`
  margin-top: ${props => props.theme.space[2]}px;
`;

export const Title = styled.div`
  font-family: ${props => props.theme.fontFamilySerif};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: ${props => props.theme.space[1]}px;
  a {
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.default};
    transition: 0.5s ease color;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;

export const SubText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const ArtworkWrapper = styled.div`
  position: relative;
  img {
    opacity: 1;
    transition: opacity linear 0.3s;
    ${props => props.hover && "opacity: 0.8"};
    backface-visibility: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.right && "align-items: flex-end;"};
`;
