import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { jokesApi } from './jokesApi';
import { pokemonApi } from './pokemonApi';

const store = configureStore({
  reducer: {
    [jokesApi.reducerPath]: jokesApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jokesApi.middleware)
    .concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;
