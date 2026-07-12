const services = [
  {
    title: 'Custom Software Development',
    icon: 'deployed_code',
    description: 'Tailored web, mobile, and internal systems built around your operations, users, and growth model.',
  },
  {
    title: 'Enterprise Application Development',
    icon: 'domain',
    description: 'Secure, scalable applications for complex workflows, permissions, reporting, and integrations.',
  },
  {
    title: 'Web Development',
    icon: 'language',
    description: 'High-performance websites, portals, dashboards, landing pages, and web applications.',
  },
  {
    title: 'Mobile Development',
    icon: 'phone_iphone',
    description: 'Launch-ready Android, iOS, and cross-platform apps with clean UX and stable backends.',
  },
  {
    title: 'Cloud Engineering',
    icon: 'cloud',
    description: 'Cloud-native architecture, migration, deployment, scaling, security, and monitoring.',
  },
  {
    title: 'DevOps',
    icon: 'settings_suggest',
    description: 'CI/CD pipelines, release automation, infrastructure workflows, and reliability practices.',
  },
  {
    title: 'AI and Machine Learning',
    icon: 'psychology',
    description: 'AI assistants, automation workflows, RAG systems, analytics, and model integrations.',
  },
  {
    title: 'Data Engineering',
    icon: 'database',
    description: 'Data pipelines, business intelligence layers, dashboards, warehouses, and reporting systems.',
  },
  {
    title: 'UI/UX Design',
    icon: 'draw',
    description: 'Product strategy, UX flows, design systems, prototypes, and conversion-focused interfaces.',
  },
  {
    title: 'Product Development',
    icon: 'rocket_launch',
    description: 'MVP planning, SaaS platforms, admin panels, portals, and continuous feature delivery.',
  },
  {
    title: 'API Development',
    icon: 'api',
    description: 'Robust APIs, third-party integrations, authentication, documentation, and versioning.',
  },
  {
    title: 'Digital Transformation',
    icon: 'hub',
    description: 'Modernize manual processes, legacy tools, customer touchpoints, and business workflows.',
  },
  {
    title: 'IT Consulting',
    icon: 'support_agent',
    description: 'Technical roadmaps, audits, architecture decisions, platform planning, and delivery guidance.',
  },
  {
    title: 'QA and Automation',
    icon: 'verified',
    description: 'Manual testing, automated test coverage, release validation, and quality engineering.',
  },
]

function Services() {
  return (
    <section className="bg-surface-muted py-24" id="services">
      <div className="site-container reveal mb-16 max-w-4xl">
        <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-3 py-2 font-label-sm text-label-sm uppercase text-blue-700">
          Services
        </span>
        <h2 className="mb-5 font-h2 text-h2 text-on-surface">Enterprise IT services engineered for scale.</h2>
        <p className="max-w-3xl font-body-lg text-body-lg text-secondary">
          Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.
        </p>
      </div>

      <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card reveal group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="mb-3 font-h3 text-xl text-on-surface">{service.title}</h3>
            <p className="mb-6 text-body-sm text-secondary">{service.description}</p>
            <a className="inline-flex items-center gap-2 font-label-md text-label-md text-blue-700 hover:text-primary" href="#contact">
              Learn More
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
