import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PokemonDetails = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
	console.log(data.types)

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='container bg-red-300 h-screen m-auto'>
      <button onClick={handleGoBackClick} className="font-bold text-2xl border-1 p-1">Go Back</button>
    
		  <div className='border-2 w-80 h-max flex flex-col items-center m-auto mt-10 bg-yellow-300'>
        <img className="w-40 h-40" src={data.image} alt={data.name} />
        <h3 className="capitalize font-bold text-xl">{data.name}</h3>
				
					<div className='flex w-full justify-between px-8'>
						<p className='capitalize font-bold'>XP :  <span className='font-normal'>{data.xp}</span></p>
						<p className='capitalize font-bold'>Height :  <span className='font-normal'>{data.height}</span></p>
						<p className='capitalize font-bold'>Weight :  <span className='font-normal'>{data.weight}</span></p>
					</div>
				<div className='flex w-full justify-around mt-4 text-center'>
					
					<div>
						<p className='capitalize font-bold'>Abilities:</p>
						{data.abilities.map((ability)=><span className='capitalize' key={ability.ability.name}>{ability.ability.name}<br/></span>)}
					</div>
						
						<div>
							<p className='capitalize font-bold'>Types:</p>
							{data.types.map((type)=><span className='capitalize' key={type.type.name}>{type.type.name}<br/></span>)}
						</div>
					
				</div>

      </div>
    </div>
  );
};

export default PokemonDetails;
