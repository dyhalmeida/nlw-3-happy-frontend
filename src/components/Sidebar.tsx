import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import markerSVG from '../assets/marker.svg';
import { useHistory } from 'react-router-dom';

import '../styles/components/sidebar.css';

const SideBar = () => {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <img src={markerSVG} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
};

export default SideBar;
