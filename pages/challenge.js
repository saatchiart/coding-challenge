/*
 * Should NOT touch this FILE
 */

import React from "react";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";

import App from "../apps/challenge";

import { saatchiart } from "../lib/theme";

const Challenge = props => {
  const { store } = props;
  return (
    <>
      <ThemeProvider theme={saatchiart}>
        <App />
      </ThemeProvider>
    </>
  );
};

Challenge.getInitialProps = async ({ store, req, query }) => {
  // Client-Side
  if (!req) {
    return { store, query };
  }
  const { page } = query;
  store.dispatch({ type: "SET_PAGE_DATA", payload: page });
  return { store, query };
};

export default Challenge;
