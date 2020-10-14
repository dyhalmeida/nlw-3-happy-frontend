import leaftlet from 'leaflet';
import markerSVG from '../assets/marker.svg';

const mapMarker = leaftlet.icon({
  iconUrl: markerSVG,

  iconSize: [58, 68],
  iconAnchor: [29, 68], // Posição x,y do icon que representa o ponto
  popupAnchor: [170, 2],
});

export default mapMarker;
