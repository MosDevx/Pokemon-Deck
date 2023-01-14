import store from '../redux/store';

const initialState = {
  pokemonApi: {
    config: {
      focused: true,
      keepUnusedDataFor: 216000,
      middlewareRegistered: false,
      online: true,
      reducerPath: 'pokemonApi',
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
      refetchOnReconnect: false,
    },
    mutations: {},
    provided: {},
    queries: {},
    subscriptions: {},
  },
};

describe('Test reducer function', () => {
  it('Test', () => {
    expect(store.getState()).toEqual(initialState);
  });
});
