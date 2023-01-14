import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../redux/pokemonApi';
import PropTypes from 'prop-types'


const Pokemon = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
	const navigate = useNavigate()

	const handleCardClicked = ()=>{
		navigate(`${name}`, {state: data})
	}
  return (
    <div className='w-56 flex flex-col  items-center h-56 bg-yellow-300 hover:bg-yellow-400 ' onClick={handleCardClicked}>
      {
				error ? (
  <p>Woopsie, an error occured</p>
				) : isLoading ? (
 <div>Data is loading</div>
				) : data ? (
  <>
    <img className="w-40 h-40" src={data.image} alt={name} />
    <h3 className='capitalize font-bold text-xl'>{name}</h3>
		{/* <Link className='  text-blue-500' to={`${name}`}  state={data} >See Details ></Link> */}
		<span className='  text-blue-500 hover:cursor-pointer'>See Details ></span>
	
  </>
				) : null
			}

    </div>
  );
};


Pokemon.propTypes ={
	name:PropTypes.string
}

export default Pokemon;
