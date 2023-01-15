import React from 'react';
import {useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetPokemonByNameQuery } from '../redux/pokemonApi';

const Pokemon = ({ name ,type}) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  const navigate = useNavigate();

  const handleCardClicked = () => {
    navigate(`${name}`, { state: data });
  };

  if (error) {
    return <p>Woopsie, an error occured</p>;
  }
  if (isLoading) {
    return <div>Data is loading</div>;
  } if (data) {
    if (type === 'All' || data.types[0].type.name === type) return (
      <div className="w-56 flex flex-col  items-center h-56 bg-yellow-300 hover:bg-yellow-400 " onClick={handleCardClicked}>
        <>
          <img className="w-40 h-40" src={data.image} alt={name} />
          <h3 className="capitalize font-bold text-xl">{name}</h3>
          <span className="  text-blue-500 hover:cursor-pointer">See Details ></span>

        </>

      </div>
    ); ;

    return null
  }

  //   return (
  //     <div className='w-56 flex flex-col  items-center h-56 bg-yellow-300 hover:bg-yellow-400 ' onClick={handleCardClicked}>
  //       {
  // 				error ? (
  //   <p>Woopsie, an error occured</p>
  // 				) : isLoading ? (
  //  <div>Data is loading</div>
  // 				) : data ? (
  //   <>
  //     <img className="w-40 h-40" src={data.image} alt={name} />
  //     <h3 className='capitalize font-bold text-xl'>{name}</h3>
  // 		{/* <Link className='  text-blue-500' to={`${name}`}  state={data} >See Details ></Link> */}
  // 		<span className='  text-blue-500 hover:cursor-pointer'>See Details ></span>

  //   </>
  // 				) : null
  // 			}

//     </div>
//   );
};

Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;
