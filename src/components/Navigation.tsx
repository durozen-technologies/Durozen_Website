'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/solutions', label: 'Solutions' },
    { id: '/projects', label: 'Client Projects & Project Work' },
    { id: '/blog', label: 'Blog' },
    { id: '/careers', label: 'Careers' },
    { id: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-surface border-b border-outline sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center z-10 min-w-0 pr-4 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none"
        >
          <Logo className="h-8 sm:h-10 w-auto shrink-0" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.id);
            return (
              <Link
                key={link.id}
                href={link.id}
                className={`text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                  active
                    ? 'text-primary border-b-2 border-secondary pb-1'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            href="/contact"
            className="group relative bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-md font-medium text-xs md:text-sm hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Book a Consultation
          </Link>

          <button
            className="md:hidden text-primary p-2 rounded-md hover:bg-primary/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden absolute top-full left-0 w-full bg-surface border-b border-outline shadow-lg"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link.id);
                return (
                  <Link
                    key={link.id}
                    href={link.id}
                    onClick={() => setIsOpen(false)}
                    className={`text-left text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                      active
                        ? 'text-primary font-bold'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white px-6 py-3 rounded font-medium text-sm mt-4 text-center outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
