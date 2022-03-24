import { createSlice } from "@reduxjs/toolkit";

// step 1: define type for state
interface pokemonItem {
  name: number;
}
interface PokemonData {
    data: pokemonItem[],
    page: number
}
const initialState: PokemonData  = {
  data: [],
  page: 1
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemon: (state, action) => {
      state.data = action.payload.data;
      state.page = action.payload.page
    },
    setPage: (state, action) => {
        state.page = action.payload
    }
  },
});
export const { getPokemon, setPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;