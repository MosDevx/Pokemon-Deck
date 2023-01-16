import React, { useState } from 'react';
import { useGetListOfPokemonQuery } from '../redux/pokemonApi';
import Pokemon from './Pokemon';

const PokemonList = () => {
  const { data, error, isLoading } = useGetListOfPokemonQuery();
  const [type, setType] = useState('All');

  const changeType = (type) => {
    setType(type);
  };

  return (
    <div>
      <div className="flex flex-wrap w-4/6 m-auto justify-around h-32 sm:h-20 md:h-10 my-2">
        <button className="border-2 h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white " onClick={() => changeType('All')}>All</button>
        <button  className="border-2  h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "  onClick={() => changeType('water')}>Water</button>
        <button className="border-2 h-10  px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "   onClick={() => changeType('fire')}>Fire</button>
        <button  className="border-2 h-10  px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "  onClick={() => changeType('normal')}>Normal</button>
        <button  className="border-2  h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "  onClick={() => changeType('electric')}>Electric</button>
        <button  className="border-2  h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "  onClick={() => changeType('grass')}>Grass</button>
        <button  className="border-2 h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "  onClick={() => changeType('bug')}>Bug</button>
        <button className="border-2 h-10 px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "   onClick={() => changeType('poison')}>Poison</button>
        <button className="border-2 h-10  px-2 py-0 rounded-md font-semibold border-slate-300 hover:bg-sky-400 hover:text-white "   onClick={() => changeType('ground')}>Ground</button>

      </div>

      <div className="m-auto p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center  bg-slate-100 grid  container border-2 w-max">

        {isLoading ? (<div>Data is Loading</div>)
			  : data ? (

			    data.map((name) => <Pokemon key={name} name={name} type={type} />)
			  )	: null}

      </div>

    </div>
  );
};

export default PokemonList;
