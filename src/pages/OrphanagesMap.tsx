import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import markerSVG from '../assets/marker.svg';
import mapMarker from '../utils/mapMarker';

import '../styles/pages/orphanagesMap.css';
import api from '../services/api';

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(({ data }) => {
      setOrphanages(data);
    });
  }, []);

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

      {orphanages.map((orphanage) => (
        <Map
          center={[-12.5443141, -38.2954662]}
          zoom={14.75}
          style={{ width: '100%', height: '100%' }}
          key={orphanage.id}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapMarker}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#ffffff" />
              </Link>
            </Popup>
          </Marker>
        </Map>
      ))}

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
