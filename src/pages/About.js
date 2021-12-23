import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>A propos</h1>
      <br />
      <p>Application réalisée uniquement en React 🤗</p>
    </div>
  );
};

export default About;
