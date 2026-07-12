const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    text: 'We understand your business goals, challenges, and current digital footprint.',
    delay: '100ms',
  },
  {
    number: '02',
    title: 'Custom Strategy',
    text: 'A bespoke roadmap tailored to your specific industry and growth objectives.',
    delay: '200ms',
  },
  {
    number: '03',
    title: 'Execution and Launch',
    text: 'Our specialists build your systems and launch your digital campaigns.',
    delay: '300ms',
  },
  {
    number: '04',
    title: 'Optimize and Scale',
    text: 'Continuous monitoring and optimization to drive compounding growth.',
    delay: '400ms',
  },
]

function ProcessSection() {
  return (
    <section className="bg-white py-24" id="process">
      <div className="site-container">
        <div className="reveal mb-20 text-center">
          <h2 className="font-h2 text-h2 text-on-surface">Our Simple 4-Step Process</h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full -translate-y-12 bg-border-subtle md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal relative rounded-xl border border-border-subtle bg-white p-6"
              style={{ transitionDelay: step.delay }}
            >
              <div className="absolute -top-8 left-6 font-h1 text-h1 text-surface-container-highest opacity-30">
                {step.number}
              </div>
              <div className="pt-8">
                <h4 className="mb-2 font-h3 text-lg">{step.title}</h4>
                <p className="text-body-sm text-secondary">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
