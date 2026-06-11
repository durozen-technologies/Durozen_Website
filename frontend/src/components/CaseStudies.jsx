import CaseKncetAdmission from '../assets/case-kncet-admission.png'
import CasePosBillingTracking from '../assets/case-pos-billing-tracking.svg'
import CaseRamsConstruct from '../assets/case-rams-construct.png'

const caseStudies = [
  {
    title: 'KNCET Admission Portal',
    industry: 'Education',
    challenge: 'Kongunadu College needed a focused digital admission experience for applicants and administrators.',
    solution: 'Delivered an admission portal with structured enquiry capture, application workflows, and responsive access.',
    technologies: ['Admission Portal', 'Web App', 'Forms', 'Admin Flow'],
    result: 'Live admission portal',
    image: CaseKncetAdmission,
    imageAlt: 'KNCET admission portal dashboard interface',
    url: 'https://admission.kongunadu.ac.in/',
  },
  {
    title: 'RAMS Construct',
    industry: 'Construction and Marketing',
    challenge: 'RAMS Construct needed a professional web presence with marketing support for stronger project visibility.',
    solution: 'Built a polished company website and supported digital marketing foundations for lead generation.',
    technologies: ['Website', 'SEO', 'Marketing', 'Lead Flow'],
    result: 'Website plus marketing',
    image: CaseRamsConstruct,
    imageAlt: 'RAMS Construct website homepage',
    url: 'https://ramsconstruct.co.uk/',
  },
  {
    title: 'POS Billing System and Tracking',
    industry: 'Retail Operations',
    challenge: 'Retail teams needed a simpler way to manage billing activity and track operational movement.',
    solution: 'Created a POS billing and tracking system for transactions, visibility, and daily business control.',
    technologies: ['POS', 'Billing', 'Tracking', 'Reports'],
    result: 'Billing and tracking system',
    image: CasePosBillingTracking,
    imageAlt: 'POS billing and tracking system dashboard interface',
  },
]

function CaseStudies() {
  return (
    <section className="bg-white py-24" id="case-studies">
      <div className="site-container">
        <div className="reveal mb-14 max-w-4xl">
          <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-3 py-2 font-label-sm text-label-sm uppercase text-blue-700">
            Case Studies
          </span>
          <h2 className="font-h2 text-h2 text-on-surface">Selected client work and product builds.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="case-card reveal group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10" style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="relative h-56 overflow-hidden">
                <img alt={study.imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src={study.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-2 font-label-sm text-label-sm text-primary">
                  {study.industry}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-4 font-h3 text-xl text-on-surface">{study.title}</h3>
                <p className="mb-3 text-body-sm text-secondary"><strong className="text-on-surface">Challenge:</strong> {study.challenge}</p>
                <p className="mb-5 text-body-sm text-secondary"><strong className="text-on-surface">Solution:</strong> {study.solution}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-h3 text-lg text-blue-700">{study.result}</span>
                  <a
                    className="font-label-md text-label-md text-primary"
                    href={study.url || '#contact'}
                    rel={study.url ? 'noreferrer' : undefined}
                    target={study.url ? '_blank' : undefined}
                  >
                    {study.url ? 'View project' : 'Discuss project'}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
