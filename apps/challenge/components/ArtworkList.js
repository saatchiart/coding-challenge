/*
 * You can EDIT this FILE
 */

import React, { useEffect } from "react";

import { ArtworkList, ListItems } from "./styles";
// import ArtworkItem from "./ArtworkItem";

export default () => (
  <ArtworkList>
    <h1>Original Art for Sale</h1>

    <ListItems>
      <p>
        Load Artworks via AJAX, Pull into Redux Store, and display each artworks
        data in a 'ArtworkItem'
      </p>
    </ListItems>
  </ArtworkList>
);
