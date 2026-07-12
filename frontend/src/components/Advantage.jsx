const advantageItems = [
  {
    icon: 'rocket_launch',
    title: 'Results-First Approach',
    text: "We do not just provide services; we focus on the ROI and business outcomes you care about.",
    delay: '50ms',
  },
  {
    icon: 'psychology',
    title: 'AI-Powered Automation',
    text: 'Leveraging the latest in AI to reduce manual tasks and improve team efficiency.',
    delay: '100ms',
  },
  {
    icon: 'analytics',
    title: 'Data-Driven Decisions',
    text: 'Every move we make is backed by rigorous analysis and real-time performance data.',
    delay: '150ms',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Support',
    text: 'Our experts are your partners, providing constant communication and expert guidance.',
    delay: '200ms',
  },
  {
    icon: 'speed',
    title: 'Fast Execution',
    text: 'We value speed without sacrificing quality, ensuring you launch and scale faster.',
    delay: '250ms',
  },
  {
    icon: 'hub',
    title: 'Multi-Industry Expertise',
    text: 'Deep knowledge across sectors allows us to apply cross-industry best practices.',
    delay: '300ms',
  },
]

function Advantage() {
  return (
    <section className="bg-primary py-24 text-on-primary" id="about">
      <div className="site-container">
        <h2 className="reveal mb-16 text-center font-h2 text-h2">The Durozen Advantage</h2>

        <div className="grid gap-12 md:grid-cols-3">
          {advantageItems.map((item) => (
            <div key={item.title} className="reveal flex gap-6" style={{ transitionDelay: item.delay }}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <span className="material-symbols-outlined text-white">{item.icon}</span>
              </div>
              <div>
                <h4 className="mb-2 font-h3 text-lg">{item.title}</h4>
                <p className="text-body-sm text-slate-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantage
