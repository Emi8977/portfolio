import { useEffect, useState } from 'react'
import logo from '../assets/logo1.png'

export default function Header({ expanded, onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!expanded) {
      setMenuOpen(false)
    }
  }, [expanded])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  const handleContactClick = () => {
    closeMenu()
    onContactClick()
  }

  return (
    <header className={`header ${expanded ? 'expanded' : 'hero-visible'}`}>
      <a href="#" className="logo" aria-label="Inicio">
        <span className="logo-icon">
          <img src={logo} alt="Axolote logo" height="32" />
        </span>
        <span className="logo-text" aria-hidden={!expanded}>
          <span className="logo-f">Emiliano Luna  </span>
          <span className="logo-ss">&nbsp;·&nbsp;Dev</span>
        </span>
      </a>
      <nav className={`nav ${expanded ? 'visible' : ''} ${menuOpen ? 'active' : ''}`} aria-hidden={!expanded}>
        <a href="#about" onClick={closeMenu}>Sobre mí</a>
        <a href="#services" onClick={closeMenu}>Desarrollo</a>
        <a href="#projects" onClick={closeMenu}>Proyectos</a>
        <button type="button" className="nav-link" onClick={handleContactClick}>Contacto</button>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu" aria-expanded={menuOpen} hidden={!expanded}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}