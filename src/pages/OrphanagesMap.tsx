import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';
import markerSVG from '../assets/marker.svg';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

const mapMarker = leaflet.icon({
  iconUrl: markerSVG,
  iconSize: [58, 68],
  iconAnchor: [29, 68], // Posição x,y do icon que representa o ponto
  popupAnchor: [170, 2],
});

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerSVG} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita.</p>
        </header>
        <footer>
          <strong>Mata de São João</strong>
          <strong>Bahia</strong>
        </footer>
      </aside>

      <Map
        center={[-12.5443141, -38.2954662]}
        zoom={14.75}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-12.5443141, -38.2954662]} icon={mapMarker}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="">
              <FiArrowRight size={20} color="#ffffff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
