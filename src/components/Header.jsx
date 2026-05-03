import { useState } from 'react'
import logo from '../assets/logo1.png'

export default function Header({ scrolled, onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  const handleContactClick = () => {
    closeMenu()
    onContactClick()
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        <img src={logo} alt="FLUXXAR" height="48" />
        <span className="logo-text">
          <span className="logo-f">F</span>
          <span className="logo-ss">SS&lt;/&gt;</span>
        </span>
      </a>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>Sobre mí</a>
        <a href="#services" onClick={closeMenu}>Desarrollo</a>
        <a href="#projects" onClick={closeMenu}>Proyectos</a>
        <button type="button" className="nav-link" onClick={handleContactClick}>Contacto</button>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}