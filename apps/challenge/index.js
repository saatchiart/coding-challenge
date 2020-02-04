/*
 * Should NOT touch this FILE
 * This is the GLOBAL layout for the VIEWS
 */

import React from "react";

import App from "./connectors/App";
import Header from "./components/Header";
import Challenge from "./Challenge";
import Instructions from "./Instructions";

import { GlobalStyle, StyleBase, Wrapper, Section } from "./components/styles";

export default App(({ section }) => {
  const showInstructions = section === "instructions";
  return (
    <StyleBase>
      <GlobalStyle />
      <Wrapper {...(showInstructions ? { "data-type": "hideSearch" } : {})}>
        <Header />
        <Section>{showInstructions ? <Instructions /> : <Challenge />}</Section>
      </Wrapper>
    </StyleBase>
  );
});
