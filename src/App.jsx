import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openContactModal = () => setContactOpen(true)
  const closeContactModal = () => setContactOpen(false)

  return (
    <div className="app">
      <Header scrolled={scrolled} onContactClick={openContactModal} />
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