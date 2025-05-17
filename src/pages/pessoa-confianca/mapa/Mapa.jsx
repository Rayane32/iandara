import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Mapa.module.scss';

// Ícone vermelho personalizado de repositório confiável
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const ClickHandler = ({ onClick }) => {
    useMapEvents({
        click(e) {
            onClick(e.latlng);
            console.log(e.latlng);
        }
    });
    return null;
};

const Mapa = () => {
    const latitudeInicial = -8.063149485863166;
    const longitudeInicial = -34.87122950672843;

    const [markerPosition, setMarkerPosition] = useState({
        lat: latitudeInicial,
        lng: longitudeInicial,
    });

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={[latitudeInicial, longitudeInicial]}
                zoom={14}
                style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ClickHandler onClick={setMarkerPosition} />

                {markerPosition && (
                    <Marker
                        position={[markerPosition.lat, markerPosition.lng]}
                        icon={redIcon}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default Mapa;
