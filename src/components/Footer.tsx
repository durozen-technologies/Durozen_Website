import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-2">
          <h3 className="font-serif font-bold text-2xl mb-4">RAMS CONSTRUCT LTD</h3>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Engineered Excellence. Delivering premium architectural construction and structural integrity across residential and commercial sectors.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 RAMS CONSTRUCT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}
