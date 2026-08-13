import { useEffect, useRef } from 'react'
import logoaxsistemagestion from '../assets/logoaxsistemagestion.png'
import logoaxsoluciondigital from '../assets/logoaxsoluciondigital.png'
import logoaxsistemamedida from '../assets/logoaxsistemamedida.png'

const services = [
  {
    symbolBefore: '{',
    icon: logoaxsoluciondigital,
    symbolAfter: '}',
    title: 'Sitios web',
    description: 'Desarrollo landing pages, webs completas y productos digitales pensados para ser claros, rápidos y fáciles de usar.'
  },
  {
    symbolBefore: '[',
    icon: logoaxsistemamedida,
    symbolAfter: ']',
    title: 'Aplicaciones',
    description: 'Desarrollo aplicaciones, desde una idea inicial hasta un producto funcional.'
  },
  {
    symbolBefore: '<',
    icon: logoaxsistemagestion,
    symbolAfter: '>',
    title: 'Sistemas',
    description: 'Construyo herramientas para organizar procesos, datos y operaciones de forma simple y clara.'
  }
]

export default function Services() {
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
    <section className="services" id="services">
      <div className="section-header">
        <p className="section-tag">// functions() </p>
        <h2 className="section-title">Qué <span className="accent-word">Desarrollo</span></h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" ref={(el) => (cardsRef.current[index] = el)}>
            <div className="service-icon">
              <span className="symbol">{service.symbolBefore}</span>
              <img src={service.icon} alt={service.title} />
              <span className="symbol">{service.symbolAfter}</span>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}