import React from 'react';
import { useGetPokemonByNameQuery, useGetListOfPokemonQuery } from '../redux/pokemonApi';

const Pokemon = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  const { data,error,isLoading } = useGetListOfPokemonQuery();
	console.log(data?.results[0].name)
  return (
    <div>
      {/* {
				error ? (
  <p>Woopsie, an error occured</p>
				) : isLoading ? (
  <p>Loading Hold your horses</p>
				) : data ? (
  <>
    <h3>{data.name}</h3>
    <img className="w-48 h-48" src={data.image} alt={data.name} />

  </>
				) : null
			} */}

      <div>
        List of pokemon
		
        {data ? (data.results.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)) : ("Nothing")}
      </div>
    </div>
  );
};

export default Pokemon;
