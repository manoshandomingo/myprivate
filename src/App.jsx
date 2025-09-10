import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Hi, I am Manoshan Domingo"
        subtitle="From adventures with my wife to the things I love to create — welcome
          to my space."
      />
    </div>
  );
};

export default App;
