import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">LucasKND</span>
            <p className="footer__tagline">Desenvolvedor Front-end & Concurseiro Militar</p>
          </div>

          <div className="footer__links">
            <a href="https://github.com/LucasKND" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
            <a href="https://www.linkedin.com/in/lucas-veroneze/" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
            <a href="https://wa.me/552499836997" target="_blank" rel="noreferrer" className="footer__link">WhatsApp</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Lucas Veroneze. Todos os direitos reservados.
          </p>
          <a href="#top" onClick={scrollToTop} className="footer__back-to-top">
            Voltar ao topo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
