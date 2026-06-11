const advantageItems = [
  ['engineering', 'Experienced Engineers', 'Senior delivery thinking across product, frontend, backend, cloud, data, and integrations.'],
  ['speed', 'Agile Delivery', 'Sprint-based execution with visible progress, fast feedback loops, and launch discipline.'],
  ['security', 'Secure Development', 'Security-minded architecture, access control, validation, and deployment practices.'],
  ['cloud', 'Cloud Native Architecture', 'Systems planned for reliability, observability, scale, and maintainable operations.'],
  ['psychology', 'AI Integration', 'Practical AI capabilities that automate workflows, support teams, and enrich products.'],
  ['forum', 'Transparent Communication', 'Clear milestones, demos, status updates, documentation, and decision visibility.'],
  ['support_agent', 'Dedicated Support', 'Hands-on support before, during, and after launch so systems keep improving.'],
  ['schema', 'Scalable Systems', 'Product foundations designed for users, data, integrations, and future feature growth.'],
]

function Advantage() {
  return (
    <section className="bg-slate-950 py-24 text-white" id="why-us">
      <div className="site-container">
        <div className="reveal mb-14 max-w-4xl">
          <span className="mb-4 inline-flex rounded-lg bg-white/10 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-100">
            Why Choose Us
          </span>
          <h2 className="mb-5 font-h2 text-h2">Built for teams that need dependable execution, not just attractive screens.</h2>
          <p className="max-w-3xl font-body-lg text-body-lg text-slate-300">
            We combine product judgment, engineering discipline, communication, and long-term support to reduce risk and move faster.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {advantageItems.map(([icon, title, text], index) => (
            <article key={title} className="reveal rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10" style={{ transitionDelay: `${index * 55}ms` }}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-200">
                <span className="material-symbols-outlined">{icon}</span>
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

export default Advantage
