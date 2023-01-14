import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { jokesApi } from './jokesApi';
import { pokemonApi } from './pokemonApi';

const store = configureStore({
  reducer: {
    
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;
