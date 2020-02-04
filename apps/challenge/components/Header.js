/*
 * You can EDIT this FILE
 */

import React from "react";

import Search from "./Search";

import { Header, Logo, Links } from "./styles";

export default () => (
  <Header>
    <Logo src="/img/logo.svg" />

    <Links>
      <a href="/challenge/artworks">Artworks</a>
      <a href="/challenge/instructions">Instructions</a>
    </Links>

    <Search />
  </Header>
);
