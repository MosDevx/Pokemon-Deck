import { useEffect, useState } from "react";


function LocationTest(){

let [location, setLocation] = useState({})

useEffect(()=>{
	navigator.geolocation.getCurrentPosition((position)=>{
		setLocation(position)
	})
},[])



return(
		<div>
			<h1>Location Test</h1>
			<p>Latitude: {location.coords?.latitude}</p>
			<p>Longitude: {location.coords?.longitude}</p>
		</div>
	)

}

export default LocationTest;