/*
 * You can EDIT this FILE
 */

import React, { useEffect } from "react";
import { ArtworkList, ListItems } from "./styles";
import ArtworkItem from "./ArtworkItem";
import { connect } from "react-redux";
import { getArtworks, loadFavoritesFromLocalStorage } from "../../../actions";

const ArtworkItems = ({ artworks }) => (
  <>
    {artworks.map((data, index) => {
      return <ArtworkItem key={index} data={data} />;
    })}
  </>
);

export const ArtworkListComponent = ({
  artworks,
  getArtworks,
  loadFavoritesFromLocalStorage,
}) => {
  useEffect(() => {
    getArtworks();
    loadFavoritesFromLocalStorage();
  }, []);
  //console.log(artworks)
  return (
    <ArtworkList>
      <h1>
        Original Art for Sale{" "}
        <sub>
          <i>{`(${artworks.length} ) artworks`}</i>
        </sub>
      </h1>

      <ListItems>
        {/* <p>
        Load Artworks via AJAX, Pull into Redux Store, and display each artworks
        data in a 'ArtworkItem'
      </p> */}
        {artworks.length > 0 ? (
          <ArtworkItems artworks={artworks} />
        ) : (
          <p>
            <i> No Artworks found</i>
          </p>
        )}
      </ListItems>
    </ArtworkList>
  );
};

const mapStateToProps = ({ filteredArtworks }) => ({
  artworks: filteredArtworks,
});

const mapDispatchToProps = {
  getArtworks,
  loadFavoritesFromLocalStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkListComponent);
