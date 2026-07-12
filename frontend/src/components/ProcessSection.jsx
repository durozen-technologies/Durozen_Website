const steps = [
  ['01', 'Discovery', 'Understand goals, users, systems, risks, and business priorities.'],
  ['02', 'Strategy', 'Define product direction, delivery model, architecture, and success metrics.'],
  ['03', 'Planning', 'Break the roadmap into milestones, sprints, dependencies, and launch scope.'],
  ['04', 'Design', 'Create UX flows, interface systems, prototypes, and validation paths.'],
  ['05', 'Development', 'Engineer frontend, backend, APIs, cloud infrastructure, and integrations.'],
  ['06', 'Testing', 'Validate functionality, performance, security, accessibility, and release readiness.'],
  ['07', 'Deployment', 'Launch through stable release pipelines, monitoring, and rollback planning.'],
  ['08', 'Monitoring', 'Track system health, user behavior, incidents, and operational metrics.'],
  ['09', 'Continuous Improvement', 'Iterate features, optimize workflows, and scale the platform over time.'],
]

function ProcessSection() {
  return (
    <section className="bg-primary py-24 text-white" id="process">
      <div className="site-container">
        <div className="reveal mb-16 max-w-4xl">
          <span className="mb-4 inline-flex rounded-lg bg-white/10 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-100">
            Development Process
          </span>
          <h2 className="mb-5 font-h2 text-h2">A disciplined delivery timeline from idea to continuous improvement.</h2>
          <p className="max-w-3xl font-body-lg text-body-lg text-slate-300">
            Our process keeps stakeholders aligned, risks visible, and engineering execution focused from discovery through long-term product evolution.
          </p>
        </div>

        <div className="timeline-grid relative grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, text], index) => (
            <article
              key={number}
              className="timeline-card reveal relative rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20"
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-h3 text-3xl text-cyan-200">{number}</span>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.9)]" />
              </div>
              <h3 className="mb-3 font-h3 text-xl">{title}</h3>
              <p className="text-body-sm text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
