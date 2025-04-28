import L from 'leaflet';
import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
    const mapRef = useRef('mapa');
    const latitude = -8.067574341736956;
    const longitude = -34.87867950272808;
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
      <div className='map-container'>
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "90vw", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
      </div>
    );
  };
  
export default Mapa;