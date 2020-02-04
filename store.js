import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./reducer";

export default preloadedState => {
  let store;
  if (typeof window !== "undefined") {
    store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware())
    );
  } else {
    store = createStore(rootReducer, preloadedState);
  }
  return store;
};
