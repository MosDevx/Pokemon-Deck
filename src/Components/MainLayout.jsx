import React from 'react'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
	return (
	<>
		<h2 className='text-3xl text-center'>Your Pokemon Deck</h2>
		<Outlet/>
	</>
	)
}

export default MainLayout