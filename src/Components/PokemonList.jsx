import React, { useState } from 'react'
import { useGetListOfPokemonQuery } from '../redux/pokemonApi'
import Pokemon from './Pokemon'



const PokemonList = () => {
	const {data,error,isLoading} =useGetListOfPokemonQuery()
	const [type, setType] = useState("all")

	const changeType=(type)=>{
		setType(type)
	}

	return (
		<div>
			{/* <div className='flex'>
					<button onClick={()=>changeType('all')}>All</button>
					<button onClick={()=>changeType('water')}>Water</button>
					<button onClick={()=>changeType('fire')}>Fire</button>

			</div> */}
		
		<div className='m-auto p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center  bg-slate-100 grid gap-6 container border-2 w-screen'>
			
			{isLoading ? (<div>Data is Loading</div>)
			: data ? (
				
				data.map((name)=>{
					return <Pokemon key={name} name={name}></Pokemon>
				})
			)	: null
		}


		</div>

		</div>
	)
}

export default PokemonList