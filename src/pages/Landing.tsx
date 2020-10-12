import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';
import logoSVG from '../assets/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

const Landing = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoSVG} alt="Happy" />
      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Mata de São João</strong>
        <strong>Bahia</strong>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
      </Link>
    </div>
  </div>
);

export default Landing;
