import { useEffect, useState } from 'react'
import DurozenLogo from '../assets/Durozen.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl' : 'border-white/10 bg-white/80 backdrop-blur-md'}`}>
      <div className="site-container flex w-full items-center justify-between py-3">
        <a className="flex items-center gap-3" href="#home" aria-label="Durozen home">
          <img
            alt="Durozen logo"
            className="h-10 w-auto"
            src={DurozenLogo}
          />
          <span className="text-xl font-bold text-slate-950">Durozen</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold lg:flex font-label-md">
          {navLinks.map((link) => (
            <a key={link.href} className="text-slate-600 transition-colors hover:text-primary" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md font-label-md" href="#contact">
          Book a Consultation
        </a>
      </div>
    </nav>
  )
}

export default Navbar
