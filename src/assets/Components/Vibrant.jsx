import React, { useEffect,useState } from 'react'
import * as VibrantAPI from 'node-vibrant'

const Vibrant = () => {
let url ="https://cdn.xxl.thumbs.canstockphoto.com/yellow-muscle-car-yellow-muscle-car-against-dark-cloudy-background-stock-photos_csp2503213.jpg"

	const  getPallete = async (url)=>{
		const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url + '?not-from-cache-please';
	let v = new VibrantAPI(img,{})
	let pallette = v.getPalette()

	// let pallette = await VibrantAPI.from(url).getPalette()
	return pallette
	}

	

	const [pallete, setPallete] = useState()

	useEffect(() => {
		let vibrant =getPallete(url)
		vibrant.then(pallete=> setPallete(pallete))

	}, [])

	console.log('palleten',pallete)
	let vibrant = pallete?.Vibrant.getHex()
	console.log('Vibrant',vibrant)
	
	return (
		<div className='p-2 w-64 h-fit flex items-center border-2' style={{backgroundColor:vibrant}}>
			<img className='m-auto' src={url} alt="" />
		</div>
	)
}

export default Vibrant