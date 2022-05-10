import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Accueil</h1>
      <Countries />
    </div>
  );
};

export default Home;