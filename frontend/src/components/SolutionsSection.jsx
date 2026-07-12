const solutions = [
  {
    title: 'Enterprise Resource Planning',
    text: 'Centralize operations, approvals, inventory, finance, and reporting in one reliable platform.',
    icon: 'account_tree',
  },
  {
    title: 'Customer Management Systems',
    text: 'Manage leads, service workflows, customer histories, and follow-up automation with clarity.',
    icon: 'groups',
  },
  {
    title: 'AI Automation',
    text: 'Automate repetitive tasks, support workflows, document processing, and decision assistance.',
    icon: 'auto_awesome',
  },
  {
    title: 'Business Intelligence',
    text: 'Turn raw data into executive dashboards, operational insights, and performance visibility.',
    icon: 'analytics',
  },
  {
    title: 'Workflow Automation',
    text: 'Replace manual handoffs with custom workflows, notifications, approvals, and integrations.',
    icon: 'sync_alt',
  },
  {
    title: 'SaaS Platforms',
    text: 'Build subscription-ready products with role-based access, billing paths, and admin control.',
    icon: 'deployed_code',
  },
  {
    title: 'Internal Business Tools',
    text: 'Create fast, secure tools for operations, teams, field staff, and management decisions.',
    icon: 'construction',
  },
  {
    title: 'Analytics Dashboards',
    text: 'Monitor KPIs, users, revenue, campaigns, operations, and system health in real time.',
    icon: 'dashboard',
  },
]

function SolutionsSection() {
  return (
    <section className="bg-white py-24" id="solutions">
      <div className="site-container">
        <div className="reveal mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="mb-4 inline-flex rounded-lg bg-cyan-50 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-700">
              Solutions
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">Business platforms that solve operational problems.</h2>
          </div>
          <p className="max-w-3xl self-end font-body-lg text-body-lg text-secondary">
            We design systems around business outcomes: faster decisions, cleaner operations, better customer experiences, and scalable digital revenue.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <article key={solution.title} className="reveal group rounded-lg border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5" style={{ transitionDelay: `${index * 55}ms` }}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:rotate-3 group-hover:scale-105">
                <span className="material-symbols-outlined">{solution.icon}</span>
              </div>
              <h3 className="mb-3 font-h3 text-xl text-on-surface">{solution.title}</h3>
              <p className="text-body-sm text-secondary">{solution.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
