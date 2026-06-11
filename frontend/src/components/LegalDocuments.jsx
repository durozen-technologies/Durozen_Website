const privacyItems = [
  {
    title: 'Information we collect',
    text: 'When you contact Durozen, we may collect your name, email address, company name, phone number, selected service, and message details.',
  },
  {
    title: 'How we use information',
    text: 'We use submitted information to respond to enquiries, schedule consultations, understand project requirements, provide support, and improve our services.',
  },
  {
    title: 'Data sharing',
    text: 'We do not sell personal information. We may share limited information with trusted service providers only when needed to operate our website, communication, hosting, or business workflows.',
  },
  {
    title: 'Security and retention',
    text: 'We use reasonable technical and organizational measures to protect submitted information and retain it only as long as needed for business, legal, or operational purposes.',
  },
  {
    title: 'Your choices',
    text: 'You may request access, correction, or deletion of your contact information by emailing info@durozen.in.',
  },
]

const termsItems = [
  {
    title: 'Website use',
    text: 'You may browse this website for business information about Durozen services. You agree not to misuse, disrupt, scrape, or attempt unauthorized access to the site.',
  },
  {
    title: 'Service discussions',
    text: 'Information on this website is general and does not create a contract, proposal, warranty, or commitment unless confirmed in a separate written agreement.',
  },
  {
    title: 'Intellectual property',
    text: 'The Durozen name, website content, layout, graphics, and service descriptions belong to Durozen or its licensors and may not be copied without permission.',
  },
  {
    title: 'Third-party links',
    text: 'This website may link to third-party websites or client projects. Durozen is not responsible for the content, security, or practices of external websites.',
  },
  {
    title: 'Limitation of liability',
    text: 'The website is provided for informational use. To the extent permitted by law, Durozen is not liable for losses arising from website use or reliance on website content.',
  },
]

function LegalCard({ id, label, title, items }) {
  return (
    <article className="reveal rounded-lg border border-slate-200 bg-white p-8 shadow-sm" id={id}>
      <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-3 py-2 font-label-sm text-label-sm uppercase text-blue-700">
        {label}
      </span>
      <h2 className="mb-3 font-h2 text-3xl text-on-surface">{title}</h2>
      <p className="mb-8 text-body-sm text-secondary">Last updated: June 11, 2026</p>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="mb-2 font-h3 text-lg text-on-surface">{item.title}</h3>
            <p className="text-body-sm text-secondary">{item.text}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

function LegalDocuments() {
  return (
    <section className="bg-surface-muted py-24" id="legal">
      <div className="site-container">
        <div className="reveal mb-10 max-w-3xl">
          <span className="mb-4 inline-flex rounded-lg bg-cyan-50 px-3 py-2 font-label-sm text-label-sm uppercase text-cyan-700">
            Legal
          </span>
          <h2 className="font-h2 text-h2 text-on-surface">Privacy Policy and Terms</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <LegalCard id="privacy-policy" label="Privacy Policy" title="How Durozen handles contact information." items={privacyItems} />
          <LegalCard id="terms" label="Terms" title="Terms for using this website." items={termsItems} />
        </div>
      </div>
    </section>
  )
}

export default LegalDocuments
