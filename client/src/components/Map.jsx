import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon for Leaflet markers
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

// Component to fetch and display marker
const GeoCoderMarker = ({ address, onPositionChange }) => {
  const map = useMap();
  const [position, setPosition] = useState([11.986704390376957, 75.38171598632589]);
  const [error, setError] = useState(null);



  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{error || 'Marker'}</Popup>
    </Marker>
  );
};

// Main Map component
const Map = ({ address = '', city = '', country = '' }) => {
  const [markerPosition, setMarkerPosition] = useState([11.986704390376957, 75.38171598632589]);

  return (
    <MapContainer
      center={markerPosition}
      zoom={15} // Adjust zoom level to fit the marker
      scrollWheelZoom={false}
      style={{
        height: '60vh',
        width: '95%',
        marginTop: '3rem',
        zIndex: 0
      }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <GeoCoderMarker 
        address={`${address} ${city} ${country}`} 
        onPositionChange={setMarkerPosition} 
      />
    </MapContainer>
  );
};

export default Map;
