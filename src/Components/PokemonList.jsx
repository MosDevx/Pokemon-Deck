import React from 'react'
import { useGetListOfPokemonQuery } from '../redux/pokemonApi'
import Pokemon from './Pokemon'


const PokemonList = () => {
	const {data,error,isLoading} =useGetListOfPokemonQuery()

	return (
		<div>
			
			{isLoading ? (<div> Data is Loading</div>)
			: data ? (

				data.map((name)=>{
					return <Pokemon key={name} name={name}></Pokemon>
				})
			)	: null
		}


		</div>
	)
}

export default PokemonList