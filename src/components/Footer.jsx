import logo from '../assets/logo.png'

export default function Footer({ onContactClick }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-links">
            <a href="#about">Sobre mí</a>
            <a href="#services">Desarrollo</a>
            <a href="#projects">Proyectos</a>
            <button type="button" className="footer-link-button" onClick={onContactClick}>Contacto</button>
          </div>
        </div>
        <div className="footer-cta">
          <p className="footer-cta-tag">// SÍGUENOS</p>
          <h3>Redes</h3>
          <div className="footer-social-column">
            <a href="https://www.instagram.com/fluxxar/" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.98 1.56 4 4 0 0 1 7.98-1.56z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/5492615377338" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-1.86 5.16l-.05.05-2.6 2.6a1 1 0 0 1-1.24.14 11.72 11.72 0 0 1-5.36 1.39A11.93 11.93 0 0 1 3 7.54a11.72 11.72 0 0 1 1.39-5.36 1 1 0 0 1 .14-1.24l2.6-2.6A8.38 8.38 0 0 1 11.5 3c2.06 0 4 0.8 5.46 2.26A7.72 7.72 0 0 1 21 11.5z" />
                <path d="M15.6 14.7c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15s-.77.95-.95 1.14c-.18.2-.36.22-.66.08a8.11 8.11 0 0 1-2.4-1.48 9.13 9.13 0 0 1-1.68-2.08c-.18-.32 0-.49.13-.64.14-.14.32-.36.47-.54.16-.18.2-.3.3-.5.1-.2 0-.37-.05-.5-.1-.28-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.18 0-.38 0-.58 0s-.5.07-.76.37a3.25 3.25 0 0 0-1 2.43c0 .54.27 1.07.76 1.63.5.58 1.15 1.23 1.82 1.63.68.4 1.08.49 1.43.62.35.13.69.08.95.05.3-.03.96-.38 1.1-.75.15-.37.15-.69.1-.75s-.25-.12-.55-.25z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://github.com/Emi8977" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-4.97 1.5-4.97-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.35.65 16 2.48a13.38 13.38 0 0 0-10 0C4.65.65 3.09 1 3.09 1A5.07 5.07 0 0 0 3 4.77 5.44 5.44 0 0 0 1.5 8.84c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src={logo} alt="FLUXXAR" height="32" />
            <span className="footer-copyright">© 2026 Fluxxar Software Studio™. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}