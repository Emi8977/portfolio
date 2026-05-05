import { useEffect, useRef, useState } from 'react'

export default function About() {
  const cardsRef = useRef([])
  const [showMoreStack, setShowMoreStack] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transitionDelay = `${index * 0.1}s`
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <div className="section-header">
        <p className="section-tag">// QUE ES FLUUXAR?</p>
        <h2 className="section-title">Sobre <span className="accent-word">Mí</span></h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Soy Emiliano Luna, desarrollador de software próximo a recibirme de la Tecnicatura en Desarrollo de Software en la Universidad de Cuyo. <br/>

            Mi foco está en el desarrollo de aplicaciones, y cuento con formación en análisis y procesamiento de datos, lo que me permite abordar problemas técnicos con una mirada más analítica.
            
            <br/>Fluxxar Software Studio, ademas de ser mi marca personal, es la forma en que organizo, desarrollo y presento mis proyectos con criterio propio.
            
            </p>
          <p>
          </p>
        </div>
        <div className="about-steps">
          <div className="step-card" ref={(el) => (cardsRef.current[0] = el)}>
            <span className="step-number">Claridad</span>
            <span className="step-label">Busco que cada proyecto sea simple de entender y usar</span>
          </div>
          <div className="step-card" ref={(el) => (cardsRef.current[1] = el)}>
            <span className="step-number">Funcional</span>
            <span className="step-label">Lo importante es que sirva en el uso real</span>
          </div>
          <div className="step-card" ref={(el) => (cardsRef.current[2] = el)}>
            <span className="step-number">Bien hecho</span>
            <span className="step-label">Cuido cómo está construido desde el inicio</span>
          </div>
        </div>
      </div>
      <div className="about-stack">
        
        <p className="stack-title">Stack <span className="accent-word">Tecnólogico</span></p>
        <div className="stack-container">
          <div className="stack-main-row">
            <div className="stack-group">
              <div className="stack-grid">
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/react" alt="React" />
                  <span>React.js</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/node.js" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/springboot" alt="Spring Boot" />
                  <span>Spring Boot</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/django" alt="Django" />
                  <span>Django</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/flutter" alt="Flutter" />
                  <span>Flutter</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/docker" alt="Docker" />
                  <span>Docker</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
                <div className="stack-item">
                  <img className="stack-icon" src="https://cdn.simpleicons.org/mysql" alt="MySQL" />
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fila separada para el botón expandible */}
          <div className="stack-expand-row">
            <div className="stack-show-more-container">
              <button 
                type="button" 
                className={`stack-show-more-button ${showMoreStack ? 'expanded' : ''}`} 
                onClick={() => setShowMoreStack(!showMoreStack)}
                aria-expanded={showMoreStack}
              >
                <span>Más Tecnologías</span>
                <svg className={`stack-show-more-arrow ${showMoreStack ? 'rotated' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              
              {/* Panel expandible con las demás tecnologías */}
              <div className={`stack-more-panel ${showMoreStack ? 'visible' : ''}`}>
                <div className="stack-group">
                  <div className="stack-grid">
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                      <span>Java</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/python" alt="Python" />
                      <span>Python</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                      <span>Flask</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/firebase" alt="Firebase" />
                      <span>Firebase</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/kubernetes" alt="Kubernetes" />
                      <span>Kubernetes</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/jenkins" alt="Jenkins" />
                      <span>Jenkins</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/githubactions" alt="GitHub Actions" />
                      <span>GitHub Actions</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/helm?color=ffffff" alt="Helm" />
                      <span>Helm</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" alt="Argo CD" />
                      <span>Argo CD</span>
                    </div>
                    <div className="stack-item">
                      <img
                        className="stack-icon"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 34 34'%3E%3Crect width='34' height='34' rx='8' fill='%230D1117'/%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='18' font-weight='700' fill='%23FFFFFF'%3EK%3C/text%3E%3C/svg%3E"
                        alt="Kuztomize"
                      />
                      <span>Kuztomize</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Apache" />
                      <span>Apache</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/databricks" alt="Databricks" />
                      <span>Databricks</span>
                    </div>
                    <div className="stack-item">
                      <img className="stack-icon" src="https://cdn.simpleicons.org/r" alt="R" />
                      <span>R</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}