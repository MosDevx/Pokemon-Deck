import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../redux/pokemonApi';

const Pokemon = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  return (
    <div>
      {
				error ? (
  <p>Woopsie, an error occured</p>
				) : isLoading ? (
  <p>Loading Hold your horses</p>
				) : data ? (
  <>
    <img className="w-48 h-48" src={data.image} alt={name} />
    <h3>{name}</h3>
		<Link to={`${name}`}   >See Details</Link>

  </>
				) : null
			}

    </div>
  );
};

export default Pokemon;
