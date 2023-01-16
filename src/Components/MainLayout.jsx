import React from 'react'
import { Outlet } from 'react-router-dom'
import {FiMic,FiSettings} from 'react-icons/fi'


const MainLayout = () => {
	return (
	<>
	<div className="flex justify-between items-center w-screen">
		<h2 className='text-3xl m-auto text-center  font-extrabold'>Pokemon Deck</h2> 
		
		<div className='flex  w-20 justify-around'>
			< FiMic className="text-2xl"/>
			< FiSettings className="text-2xl"/>
		</div>

		</div>	
		<Outlet/>
	</>
	)
}

export default MainLayout