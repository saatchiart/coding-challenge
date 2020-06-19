import axios from "axios";
import {
  SET_ART_DATA,
  FILTER_ART,
  SET_FAVORITE,
  UNSET_FAVORITE,
  SET_FAVORITES_LOCAL_STORAGE,
} from "./actionTypes";

export const fetchArtworks = () => {
  return axios.get("http://localhost:3000/api/data").then((response) => {
    return response.data.payload;
  });
};

export const filterArtworks = (search) => ({
  type: FILTER_ART,
  payload: search,
});

export const makeFavorite = (artId) => ({
  type: SET_FAVORITE,
  payload: artId,
});

export const unsetFavorite = (artId) => ({
  type: UNSET_FAVORITE,
  payload: artId,
});

export const getArtworks = () => (dispatch) => {
  fetchArtworks().then((artworks) => {
    dispatch({
      type: SET_ART_DATA,
      payload: artworks,
    });
  });
};

export const loadFavoritesFromLocalStorage = () => (dispatch) => {
  const favorites = JSON.parse(window.localStorage.getItem("favorites"));
  dispatch({
    type: SET_FAVORITES_LOCAL_STORAGE,
    payload: favorites,
  });
};
