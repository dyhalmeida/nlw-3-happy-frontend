import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import markerSVG from '../assets/marker.svg';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

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
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
