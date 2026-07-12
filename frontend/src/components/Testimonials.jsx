import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Arun Kumar',
    company: 'NexaOps',
    designation: 'Operations Director',
    rating: '5/5',
    quote: 'Durozen translated our messy operations into a clean internal platform. Communication was clear, and the release process felt controlled from day one.',
  },
  {
    name: 'Meera Shah',
    company: 'CareAxis',
    designation: 'Founder',
    rating: '5/5',
    quote: 'The team understood our product vision quickly and gave us a practical roadmap. The final application felt polished, fast, and easy for our staff to adopt.',
  },
  {
    name: 'Rahul Menon',
    company: 'TradeNest',
    designation: 'Technology Lead',
    rating: '5/5',
    quote: 'Their engineering team helped us stabilize the backend, improve dashboards, and deploy confidently. They think beyond tickets and care about outcomes.',
  },
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5200)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <section className="bg-surface-muted py-24" id="testimonials">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal-left">
          <span className="mb-4 inline-flex rounded-lg bg-cyan-50 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-700">
            Testimonials
          </span>
          <h2 className="mb-5 font-h2 text-h2 text-on-surface">Trusted by teams that need technology to work in the real world.</h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-secondary">
            Clients choose Durozen for clear thinking, reliable execution, and systems that keep improving after launch.
          </p>
        </div>

        <div className="reveal-right rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-blue-950/5">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary font-h3 text-xl text-white">
              {active.name.split(' ').map((part) => part[0]).join('')}
            </div>
            <div>
              <div className="font-h3 text-xl text-on-surface">{active.name}</div>
              <div className="text-body-sm text-secondary">{active.designation}, {active.company}</div>
              <div className="mt-1 font-label-sm text-label-sm text-blue-700">{active.rating}</div>
            </div>
          </div>

          <blockquote className="min-h-[140px] font-body-lg text-2xl leading-relaxed text-slate-800">
            "{active.quote}"
          </blockquote>

          <div className="mt-8 flex items-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={`h-3 rounded-full transition-all ${index === activeIndex ? 'w-10 bg-primary' : 'w-3 bg-slate-300 hover:bg-slate-400'}`}
                type="button"
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
