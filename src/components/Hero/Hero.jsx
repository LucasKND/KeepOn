import React from 'react';
import GradientBlinds from '../GradientBlinds/GradientBlinds';
import BlurText from '../BlurText/BlurText';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__background">
        <GradientBlinds
          gradientColors={['#7b2cbf', '#4cc9f0']}
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
        />
      </div>

      <div className="hero__content">
        
        <h1 className="hero__title">
          <BlurText
            text="Lucas Veroneze."
            delay={50}
            animateBy="letters"
            direction="top"
          />
        </h1>

        <h2 className="hero__role">
          Desenvolvedor Front-end & Concurseiro Militar
        </h2>

        <p className="hero__subtitle">
          Disciplina, código e foco em resultados. Construo interfaces modernas em React e aplico táticas avançadas de rastreio e tráfego para criar projetos que realmente convertem.
        </p>

        <div className="hero__actions">
          <a href="#projetos" className="hero__btn hero__btn--primary">Explorar Projetos</a>
          <a href="https://wa.me/552499836997" target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary">Falar no WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
