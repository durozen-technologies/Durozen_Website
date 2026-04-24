import HomePageLandingImage from '../assets/HeroPageLangingImage.jpeg'

function Hero() {
  return (
    <header className="overflow-hidden pb-20 pt-32">
      <div className="site-container grid items-center gap-16 lg:grid-cols-2">
        <div className="reveal-left active">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-1.5 text-label-md text-on-secondary-container font-label-md">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Digital Growth and Automation Agency
          </span>

          <h1
            className="mb-6 text-h1 italic leading-tight text-on-surface not-italic font-h1"
            style={{ fontFamily: 'Poppins, sans-serif', wordSpacing: '0.15em' }}
          >
            We Grow Your Business With Smart Strategies
          </h1>

          <p className="mb-10 max-w-xl font-body-lg text-body-lg text-secondary">
            From digital marketing to intelligent automation, Durozen helps businesses across industries scale faster, smarter, and more efficiently.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-label-md text-on-primary transition-all hover:opacity-90 font-label-md" href="#services">
              Explore Services <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a className="flex items-center justify-center rounded-lg border border-border-subtle bg-white px-8 py-4 text-label-md transition-all hover:bg-surface-muted font-label-md" href="#contact">
              Talk to Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border-subtle pt-10 sm:grid-cols-4">
            <div>
              <div className="font-h3 text-h3 text-primary">10+</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Clients Served</div>
            </div>
            <div>
              <div className="font-h3 text-h3 text-primary">2+</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Years Experience</div>
            </div>
            <div>
              <div className="font-h3 text-h3 text-primary">8</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Industries</div>
            </div>
            <div>
              <div className="font-h3 text-h3 text-primary">98%</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Retention</div>
            </div>
          </div>
        </div>

        <div className="relative reveal-right active">
          <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-full bg-secondary-container/30 blur-3xl" />
          <div className="absolute -bottom-12 -right-12 -z-10 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl" />
          <div className="rotate-2 rounded-2xl border border-border-subtle bg-white p-4 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <img
              alt="Modern analytics dashboard"
              className="h-[400px] w-full rounded-lg object-contain bg-white"
              src={HomePageLandingImage}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
