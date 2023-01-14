import React, { useEffect, useState } from 'react';
import * as VibrantAPI from 'node-vibrant';
import { Outlet } from 'react-router-dom';

const Vibrant = () => {
  const url = 'https://cdn.xxl.thumbs.canstockphoto.com/yellow-muscle-car-yellow-muscle-car-against-dark-cloudy-background-stock-photos_csp2503213.jpg';

  const getPallete = async (url) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = `${url}?not-from-cache-please`;
    const v = new VibrantAPI(img, {});
    const pallette = v.getPalette();

    // let pallette = await VibrantAPI.from(url).getPalette()
    return pallette;
  };

  const [pallete, setPallete] = useState();
	const [counter, setCounter] = useState(0)

  useEffect(() => {
    const vibrant = getPallete(url);
    vibrant.then((pallete) => setPallete(pallete));
		setCounter((counter)=>counter+1)
  }, []);

  console.log('palleten', pallete);
  const vibrant = pallete?.Vibrant.getHex();
  console.log('Vibrant', vibrant);

  return (
    <div className="container flex flex-col">

      <div className="p-2 w-64 h-fit flex items-center border-2" style={{ backgroundColor: vibrant }}>
        <img className="m-auto" src={url} alt="" />
				<p>Counter {counter}</p>
      </div>
			<div>
				<Outlet/>
			</div>
    </div>
  );
};

export default Vibrant;
