const services = [
  {
    title: 'Digital Marketing',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    icon: 'trending_up',
    delay: '100ms',
    items: [
      'SEO and SEM',
      'Social Media Ads',
      'Content Strategy',
      'Email Marketing',
      'Brand Strategy',
      'Performance Analytics',
    ],
  },
  {
    title: 'Business Automation',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    icon: 'precision_manufacturing',
    delay: '200ms',
    items: [
      'CRM Integration',
      'Lead Nurturing Workflows',
      'WhatsApp Chatbots',
      'Automated Invoicing',
      'AI Support Systems',
      'API and App Integrations',
    ],
  },
  {
    title: 'Web Development',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-on-tertiary-fixed-variant',
    icon: 'terminal',
    delay: '300ms',
    items: [
      'Corporate Websites',
      'High-Conversion Landing Pages',
      'E-Commerce Solutions',
      'WordPress and Custom CMS',
      'Mobile-Responsive Design',
      'UI and UX Optimization',
    ],
  },
]

function Services() {
  return (
    <section className="bg-surface-muted py-24" id="services">
      <div className="site-container reveal mb-16 text-center">
        <h2 className="mb-4 font-h2 text-h2 text-on-surface">Our Core Services</h2>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-secondary">
          We combine data-driven digital marketing with powerful automation to deliver measurable results for your business.
        </p>
      </div>

      <div className="site-container grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="reveal rounded-xl border border-border-subtle bg-white p-8 transition-all duration-300 hover:shadow-lg"
            style={{ transitionDelay: service.delay }}
          >
            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${service.iconBg}`}>
              <span className={`material-symbols-outlined ${service.iconColor}`}>{service.icon}</span>
            </div>
            <h3 className="mb-4 font-h3 text-h3">{service.title}</h3>
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-md text-secondary">
                  <span className="material-symbols-outlined text-sm text-success">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
