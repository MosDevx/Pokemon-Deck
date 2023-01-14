
import React from 'react'
import { useGetPokemonByNameQuery } from '../redux/pokemonApi'

const Pokemon = () => {
	const {data,error,isLoading} = useGetPokemonByNameQuery('bulbasaur')
	return (
		<div>
			{
				error ? (
					<p>Woopsie, an error occured</p>
				) : isLoading ? (
					<p>Loading Hold your horses</p>
				) : data ?(
					<>
						<h3>{data.name}</h3>
						<img src={data.image} alt={data.name} />

					</>
				) : null
			}

		</div>
	)
}

export default Pokemon