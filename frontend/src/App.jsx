import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Advantage from './components/Advantage'
import CaseStudies from './components/CaseStudies'
import CompanyOverview from './components/CompanyOverview'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PageEnhancements from './components/PageEnhancements'
import ProcessSection from './components/ProcessSection'
import Services from './components/Services'
import SolutionsSection from './components/SolutionsSection'
import TechnologyStack from './components/TechnologyStack'
import LegalPage from './pages/LegalPage'
// import Testimonials from './components/Testimonials'
import './App.css'

function HomePage() {
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
      <PageEnhancements />
      <Navbar />
      <Hero />
      <CompanyOverview />
      <Services />
      <SolutionsSection />
      <TechnologyStack />
      <ProcessSection />
      <Advantage />
      <CaseStudies />
      {/* <Testimonials /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  )
}

export default App
