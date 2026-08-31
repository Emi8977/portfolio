import { useEffect, useRef, useState } from 'react'

// Imágenes específicas para cada proyecto
const sinergiaImages = [
  
  'https://iili.io/CHiBEg9.jpg',
  'https://iili.io/CHiC1QR.jpg',
  'https://iili.io/CHiCtCQ.jpg',
  'https://iili.io/CHin7P2.jpg',
  'https://iili.io/CHinNcP.jpg',
  'https://iili.io/CHiofDb.jpg',
  'https://iili.io/CHiowXf.jpg',
  'https://iili.io/CHixX3B.jpg',
  'https://iili.io/CHiz5Mv.jpg',
  'https://iili.io/CHiI3JI.jpg',
  'https://iili.io/CHiIaWb.jpg'
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
  'https://iili.io/CCtsHCl.jpg',
  'https://iili.io/CCts1Gp.jpg',
  'https://iili.io/CCtsLox.jpg',
  'https://iili.io/CCtLGxj.jpg',
  'https://iili.io/CCtZ799.jpg',
  'https://iili.io/CCttfKQ.jpg',
  'https://iili.io/CCttjg2.jpg',
  'https://iili.io/CCtDd7I.jpg',
  'https://iili.io/CCtm6g4.jpg',
  'https://iili.io/CCD9O5Q.jpg',
  'https://iili.io/CCDHRTB.jpg',
  'https://iili.io/CCDJUla.jpg'
  
]

const ecommerceShoppilyImages = [
  'https://iili.io/BtvkZcN.png',
  'https://iili.io/BtvvYR1.png',
  'https://iili.io/BtvvMfR.png',
  'https://iili.io/BtvvSf4.png',
  'https://iili.io/Btvv657.png',
  'https://iili.io/BtvPgAQ.png',
  'https://iili.io/BtviweR.png'
  
]

const erpImages = [
  'https://iili.io/CsWCSYQ.png',
  'https://iili.io/CsWzLDN.png',
  'https://iili.io/CsWAAzl.png'
  
]

const erpAgentImages = [
  'https://iili.io/Bm4k8Al.png',
  'https://iili.io/Bm4k8Al.png',
  'https://iili.io/Bm4k8Al.png'
  
]

const saliditappImages = [
  'https://iili.io/Ckj4hH7.png',
  'https://iili.io/Ckj6Fsf.png'
  
]

const projects = [
  
  {
    id: 1,
    title: 'Interfaces y plataformas web.',
    description: 'Desarrollo con foco en rendimiento y experiencia.',
    tags: ['React.js', 'Node.js', 'MongoDB Atlas'],
    link: 'https://ecommerce.fluxxar.com',
    /*image: 'https://via.placeholder.com/640x360.png?text=E-Commerce',*/
    badge: { text: 'FLUXXAR <web/>', colorPart: '#ff9f43' },
    apps: [
      {
        id: 'ecommerce-shoppily',
        title: 'Shoppily e-commerce',
        description: 'Shoppily es una plantilla base de e-commerce diseñada para negocios que prefieren cerrar sus ventas de forma humana. El comprador navega el catálogo, arma su carrito y completa un formulario con sus datos y domicilio. El vendedor recibe la orden estructurada y coordina el pago directamente — por WhatsApp, email o teléfono.\n\nDesarrollé el proyecto de forma independiente como solución reutilizable, pensada para adaptarse a distintos negocios sin partir desde cero. La plantilla fue la base para un e-commerce de un emprendimiento local de ropa deportiva, cubriendo sus necesidades funcionales con pocas modificaciones adicionales y algunos cambios en el diseño visual. Stack: React.js, Node.js y MongoDB Atlas.\n\nEl desafío fue diseñar un checkout sin pasarela de pago que no se sienta incompleto. La clave estuvo en el diseño y la experiencia del carrito — fluido y simple — y en un formulario que consolida toda la información de la venta en un solo lugar, sin fricciones para el comprador.\n\n_nota: La versión desplegada es un entorno de demostración — la plataforma de producción se encuentra en uso activo.',
        logo: 'https://iili.io/BtvOuKN.png',
        images: ecommerceShoppilyImages,
        url: 'https://ecommerce-shoppily.onrender.com'
      },
      {
        id: 'saliditapp-Calendario',
        title: 'Saliditapp - Calendario',
        description: 'Saliditapp es una aplicación diseñada para gestionar eventos y actividades sociales, permitiendo a los usuarios elegir dias y concluir cual es el dia en el que todos coincidan .\n\nDesarrollé el proyecto de forma independiente como solución reutilizable, pensada para adaptarse a distintos contextos sin partir desde cero. La app surgió de la necesidad de facilitar la organización y participación en actividades comunitarias.\n\nEl desafío fue diseñar una experiencia intuitiva que permita a los usuarios navegar lo mas sensillamente posible, crear sus propios eventos y colaborar con otros miembros de la comunidad.\n\n_nota: La versión desplegada es un entorno de demostración — la plataforma de producción se encuentra en uso activo.',
        logo: 'https://iili.io/CkjgbLv.png',
        images: saliditappImages,
        url: 'https://saliditappcalendario.onrender.com/'
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
    id: 2,
    title: 'Aplicaciones Móviles',
    description: 'Rápidas, conectadas y consistentes.',
    tags: ['React Native', 'Flutter', 'Firebase'],
    link: 'https://apps.fluxxar.com',
    /*image: 'https://via.placeholder.com/640x360.png?text=Mobile+Apps',*/
    badge: { text: 'FLUXXAR <mobile/>', colorPart: '#1dd1a1' },
    apps: [
      {
        id: 'sinergiaplus',
        title: 'Sinergia+',
        description: 'Sinergia+ nació como un proyecto académico junto a referentes y organizadores de clubes y grupos comunitarios que necesitaban una solución para fomentar la actividad física y la vida social. La app permite crear y unirse a grupos y eventos — tanto deportivos como recreativos — conectando personas con intereses en común.\n\nLideré el equipo de desarrollo y actué como nexo directo con los organizadores, traduciendo sus necesidades en decisiones de producto. Además de la coordinación del equipo, fui el desarrollador principal, llevando adelante la implementación con Flutter.\n\nEl desafío fue diseñar una experiencia que incentive la participación activa — no solo que los usuarios descubran eventos, sino que los creen, convoquen y sostengan en el tiempo. \n\n\_nota: La versión desplegada es un entorno de demostración — la plataforma de producción se encuentra en uso activo.\n\n\_nota: Usuario (admin): personal@email.com / Contraseña: 123456\n\n\_nota: Usuario(regular): personal2@email.com / Contraseña: 123456 \n\nNimbusOps Software es un proyecto incorporado al portfolio del desarrollador Emiliano Luna (y quien lo solicite que haya participado en el proyecto colaborativo que es Sinergia+), que gestiona su continuidad operativa, el desarrollo del software y su identidad visual.',
        logo: 'https://iili.io/BQ28afV.png',
        images: sinergiaImages,
        url: 'https://appetize.io/app/b_ipfkyazf6xnfyxdrwunk3xbvt4'
      },
      {
        id: 'tallermanager',
        title: 'Taller Manager',
        description: 'Taller Manager es una app móvil diseñada para que los talleres mecánicos dejen de gestionar sus turnos y clientes con papel, agenda o WhatsApp. Desarrollada inicialmente para un taller específico como proyecto base, la app surgió de una necesidad concreta que varios talleres compartían.\n\nDesarrollé el proyecto de forma independiente, cubriendo desde el diseño de la experiencia hasta la implementación completa con Flutter y Firebase.\n\nEl desafío fue centralizar en una sola app flujos que normalmente están fragmentados: agenda de turnos con vista diaria, semanal y mensual, gestión de clientes con sus vehículos, historial de services por vehículo y generación de PDF para compartir con el dueño del auto — todo pensado para usarse rápido, desde el celular, en el contexto de un taller en funcionamiento.\n\n\_nota: La versión desplegada es un entorno de demostración — la plataforma de producción se encuentra en uso activo.',
        logo: 'https://iili.io/BQmFn5B.png',
        images: tallerManagerImages,
        url: 'https://appetize.io/app/b_txis5qfwmpwwigeqsfvfcllr7e'
      },
      {
        id: 'sendmailing',
        title: 'SendMailing App',
        description: 'SendMailing es una app móvil desarrollada a medida para complementar el sistema interno de un emprendimiento de mensajería, con el objetivo de optimizar y simplificar el proceso de reparto y control de envíos.\n\nDesarrollé el proyecto de forma independiente para un emprendimiento local, cubriendo desde el diseño de la experiencia hasta la implementación completa con Flutter y Firebase.\n\nLa app opera en dos roles: el repartidor gestiona sus envíos asignados y actualiza el estado de cada uno — en camino, en almacén, entregado o cancelado — mientras que el manager tiene visibilidad total del historial y puede intervenir ante cualquier problema. La confirmación final se complementa con un sistema de firma en papel ya existente, por lo que la app se integró al flujo real sin reemplazarlo.\n\n\_nota: Usuario (admin): personal@email.com / Contraseña: 123456\n\n\_nota: Usuario(regular): personal2@email.com / Contraseña: 123456\n\n\_nota: La versión desplegada es un entorno de demostración — la plataforma de producción no está en uso activo.',
        logo: 'https://iili.io/BQ2LAYv.png',
        images: sendMailingImages,
        url: 'https://appetize.io/app/b_wbshum4keaqdarufuapr26lsdi'
      }
    ]
  },
  {
    id: 3,
    title: 'Sistemas de gestión.',
    description: 'Organización, datos y procesos en un solo lugar.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://erp-system-dev.onrender.com',
    /*image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=80',*/
    badge: { text: 'FLUXXAR <control/>', colorPart: '#ff4757' },
    apps: [
      {
        id: 'erp-web',
        title: 'Stock-flow (Beta)',
        description: 'ERP StockFlow es una aplicación web de gestión operativa para empresas con múltiples sucursales, diseñada para centralizar y facilitar el control de stock, compras, ventas, logística y permisos de usuarios. \n\n\nLa plataforma permite gestionar de forma integral el flujo operativo de una empresa, con foco en la trazabilidad del inventario y la coordinación de tareas entre sucursales. \n\n-Gestión de stock disponible por sucursal \n\n- Control de lotes y productos \n\n- Órdenes de compra y recepciones \n\n- Pedidos de venta \n\n- Reportes e indicadores operativos \n\n- Inventarios físicos \n\n- Tareas internas y asignación de responsabilidades \n\n- Solicitudes de acceso entre sucursales \n\n- Devoluciones de clientes y proveedores \n\n- Autenticación con roles y permisos \n\n- Dashboard ejecutivo con alertas por stock bajo. \n\n\nLa aplicación cuenta con varios roles para controlar accesos y permisos: \n\n- Super Admin \n\n- Administración \n\n- Encargado \n\n- Recepción \n\n- Almacenaje \n\n- Despacho \n\n- Comercial \n\n- Auditor. \n\n\nEste proyecto fue desarrollado como un ERP interno con arquitectura web moderna usando: \n\n- Frontend: React + TypeScript + Vite + Tailwind CSS \n\n- Backend: Node.js + Express + TypeScript \n\n- Base de datos: PostgreSQL con Prisma \n\n- Autenticación: JWT y control por roles. \n\n\n\ Este usuario tiene acceso para tareas de coordinación y supervisión operativa dentro de la sucursal asignada. \n\n\_nota: Email: encargado@erp.local \n\n\_nota: Contraseña: Enc2026! \n\n\n\ Para probrar otros roles, contactate.',
        logo: 'https://iili.io/Bm4N9YQ.png',
        images: erpImages,
        url: 'https://erp-system-dev.onrender.com/'
      },
       {
         id: 'erp-agent',
         title: 'Acomoda-cajas de Stock flow (Under repair)',
         description: 'Agente IA para consultas rapidas y asistencia al personal. \n\n_nota: Versión Beta (20 consultas diarias): https://consultas-stockflow.onrender.com/ \n\n Stack utilizado: Gemini Flash, Node.js, React.js, MongoDB Atlas, Docker.',
         logo: 'https://iili.io/CCDjzy7.png',
         images: erpAgentImages,
         url: 'https://consultas-stockflow.onrender.com'
       },
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
        <p className="section-tag">// projects[] </p>
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
                  {/*
                  <span className="badge-main">FLUXXAR </span>
                  */}
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
                <div className="project-description modal-project-description">
                  {activeApp.description.split('\n\n').map((paragraph, i) => {
                    if (paragraph.startsWith('_nota:')) {
                      return <p key={i} style={{ fontStyle: 'italic', opacity: 0.7 }}>{paragraph.replace('_nota: ', '')}</p>
                    }
                    return <p key={i}>{paragraph}</p>
                  })}
                </div>
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