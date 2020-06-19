import {
  SET_PAGE_DATA,
  SET_ART_DATA,
  FILTER_ART,
  SET_FAVORITE,
  UNSET_FAVORITE,
  SET_FAVORITES_LOCAL_STORAGE,
} from "./actionTypes";

export const initialState = {
  name: "", // App Name
  params: {}, // Express/NEXTjs URL Params/Queries
  markdown: "", // Markdown Notes
  artworks: [],
  filteredArtworks: [],
  search: "",
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_DATA:
      return { ...state, ...action.payload };
    case SET_ART_DATA:
      return {
        ...state,
        artworks: action.payload,
        filteredArtworks: action.payload,
      };
    case FILTER_ART:
      return {
        ...state,
        search: action.payload,
        filteredArtworks: state.artworks.filter((data) =>
          data.artworkTitle.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case SET_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case UNSET_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };
    case SET_FAVORITES_LOCAL_STORAGE:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default reducer;
