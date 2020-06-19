import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const saveFavoriteToLocalStorage = ({ getState }) => {
  return (next) => (action) => {
    const returnValue = next(action);

    const favorites = getState().favorites;

    window.localStorage.setItem("favorites", JSON.stringify(favorites));
    return returnValue;
  };
};

export default (preloadedState) => {
  let store;
  if (typeof window !== "undefined") {
    store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk, saveFavoriteToLocalStorage))
    );
  } else {
    store = createStore(rootReducer, preloadedState);
  }
  return store;
};
