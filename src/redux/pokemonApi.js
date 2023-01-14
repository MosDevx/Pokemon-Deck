import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	keepUnusedDataFor:60*60*60,
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response) => {
        const {
          name,abilities, base_experience: xp, height, weight, sprites: { front_shiny: image }, types,
        } = response;
        return {
					name,
          abilities,
          xp,
          height,
          weight,
          image,
          types,
        };
      },
    }),

    getListOfPokemon: builder.query({
      query: () => ({
        url: 'pokemon',
        params: {
          limit: 25,
        },
      }),
      transformResponse: (response) => {
        const nameList = response.results.map((pokemon) => pokemon.name);
        return nameList;
      },
    }),
  }),

});

export const { useGetPokemonByNameQuery, useGetListOfPokemonQuery } = pokemonApi;
