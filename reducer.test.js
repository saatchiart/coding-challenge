import reducer, { initialState } from "./reducer";

const mockArtworks = 
    [
        {
          artId: 2536430,
          dimensions: {},
          product: {},
          artworkTitle: "Un - M/17",
          artworkRank: 345,
        },
        {
          artId: 2719394,
          dimensions: {},
          product: {},
          artworkTitle: "embodiment",
          artworkRank: 343,
        },
        {
          artId: 2978322,
          dimensions: {},
          product: {},
          artworkTitle: "Entrance",
          artworkRank: 342,
        },
      ]

describe("test reducer", () => {
  describe("FILTER_ART", () => {
    it("should have no filteredArtwork when theres no artworkItems", () => {
      const action = {
        type: "FILTER_ART",
        payload: "th",
      };
      const nextState = reducer(initialState, action);
      expect(nextState).toEqual({
        ...initialState,
        search: "th",
        filteredArtworks: [],
      });
    });
    it("should have filteredArtwork when theres are artworkItems", () => {
      const action = {
        type: "FILTER_ART",
        payload: "e",
      };
      const initialState = {
        artworks: mockArtworks, 
        filteredArtworks: [],
        search: "",
        favorites: [],
      };
      const nextState = reducer(initialState, action);
      expect(nextState).toEqual({
        ...initialState,
        search: "e",
        artworks: mockArtworks, 
        filteredArtworks: [
          {
            artId: 2719394,
            dimensions: {},
            product: {},
            artworkTitle: "embodiment",
            artworkRank: 343,
          },
          {
            artId: 2978322,
            dimensions: {},
            product: {},
            artworkTitle: "Entrance",
            artworkRank: 342,
          },
        ],
      });
    });
  });
  describe("SET_FAVORITE", () => {
    it("should add itemid to favorites array", () => {
      const action = {
        type: "SET_FAVORITE",
        payload: 2719394,
      };
      const initialState = {
        artworks: mockArtworks, 
        filteredArtworks: mockArtworks, 
        favorites: [],
      };
      const nextState = reducer(initialState, action);
      expect(nextState).toEqual({
        ...initialState,
        artworks: mockArtworks, 
        filteredArtworks: mockArtworks, 
        favorites: [2719394]
      });
    });
  });
  describe("UNSET_FAVORITE", () => {
    it("should remove itemid from favorites array", () => {
      const action = {
        type: "UNSET_FAVORITE",
        payload: 2719394,
      };
      const initialState = {
        artworks: mockArtworks, 
        filteredArtworks: mockArtworks, 
        favorites: [2536430, 2719394, 2978322],
      };
      const nextState = reducer(initialState, action);
      expect(nextState).toEqual({
        ...initialState,
        artworks: mockArtworks, 
        filteredArtworks: mockArtworks, 
        favorites: [2536430, 2978322]
      });
    });
  });
});
