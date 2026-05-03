import { useEffect, useRef } from 'react'

export default function About() {
  const cardsRef = useRef([])

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
        <h2 className="section-title">Sobre <span className="accent-word">FLUXXAR</span></h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Soy Emi, desarrollador de software. <br/>

            Fluxxar Software Studio nace como mi espacio para reunir y dar forma a los proyectos en los que trabajo. Más que una marca, es una forma de organizar lo que hago y construir con criterio propio.

            <br/>Trabajo de manera independiente desarrollando aplicaciones y productos digitales.

            <br/>Mi objetivo es crear software que realmente se pueda usar, sin complicaciones innecesarias y con un enfoque práctico en cada proyecto.
          </p>
          <p>
          </p>
        </div>
        <div className="about-steps">
          <div className="step-card" ref={(el) => (cardsRef.current[0] = el)}>
            <span className="step-number">Claro</span>
            <span className="step-label">Busco que cada proyecto sea simple de entender y de usar</span>
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
    </section>
  )
}