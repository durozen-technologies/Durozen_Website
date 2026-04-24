import DurozenLogo from '../assets/Durozen.png'

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="site-container flex w-full items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              alt="Durozen logo"
              className="h-12 w-auto"
              src={DurozenLogo}
            />
            <span
              className="text-2xl font-semibold tracking-tight text-slate-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Durozen
            </span>
          </div>

          <div className="hidden items-center gap-8 text-base font-semibold tracking-tight md:flex font-label-md">
            <a className="text-slate-600 transition-colors hover:text-slate-900" href="#services">Services</a>
            <a className="text-slate-600 transition-colors hover:text-slate-900" href="#industries">Industries</a>
            <a className="text-slate-600 transition-colors hover:text-slate-900" href="#process">Process</a>
            <a className="text-slate-600 transition-colors hover:text-slate-900" href="#about">About</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-base font-semibold text-slate-600 hover:text-slate-900 md:block font-label-md" type="button">
            Explore Services
          </button>
          <a className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 font-label-md" href="#contact">
            Talk to Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
