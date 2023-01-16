import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com/jokes/',
  }),
  endpoints: (builder) => ({
    getJokeByType: builder.query({
      query: (type) => `${type}/random`,
    }),
    getRandomJoke: builder.query({
      query: () => 'random',
    }),
  }),
});

export const { useGetJokeByTypeQuery, useGetRandomJokeQuery } = jokesApi;
