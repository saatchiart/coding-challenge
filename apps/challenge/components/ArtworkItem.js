/*
 * You can EDIT this FILE
 */

import React from "react";
import styled from "styled-components";

import MyConnector from "../connectors/MyConnector";

import {
  ArtworkItem,
  Column,
  Favicon,
  ImageWrapper,
  Info,
  Row,
  SubText,
  Title
} from "./styles/artworkItem";

export default props => {
  const { data } = props;
  if (!data) {
    return <p>Please set ArtworkItems into a attribute of `data`</p>;
  }
  const {
    artId,
    artworkTitle,
    artworkUrl,
    imageUrl,
    profileUrl,
    subject,
    artist,
    dimensions,
    category,
    product
  } = data;
  const isFavorited = false;
  return (
    <ArtworkItem>
      <ImageWrapper>
        <img src={imageUrl} />
        <Favicon isFavorited={isFavorited} className="fa fa-heart" />
      </ImageWrapper>
      <Info>
        <Title>
          <a href={artworkUrl}>{artworkTitle}</a>
        </Title>

        <SubText>
          {category}, {dimensions.width}W x {dimensions.height}H x{" "}
          {dimensions.depth}cm
        </SubText>

        <Row>
          <Column>
            <Title>
              <a href={artist.profileUrl}>
                {artist.firstName} {artist.lastName}
              </a>
            </Title>
            <SubText>{artist.country}</SubText>
          </Column>

          <Column right>
            {product.originalStatus === "avail" && (
              <Title>${(product.originalPrice / 100).toLocaleString()}</Title>
            )}
            <div>
              {product.printsAvailable && (
                <span>Prints from ${product.printsPrice.toLocaleString()}</span>
              )}
            </div>
          </Column>
        </Row>
      </Info>
    </ArtworkItem>
  );
};
