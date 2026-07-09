import React from 'react';
import GradientBlinds from '../GradientBlinds/GradientBlinds';
import BlurText from '../BlurText/BlurText';

function Hero() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <GradientBlinds
        gradientColors={['#FF9FFC', '#5227FF']}
        angle={20}
        noise={0.5}
        blindCount={16}
        blindMinWidth={60}
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.15}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
        color1="#c0cd00"
        color2="#ffff24"
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        fontWeight: 'bold',
        textShadow: '0px 4px 10px rgba(0,0,0,0.5)',
        pointerEvents: 'none'
      }}>
        <BlurText
          text="Lucas Veroneze"
          delay={200}
          animateBy="words"
          direction="top"
        />
      </div>
    </div>
  );
}

export default Hero;
