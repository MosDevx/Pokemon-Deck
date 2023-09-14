import React, { useState } from 'react';

function LocationTest() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLatitude = position.coords.latitude;
          const newLongitude = position.coords.longitude;
          setLatitude(newLatitude);
          setLongitude(newLongitude);
          setError(null);
        },
        (error) => {
          setError(error.message);
          if (error.code === error.PERMISSION_DENIED) {
            // Permission denied, show an alert
            alert("Location access denied. Please enable location services in your browser settings.");
          }
          if (error.code === error.POSITION_UNAVAILABLE) {
            // Location services are turned off, show an alert
            alert("Location services are turned off. Please enable location services in your device settings.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  };

  return (
    <div>
      <h1>Location App</h1>
      <p>Click the button to get your current location:</p>
      <button onClick={handleGetLocation}>Get Location</button>

      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default LocationTest;
