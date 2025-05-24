import L from 'leaflet';
import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Mapa.module.scss';

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const AddMarkerOnClick = ({ addMarker }) => {
    useMapEvents({
        click(e) {
            const newMarker = {
                id: Date.now(),
                lat: e.latlng.lat,
                lng: e.latlng.lng,
                text: ''
            };
            addMarker(newMarker);
        }
    });
    return null;
};

const Mapa = () => {
    const [markers, setMarkers] = useState([
        { id: 1, lat: -8.0675, lng: -34.8786, text: 'Ponto de interesse 1' },
        { id: 2, lat: -8.05, lng: -34.9, text: 'Ponto de interesse 2' }
    ]);

    const popupRefs = useRef({});

    useEffect(() => {
        Object.values(popupRefs.current).forEach((popup) => {
            if (popup && popup._source) {
                popup._source.openPopup();
            }
        });
    }, [markers]);

    const addMarker = (marker) => {
        setMarkers((prev) => [...prev, marker]);
    };

    const removeMarker = (idToRemove) => {
        setMarkers((prev) => prev.filter((marker) => marker.id !== idToRemove));
    };

    const latitude = -8.067574341736956;
    const longitude = -34.87867950272808;

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                style={{ height: '100vh', width: '100vw' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <AddMarkerOnClick addMarker={addMarker} />

                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={[marker.lat, marker.lng]}
                        eventHandlers={{
                            click: () => removeMarker(marker.id)
                        }}
                        icon={redIcon}
                    >
                        <Popup
                            ref={(ref) => {
                                if (ref) popupRefs.current[marker.id] = ref;
                            }}
                        >
                            <textarea
                                defaultValue={marker.text}
                                rows="4"
                                cols="25"
                                placeholder="Digite algo..."
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Mapa;
