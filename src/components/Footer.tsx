import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center mb-6">
              <Logo className="h-8 w-auto mr-3" />
              <h3 className="font-serif font-bold text-2xl tracking-tight">
                Durozen
              </h3>
            </div>
            <p className="text-blue-200 text-sm max-w-sm leading-relaxed">
              Premium IT services and enterprise software delivery for
              businesses building scalable digital platforms.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-4 sm:gap-8 md:gap-12">
            <div className="col-span-1">
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-blue-100">
                Company
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-200">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Client Projects & Project Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-blue-100">
                Services
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-200">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Cloud Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors inline-block break-words"
                  >
                    Product Dev.
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-blue-100">
                Contact
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-200">
                <li className="break-all">info@durozen.in</li>
                <li className="break-words">+(91) 81223 39694</li>
                <li className="break-words">
                  <a
                    href="https://maps.app.goo.gl/Tu8joQKuoLoGaEyn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Namakkal, Tamil Nadu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-100">
          <p className="mb-4 md:mb-0">
            Copyright 2026 Durozen. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
