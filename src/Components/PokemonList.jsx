import React from 'react'
import { useGetListOfPokemonQuery } from '../redux/pokemonApi'
import Pokemon from './Pokemon'


const PokemonList = () => {
	const {data,error,isLoading} =useGetListOfPokemonQuery()

	return (

		<div className='m-auto p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center  bg-red-300 grid gap-6 container border-2 w-screen'>
			
			{isLoading ? (<div>Data is Loading</div>)
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