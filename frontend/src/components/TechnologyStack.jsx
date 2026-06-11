const stacks = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Node.js', 'Java Spring Boot', '.NET'],
  },
  {
    title: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'Go'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud', 'Hostinger'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'AI',
    items: ['OpenAI', 'LangChain', 'Vector Databases', 'MCP', 'RAG'],
  },
]

function TechnologyStack() {
  return (
    <section className="bg-white py-24" id="technologies">
      <div className="site-container">
        <div className="reveal mb-14 max-w-4xl">
          <span className="mb-4 inline-flex rounded-lg bg-cyan-50 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-700">
            Technology Stack
          </span>
          <h2 className="mb-5 font-h2 text-h2 text-on-surface">Modern platforms, proven engineering tools.</h2>
          <p className="max-w-3xl font-body-lg text-body-lg text-secondary">
            We choose technologies for maintainability, security, scale, ecosystem maturity, and long-term product velocity.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {stacks.map((stack, index) => (
            <article key={stack.title} className="reveal rounded-lg border border-slate-200 bg-slate-50 p-6" style={{ transitionDelay: `${index * 70}ms` }}>
              <h3 className="mb-5 font-h3 text-xl text-on-surface">{stack.title}</h3>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <span key={item} className="tech-badge rounded-lg border border-slate-200 bg-white px-4 py-3 font-label-md text-label-md text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-200 hover:text-primary hover:shadow-md">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
