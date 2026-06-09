import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About Us' },
    { id: '/services', label: 'Services' },
    { id: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-surface border-b border-outline sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center z-10 min-w-0 pr-4">
          <img src="/logo.png" alt="Rams Construct Ltd" className="h-16 w-16 md:h-18 md:w-20 aspect-square object-contain mix-blend-multiply scale-110 origin-left shrink-0" />
          <span className="ml-2 md:ml-2 font-serif font-bold text-base sm:text-lg md:text-xl tracking-wider md:tracking-tighter text-primary mt-1 whitespace-nowrap truncate">
            RAMS CONSTRUCT
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              className={`text-sm font-medium transition-colors ${isActive(link.id) ? 'text-primary border-b-2 border-secondary pb-1' : 'text-text-muted hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            to="/quote"
            className="bg-secondary text-white px-6 py-2.5 rounded font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline shadow-lg p-6 flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              onClick={() => setIsOpen(false)}
              className={`text-left text-sm font-medium ${isActive(link.id) ? 'text-primary font-bold' : 'text-text-muted'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-white px-6 py-3 rounded font-medium text-sm mt-4 text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
