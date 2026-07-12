import { useEffect } from 'react'
import Advantage from './components/Advantage'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Navbar from './components/Navbar'
import ProcessSection from './components/ProcessSection'
import Services from './components/Services'
import './App.css'

function App() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal()

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [])

  return (
    <div className="overflow-x-hidden bg-surface-main text-on-surface font-body-md">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Advantage />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
