// src/components/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    L.mapquest.key = 'PqXRxKdYj92OOK1jLcLTHITMLM9vOz0I';

    const map = L.mapquest.map('map', {
      center: [37.7749, -122.4194], // Set the initial center of the map
      layers: L.mapquest.tileLayer('map'),
      zoom: 12,
    });

    // Add a marker to the map
    L.marker([37.7749, -122.4194], {
      icon: L.mapquest.icons.marker(),
      draggable: false,
    }).bindPopup('San Francisco, CA').addTo(map);
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default Map;
