import HeroCodeWorkspace from '../assets/hero-code-workspace.jpg'
import HeroEngineeringTeam from '../assets/hero-engineering-team.jpg'

const trustIndicators = [
  'Trusted by businesses',
  'Secure development',
  'Enterprise-ready solutions',
]

const particles = [
  [8, 22],
  [16, 68],
  [24, 38],
  [31, 78],
  [39, 18],
  [47, 58],
  [54, 30],
  [62, 74],
  [68, 18],
  [74, 50],
  [82, 28],
  [88, 70],
  [12, 84],
  [34, 52],
  [57, 88],
  [79, 84],
  [92, 42],
  [45, 8],
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  )
}

function Hero() {
  return (
    <header className="hero-shell relative isolate min-h-screen overflow-hidden pt-24 text-white" id="home">
      <img
        alt="Software engineering workspace with programming code"
        className="hero-background absolute inset-0 -z-30 h-full w-full object-cover"
        src={HeroCodeWorkspace}
      />
      <div className="hero-overlay absolute inset-0 -z-20" />
      <div className="hero-mesh absolute inset-0 -z-10" />
      <div className="hero-particles absolute inset-0 -z-10" aria-hidden="true">
        {particles.map(([left, top], index) => (
          <span key={`${left}-${top}`} style={{ '--i': index, left: `${left}%`, top: `${top}%` }} />
        ))}
      </div>

      <div className="site-container grid min-h-[calc(100vh-6rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-left active max-w-4xl">
          <span className="mb-7 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-label-md text-cyan-100 shadow-sm backdrop-blur-md font-label-md">
            <CheckIcon />
            Enterprise Software, Cloud, AI and IT Services
          </span>

          <h1 className="mb-7 max-w-4xl font-h1 text-[42px] leading-[1.08] text-white sm:text-[60px] lg:text-[76px]">
            Engineering Digital Excellence for the Modern Enterprise
          </h1>

          <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-slate-200">
            We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications that help businesses innovate faster.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="btn-ripple flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-label-md text-primary shadow-lg shadow-cyan-950/20 transition-all hover:-translate-y-0.5 hover:bg-cyan-100 font-label-md" href="#contact">
              Get Started <ArrowIcon />
            </a>
            <a className="btn-ripple flex items-center justify-center rounded-lg border border-white/35 px-8 py-4 text-label-md text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 font-label-md" href="#services">
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-body-sm text-slate-200 backdrop-blur-md">
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal-right active hidden min-h-[640px] lg:block">
          <div className="hero-orbit" aria-hidden="true" />

          <div className="hero-photo-card hero-photo-card-main">
            <img alt="Enterprise software engineers collaborating" src={HeroEngineeringTeam} />
          </div>

          <div className="hero-dashboard-card">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-label-sm text-label-sm text-slate-400">enterprise.platform</span>
            </div>

            <div className="grid gap-3">
              {['Cloud migration', 'AI automation', 'Secure API layer', 'DevOps pipeline'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3">
                  <span className="font-body-sm text-body-sm text-slate-200">{item}</span>
                  <span className="font-label-sm text-label-sm text-cyan-200">{92 + index}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-code-panel" aria-label="Animated software engineering code panel">
            <div className="space-y-3 font-mono text-sm leading-6 text-slate-200">
              <p><span className="text-cyan-300">deploy</span>(&#123;</p>
              <p className="pl-5"><span className="text-emerald-300">security</span>: 'zero-trust',</p>
              <p className="pl-5"><span className="text-emerald-300">scale</span>: 'cloud-native',</p>
              <p className="pl-5"><span className="text-emerald-300">release</span>: 'continuous'</p>
              <p>&#125;)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
