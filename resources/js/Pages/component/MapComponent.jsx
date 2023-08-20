import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';

export default function MapComponent({ latitude,longitude }){
  return (
    <>
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />


        <Marker position={[latitude, longitude]}>
          <Popup>
            <div>
              <p>Latitude: {latitude}</p>
              <p>Longitude: {longitude}</p>
            </div>
          </Popup>
        </Marker>
    </MapContainer>
    </>
  );
};

