import { useEffect, useRef, useState } from 'react'

// Imágenes específicas para cada proyecto
const sinergiaImages = [
  'https://iili.io/BQuhpHJ.png',
  'https://iili.io/BQuwYBI.png'
]

const tallerManagerImages = [
  'https://iili.io/BQmYJix.png',
  'https://iili.io/BQmaept.png',
  'https://iili.io/BQm0fEJ.png',
  'https://iili.io/BZ9Yuvp.png',
  'https://iili.io/BZ9aNON.png',
  'https://iili.io/BZ9lW9R.png',
  'https://iili.io/BZ90fUJ.png',
  'https://iili.io/BZ90UqF.png',
  'https://iili.io/BZ917B1.png',
  'https://iili.io/BZ9EH6F.png',
  'https://iili.io/BZ9ESSa.png',
  'https://iili.io/BZ9VYtR.png'
]

const sendMailingImages = [
  'https://iili.io/BQuhpHJ.png',
  'https://iili.io/BQuwYBI.png'
]

const ecommerceImages = [
  'https://iili.io/BQuhpHJ.png',
  'https://iili.io/BQuwYBI.png'
]

const erpImages = [
  'https://iili.io/BQuhpHJ.png',
  'https://iili.io/BQuwYBI.png'
]

const projects = [
  {
    id: 2,
    title: 'Interfaces y plataformas web.',
    description: 'Desarrollo con foco en rendimiento y experiencia.',
    tags: ['Vue.js', 'Firebase', 'Stripe'],
    link: 'https://ecommerce.fluxxar.com',
    /*image: 'https://via.placeholder.com/640x360.png?text=E-Commerce',*/
    badge: { text: 'FLUXXAR <web/>', colorPart: '#ff9f43' },
    apps: [
      {
        id: 'ecommerce-web',
        title: 'Tienda Online',
        description: 'Plataforma de e-commerce completa con carrito, pagos seguros y panel de administración intuitivo.',
        logo: 'https://via.placeholder.com/160?text=E-Commerce+Web',
        images: ecommerceImages,
        url: 'https://ecommerce.fluxxar.com'
      },
      // {
      //   id: 'ecommerce-mobile',
      //   title: 'App Cliente',
      //   description: 'Aplicación móvil para clientes con compras rápidas y seguimiento de pedidos.',
      //   logo: 'https://via.placeholder.com/160?text=E-Commerce+App',
      //   url: 'https://ecommerce.fluxxar.com/app'
      // },
      // {
      //   id: 'ecommerce-vendor',
      //   title: 'Panel Vendedor',
      //   description: 'Herramientas para vendedores gestionar productos, pedidos y analytics.',
      //   logo: 'https://via.placeholder.com/160?text=E-Commerce+Vendor',
      //   url: 'https://ecommerce.fluxxar.com/vendor'
      // }
    ]
  },
  {
    id: 3,
    title: 'Aplicaciones Móviles',
    description: 'Rápidas, conectadas y consistentes.',
    tags: ['React Native', 'Flutter', 'AWS'],
    link: 'https://apps.fluxxar.com',
    /*image: 'https://via.placeholder.com/640x360.png?text=Mobile+Apps',*/
    badge: { text: 'FLUXXAR <mobile/>', colorPart: '#1dd1a1' },
    apps: [
      {
        id: 'sinergiaplus',
        title: 'Sinergia+',
        description: 'Plataforma de Eventos y Grupos deportivos y sociales recreativos.',
        logo: 'https://iili.io/BQ28afV.png',
        images: sinergiaImages,
        url: 'https://apps.fluxxar.com/sinergia'
      },
      {
        id: 'tallermanager',
        title: 'Taller Manager',
        description: 'Controla tus clientes y turnos desde el teléfono con paneles claros.',
        logo: 'https://iili.io/BQmFn5B.png',
        images: tallerManagerImages,
        url: 'https://appetize.io/app/b_txis5qfwmpwwigeqsfvfcllr7e'
      },
      {
        id: 'sendmailing',
        title: 'SendMailing App',
        description: 'Organiza los tiempos, control y seguimiento de envios desde el celular en colaboración con tu equipo.',
        logo: 'https://iili.io/BQ2LAYv.png',
        images: sendMailingImages,
        url: 'https://apps.fluxxar.com/sendmailing'
      }
    ]
  },
  {
    id: 1,
    title: 'Sistemas de gestión.',
    description: 'Organización, datos y procesos en un solo lugar.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://erp.fluxxar.com',
    /*image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=80',*/
    badge: { text: 'FLUXXAR <control/>', colorPart: '#ff4757' },
    apps: [
      {
        id: 'erp-web',
        title: 'Panel Web',
        description: 'Interfaz web completa para gestión de inventario, contabilidad y recursos humanos con dashboards en tiempo real.',
        logo: 'https://via.placeholder.com/160?text=ERP+Web',
        images: erpImages,
        url: 'https://erp.fluxxar.com/web'
      },
      // {
      //   id: 'erp-mobile',
      //   title: 'App Móvil',
      //   description: 'Aplicación móvil para acceso rápido a reportes y gestión básica desde dispositivos móviles.',
      //   logo: 'https://via.placeholder.com/160?text=ERP+Mobile',
      //   url: 'https://erp.fluxxar.com/mobile'
      // },
      // {
      //   id: 'erp-admin',
      //   title: 'Herramienta Admin',
      //   description: 'Herramientas avanzadas para administradores del sistema con configuraciones y monitoreo.',
      //   logo: 'https://via.placeholder.com/160?text=ERP+Admin',
      //   url: 'https://erp.fluxxar.com/admin'
      // }
    ]
  },

]

export default function Projects() {
  const cardsRef = useRef([])
  const [activeApp, setActiveApp] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)

  useEffect(() => {
    if (activeApp) {
      document.body.style.overflow = 'hidden'
      setActiveImage(0)
      setExpandedImage(null)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [activeApp])

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
    <section className="projects" id="projects">
      <div className="section-header">
        <p className="section-tag">// MIS PROYECTOS</p>
        <h2 className="section-title">Pro<span className="accent-word">yectos</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className="project-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div
              className={`project-image ${project.image ? 'has-image' : ''}`}
              style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
            >
              {project.badge && (
                <div className="project-badge">
                  <span className="badge-main">FLUXXAR </span>
                  <span className="badge-color">{project.badge.text.split('FLUXXAR ')[1]}</span>
                </div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.apps && (
                <div className="project-mobile-links">
                  <p className="project-mobile-title">Proyectos disponibles</p>
                  <div className="project-mobile-buttons">
                    {project.apps.map((app) => (
                      <a
                        key={app.id}
                        href="#!"
                        className="project-link"
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveApp(app)
                        }}
                      >
                        {app.title}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </article>
        ))}
      </div>
      {activeApp && (
        <>
          <div className="project-modal-overlay" onClick={() => setActiveApp(null)}>
            <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <p className="section-tag">// APP MÓVIL</p>
                <h2 className="section-title">{activeApp.title}</h2>
              </div>
              <div className="project-modal-body">
                <div className="project-modal-media">
                  <div className="project-logo-card">
                    <img src={activeApp.logo} alt={activeApp.title} className="project-modal-logo" />
                  </div>
                  <div className="project-carousel">
                    <div className="carousel-container">
                      {activeApp.images?.map((image, index) => {
                        const isActive = index === activeImage
                        const isPrev = index === (activeImage - 1 + activeApp.images.length) % activeApp.images.length
                        const isNext = index === (activeImage + 1) % activeApp.images.length

                        return (
                          <div
                            key={index}
                            className={`carousel-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                            onClick={() => {
                              if (!isActive) {
                                setActiveImage(index)
                              } else {
                                setExpandedImage(image)
                              }
                            }}
                          >
                            <div className="carousel-image-wrapper">
                              <img
                                src={image}
                                alt={`${activeApp.title} screenshot ${index + 1}`}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {activeApp.images?.length > 1 && (
                      <div className="carousel-controls">
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setActiveImage((prev) => (prev - 1 + activeApp.images.length) % activeApp.images.length)}
                        >
                          Anterior
                        </button>
                        <div className="carousel-indicators">
                          {activeApp.images.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`carousel-indicator ${index === activeImage ? 'active' : ''}`}
                              onClick={() => setActiveImage(index)}
                              aria-label={`Ver imagen ${index + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setActiveImage((prev) => (prev + 1) % activeApp.images.length)}
                        >
                          Siguiente
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <p className="project-description modal-project-description">{activeApp.description}</p>
              </div>
              <div className="project-modal-actions">
                <button type="button" className="btn btn-cancel" onClick={() => setActiveApp(null)}>
                  Cerrar
                </button>
                <a href={activeApp.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Abrir App desplegada
                </a>
              </div>
            </div>
          </div>
          {expandedImage && (
            <div
              className="lightbox-overlay"
              onClick={() => setExpandedImage(null)}
            >
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setExpandedImage(null)}
                  aria-label="Cerrar imagen"
                >
                  ✕
                </button>
                {activeApp?.images?.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="lightbox-nav lightbox-prev"
                      onClick={(e) => {
                        e.stopPropagation()
                        const currentIndex = activeApp.images.indexOf(expandedImage)
                        const prevIndex = (currentIndex - 1 + activeApp.images.length) % activeApp.images.length
                        setExpandedImage(activeApp.images[prevIndex])
                        setActiveImage(prevIndex)
                      }}
                      aria-label="Imagen anterior"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="lightbox-nav lightbox-next"
                      onClick={(e) => {
                        e.stopPropagation()
                        const currentIndex = activeApp.images.indexOf(expandedImage)
                        const nextIndex = (currentIndex + 1) % activeApp.images.length
                        setExpandedImage(activeApp.images[nextIndex])
                        setActiveImage(nextIndex)
                      }}
                      aria-label="Imagen siguiente"
                    >
                      ›
                    </button>
                  </>
                )}
                <img src={expandedImage} alt="Vista ampliada" className="lightbox-image" />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  )
}