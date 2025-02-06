import React from 'react';
import './Foother.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>FINCSWorld</h2>
          <p>Votre plateforme de streaming pour les meilleurs dessins animés.</p>
        </div>

        <div className="footer-links">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Confidentialité</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CartoonWorld. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
