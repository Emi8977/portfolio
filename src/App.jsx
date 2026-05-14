import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [navbarExpanded, setNavbarExpanded] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const heroElement = document.querySelector('.hero')
    if (!heroElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavbarExpanded(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(heroElement)
    return () => observer.disconnect()
  }, [])

  const openContactModal = () => setContactOpen(true)
  const closeContactModal = () => setContactOpen(false)

  return (
    <div className="app">
      <Header expanded={navbarExpanded} onContactClick={openContactModal} />
      <main>
        <Hero onContactClick={openContactModal} />
        <About />
        <Services />
        <Projects />
        <Contact isOpen={contactOpen} onClose={closeContactModal} />
      </main>
      <Footer onContactClick={openContactModal} />
    </div>
  )
}

export default App