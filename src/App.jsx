import React from 'react';
import Hero from './components/Hero/Hero';
import MagicBento from './components/MagicBento/MagicBento';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <MagicBento 
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt
        enableMagnetism
        clickEffect
        spotlightRadius={330}
        particleCount={12}
        glowColor="82, 39, 255"
        disableAnimations={false}
      />
    </>
  );
}

export default App;
