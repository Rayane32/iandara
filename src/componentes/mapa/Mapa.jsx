import L from 'leaflet';
import React, { useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
    useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Mapa.module.scss';

const redIcon = new L.Icon({
    iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const Mapa = () => {
    const [markers, setMarkers] = useState([
        {
            id: 1748126287111,
            lat: -8.063127339232421,
            lng: -34.87108826637269,
            text: 'Fiquem atentas! Aqui costuma ser vazio depois das 19h.',
        },
        {
            id: 1,
            lat: -8.0675,
            lng: -34.8786,
            text: 'Oi, cuidado! Esse trecho é meio deserto à noite.',
        },
        {
            id: 1748717562866,
            lat: -8.058804165107656,
            lng: -34.872123599052436,
            text: 'Há um segurança de moto pelas rendondezas!'
        }
    ]);

    const addMarker = (marker) => {
        setMarkers((prev) => [...prev, marker]);
    };

    const updateMarkerText = (id, text) => {
        setMarkers((prev) =>
            prev.map((marker) =>
                marker.id === id ? { ...marker, text } : marker
            )
        );
    };

    const removeMarker = (idToRemove) => {
        setMarkers((prev) =>
            prev.filter((marker) => marker.id !== idToRemove)
        );
    };

    const ClickHandler = () => {
        useMapEvents({
            click: (e) => {
                const newMarker = {
                    id: Date.now(),
                    lat: e.latlng.lat,
                    lng: e.latlng.lng,
                    text: '',
                };
                addMarker(newMarker);
            },
        });
        return null;
    };

    const center = [-8.063242902571908, -34.877901077270515];

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={center}
                zoom={16}
                style={{ height: '100vh', width: '100vw' }}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                <ClickHandler />
                <ZoomControl position='bottomright' />

                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={[marker.lat, marker.lng]}
                        icon={redIcon}
                        eventHandlers={{
                            add: (e) => e.target.openPopup(),
                            click: () => removeMarker(marker.id),
                        }}
                    >
                        <Popup closeOnClick={false} autoClose={false}>
                            <textarea
                                value={marker.text}
                                onChange={(e) =>
                                    updateMarkerText(marker.id, e.target.value)
                                }
                                rows='4'
                                cols='25'
                                placeholder='Digite algo...'
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Mapa;
