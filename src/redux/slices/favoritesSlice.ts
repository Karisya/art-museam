import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Art {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
}

interface FavoritesState {
  items: Art[];
}

const initialState: FavoritesState = {
  items: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    handleFavorite: (state, action: PayloadAction<Art>) => {
      const art = action.payload;
      const exists = state.items.some(item => item.id === art.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== art.id);
      } else {
        state.items.push(art);
      }
    }
  }
});

export const isFavorite = (state: { favorites: FavoritesState }, id: number): boolean => {
  return state.favorites.items.some(item => item.id === id);
}

export const { handleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
