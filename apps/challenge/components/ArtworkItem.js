/*
 * You can EDIT this FILE
 */

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeFavorite, unsetFavorite } from "../../../actions";
//import MyConnector from "../connectors/MyConnector";

import {
  ArtworkItem,
  Column,
  Favicon,
  ImageWrapper,
  Info,
  Row,
  SubText,
  Title,
} from "./styles/artworkItem";

export const ArtworkItemComponent = ({
  makeFavorite,
  unsetFavorite,
  data,
  isFavorited,
}) => {
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
    product,
  } = data;
  const onFavoriteClick = isFavorited ? unsetFavorite : makeFavorite;
  return (
    <ArtworkItem>
      <ImageWrapper>
        <img src={imageUrl} />
        <Favicon
          isFavorited={isFavorited}
          className="fa fa-heart"
          onClick={() => onFavoriteClick(artId)}
        />
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

const mapStateToProps = ({ favorites }, { data }) => ({
  isFavorited: favorites.includes(data.artId),
});

const mapDispatchToProps = {
  makeFavorite,
  unsetFavorite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkItemComponent);
