import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response, meta, arg) => {
        console.log(response);
        const {
          abilities, base_experience: xp, height, weight, sprites: { front_shiny: image }, types,
        } = response;
        return {
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
    }),
  }),

});

export const { useGetPokemonByNameQuery, useGetListOfPokemonQuery } = pokemonApi;
