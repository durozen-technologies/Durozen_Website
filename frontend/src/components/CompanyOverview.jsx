import ProductPlanningBoard from '../assets/product-planning-board.jpg'

const stats = [
  { value: '35+', label: 'Projects Delivered' },
  { value: '10+', label: 'Clients Served' },
  { value: '3', label: 'Countries Reached' },
  { value: '12+', label: 'Engineers' },
  { value: '2+', label: 'Years of Experience' },
]

function CompanyOverview() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal-left">
          <div className="overview-visual relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 p-4 shadow-2xl shadow-slate-200">
            <img
              alt="Product planning board"
              className="h-[420px] w-full rounded-lg object-cover opacity-70"
              decoding="async"
              loading="lazy"
              src={ProductPlanningBoard}
            />
            <div className="absolute inset-4 rounded-lg bg-gradient-to-t from-slate-950 via-slate-950/42 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <p className="font-label-sm text-label-sm uppercase text-cyan-100">Enterprise delivery system</p>
              <h3 className="mt-3 font-h3 text-2xl">Strategy, design, engineering, deployment, and growth in one execution flow.</h3>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-3 py-2 font-label-sm text-label-sm uppercase text-blue-700">
            Company Overview
          </span>
          <h2 className="mb-6 max-w-3xl font-h2 text-h2 text-on-surface">
            A technology partner for ambitious teams building serious digital products.
          </h2>
          <p className="mb-8 max-w-3xl font-body-lg text-body-lg text-secondary">
            Durozen combines product strategy, cloud engineering, application development, AI integration, and long-term support to help organizations ship dependable software with enterprise-grade execution.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {stats.map((stat, index) => (
              <div key={stat.label} className="reveal rounded-lg border border-slate-200 bg-slate-50 p-4" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="font-h3 text-3xl text-primary">{stat.value}</div>
                <div className="mt-2 text-body-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
