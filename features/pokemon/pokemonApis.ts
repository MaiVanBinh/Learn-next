// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonsResult } from ".";

// create Api
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonsResult, number>({
      query: (page) => {
        const offset = 20 * (page - 1);
        return `pokemon?offset=${offset}&limit=20`;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery } = pokemonApi;
