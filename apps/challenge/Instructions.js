/*
 * Should NOT touch this FILE
 */

import React from "react";
import marked from "marked";

import App from "./connectors/App";
import { Instructions } from "./components/styles";

export default App(({ markdown }) => (
  <Instructions
    dangerouslySetInnerHTML={{
      __html: marked(markdown)
    }}
  />
));
