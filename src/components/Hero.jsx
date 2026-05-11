import logo from '../assets/logo.png'
import logobanner from '../assets/logobanner.png'

export default function Hero({ onContactClick }) {
  return (
    <section className="hero">
      <div className="floating-element">&lt;/&gt;</div>
      <div className="floating-element">{ }</div>
      <div className="floating-element">[ ]</div>
      <div className="floating-element">&lt;*&gt;</div>
      
      <div className="hero-content">
        <div className="hero-banner">
          <img src={logo} alt="Fluxxar icon" className="hero-banner-icon" />
          <img src={logobanner} alt="FLUXXAR SOFTWARE STUDIO" className="hero-banner-image" />
        </div>
        <p className="hero-tag">// LA IDEA EN PRODUCCIÓN</p>
        {/*
        <h1 className="hero-title">
          <span className="hero-brand">FLUXXAR</span><br />
          <span className="highlight">SOFTWARE </span><br/>
          <span className="accent-word">STUDIO</span> <span className="code-mark">&lt;/&gt;</span>
        </h1>
        */}
        <h1 className="section-title">EMILIANO <span className="accent-word">LUNA</span></h1>
        
        <h3 className="section-title">FULL STACK <span className="accent-word">DEVELOPER</span></h3>
        {/*
        <p className="hero-subtitle">
          Desarrollo aplicaciones claras y bien construidas
        </p>
        */}
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <button type="button" className="btn btn-contact" onClick={onContactClick}>Contactar</button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}